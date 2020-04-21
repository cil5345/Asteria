// app id 519631592082573
import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import FacebookLoginBtn from "react-facebook-login"
import "./style.css"
import { getOneUser, createUser } from "../../utils/API"
import { storeInSession } from "../../utils/sessionController"

class LoginFacebook extends Component {

    state = {
        auth: false,
        redirect: null
    }
    
    componentClicked = async () => {
        console.log("clicked")
    }
    
    responseFacebook = async response => {

        console.log("facebook is always watching")

        //get the user from our DB
        const user = await this.getThisUser(response.id)

        //if we do not find a user with that id we will create a user
        //for testing puposes we should make a bs id in order to see if it creates a new user
        !user ? createUser(response.id).then( res => console.log(res)).catch( err => console.log(err)) : storeInSession(user)
        //if the user we got back has a gender we can assume they have set their profile previously, we will direct them to the dashboard/leedle
        !user.gender ? this.setState({redirect: "/Profile"}) : this.setState({redirect: "/leedle"})
        //set auth to true and proceed to re-render
        this.setState({ auth: true })
    }

    getThisUser = async id => {

        let user
        await getOneUser(id)
                    .then( data => {
                        user = data.data
                        console.log("images")
                        console.log(user)
                        return user
                    })
                    .catch( err => console.log(err))
        return user
    }

    render = () => {
        if (this.state.auth) {
                return <Redirect to={this.state.redirect}/>
        }

        let facebookData

        this.state.auth ? facebookData = <>yeer logged in</>
        :
        facebookData = <>
        <FacebookLoginBtn
        appId="519631592082573"
        autoLoad={true}
        // fields="name,picture,user_birthday"
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />
        </>
        return <>{facebookData}</>
    }
}

export default LoginFacebook