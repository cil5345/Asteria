// app id 519631592082573
import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import FacebookLoginBtn from "react-facebook-login"
import "./style.css"
import { getCurrentUser, createUser } from "../../utils/API"
import { storeInSession } from "../../utils/sessionController"

class LoginFacebook extends Component {

    state = {
        auth: false,
        fbDetails: {},
        clicked: false,
        redirect: null
    }
    
    componentClicked = async () => {
        this.setState({clicked: true})
        console.log("clicked")
    }
    
    responseFacebook = async response => {

        console.log("facebook is always watching")

        this.setState({ fbDetails: {
            fb_ID: response.id,
            name: response.name,
            imageLink: response.picture.data.url
        }})
        //get the user from our DB
        const user = await this.getThisUser()
        console.log(user)
        //if we do not find a user with that id we will create a user
        //for testing puposes we should make a bs id in order to see if it creates a new user
        !user ? await createUser(this.state.fbDetails)
            .then(res => console.log(res))
            .catch(err => console.log(err)) : storeInSession(user)
        //if the user we got back has a gender we can assume they have set their profile previously, we will direct them to the Activity
        if(user) {
            !user.gender ? this.setState({redirect: "/Profile"}) : this.setState({redirect: "/Activity"})
        }
        //set auth to true and proceed to re-render
        this.setState({ auth: true })
        console.log(this.state.auth)
    }

    getThisUser = async () => await getCurrentUser(this.state.fbDetails.fb_ID)
                                        .then(data => data.data)
                                        .catch(err => console.log(err))

    render = () => {
        if (this.state.auth && this.state.fbDetails.fb_ID && this.state.clicked) {
                return <Redirect to={this.state.redirect}/>
        } else if(this.state.auth && !this.state.fbDetails.fb_ID) {
                const user = this.getThisUser()
                console.log("54")
                storeInSession(user)
        }

        let facebookData

        facebookData = <>
        <FacebookLoginBtn
        appId="519631592082573"
        autoLoad={true}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />
        </>
        return <>{facebookData}</>
    }
}

export default LoginFacebook