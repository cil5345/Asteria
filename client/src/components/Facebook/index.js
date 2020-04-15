// app id 519631592082573
import React, { Component } from "react"
import FacebookLoginBtn from "react-facebook-login"
//import LoginBG from "./components/LoginBG/LoginBG";
import "./style.css"
import { getAllUsers, getOneUser, createUser } from "../../utils/API"

class LoginFacebook extends Component {

    state = {
        auth: false,
        fbDetails: {}
    }

    componentClicked = async () => {
        console.log("clicked")
    }

    responseFacebook = async response => {

        console.log("facebook is always watching")

        //set state to include user fbID and name
        this.setState({ fbDetails: {
            fb_ID: response.id,
            name: response.name,
            imageLink: response.picture.data.url
        }})
        //get the user from our DB
        const user = this.getThisUser()
        console.log(user)
        if(!user) {
            console.log("!user")
        } else if(user === null) {
            console.log("its a null")
        } else if(user === "undefined") {
            console.log("undefined string")
        } else if(user == "undefined") {
            console.log("weak ass undefined")
        }
        //if we do not find a user with that id we will create a user
        //for testing puposes we should make a bs id in order to see if it creates a new user
        !user === null ? createUser(this.state.fbDetails).then( res => console.log(res)).catch( err => console.log(err)) :
        console.log("already exists")
        //otherwise we already have this user, we dont need to create the user
        //@HACER take to next page?
    }

    getUsers = () => {
        getAllUsers().then( data => console.log(data)).catch( err => console.log(err))
    }

    getThisUser = () => {

        getOneUser(this.state.fbDetails.fb_ID)
                    .then( data => data.data)
                    .catch( err => console.log(err))
    }

    render = () => {
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
        <button className="antonios_test_buttons" onClick={this.getUsers}>testGetUsers</button>
        <button className="antonios_test_buttons" onClick={this.getThisUser}>getThisUser</button>
        </>
        return <>{facebookData}</>

    }
}

export default LoginFacebook