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
        clicked: false
    }

    componentClicked = async () => {
        // yeah, we're doing this....
        // this facebook login component triggers on load
        this.setState({clicked: true})
    }
    
    responseFacebook = async facebookResponse => {

        console.log("facebook is always watching")
        // set necessary user data details retrieved from facebook
        // into state
        this.setState({ fbDetails: {
            fb_ID: facebookResponse.id,
            name: facebookResponse.name,
            imageLink: facebookResponse.picture.data.url
        }})
        // query and get the user from our DB
        // function uses state fb details  that was set earlier
        const user = await this.getThisUser()
        // if we did not find a user within our db, by using the fb id, then we will create one
        if(!user) {
            await createUser(this.state.fbDetails)
                .then(response => {
                    const createdUser = response.data
                    createdUser.redirect = "/Profile"
                    storeInSession(createdUser)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
        // we did find the user, set user's redirect field to /Activity
        // and store into session
            user.redirect = "/Activity"
            storeInSession(user)
        }
        //set auth to true and proceed to re-render
        this.setState({ auth: true })
    }

    getThisUser = async () => await getCurrentUser(this.state.fbDetails.fb_ID)
                                        .then(data => data.data)
                                        .catch(err => console.log(err))

    render = () => {
        if (this.state.auth && this.state.fbDetails.fb_ID && this.state.clicked) {
                return <Redirect to={sessionStorage.getItem("redirect")}/>
        } else if(this.state.auth && !this.state.fbDetails.fb_ID) {
                const user = this.getThisUser()
                storeInSession(user)
        }

        let facebookData;

        facebookData = <>
        <FacebookLoginBtn
        appId="519631592082573"
        autoLoad={false}
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />
        </>
        return <>{facebookData}</>
    }
}

export default LoginFacebook