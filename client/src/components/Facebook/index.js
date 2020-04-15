// app id 519631592082573
import React, { Component } from "react"
import FacebookLoginBtn from "react-facebook-login"
//import LoginBG from "./components/LoginBG/LoginBG";

import { getUsers, createUser } from "../../utils/API"

class LoginFacebook extends Component {

    state = {
        auth: false,
        fbDetails: {}
    }

    componentClicked = async () => {
        console.log("clicked")
        await createUser({name:"bob saget",imageLink:"pl.com",symbol:"libra",gender:"male",prefrence:"dont care"})
    }

    responseFacebook = async response => {

        console.log("facebook is always watching")

        console.log(`fb_ID before pass it ${response.id}`)
        this.setState({ fbDetails: {
            fb_ID: response.id,
            name: response.name,
            imageLink: response.picture.data.url
        }})
        createUser(this.state.fbDetails).then( res => console.log(res)).catch( err => console.log(err))
    }

    getUsers = () => {
        getUsers().then( data => console.log(data))
    }

    render = () => {
        let facebookData

        this.state.auth ? facebookData = <>yeer logged in</>
        :
        facebookData = <>
        {/* <FacebookLoginBtn
        appId="519631592082573"
        autoLoad={true}
        // fields="name,picture,user_birthday"
        fields="name,email,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} /> */}
        <button onClick={this.getUsers}>testGetUsers</button>
        </>
        return <>{facebookData}</>

    }
}

export default LoginFacebook