// app id 519631592082573
import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import FacebookLoginBtn from "react-facebook-login"
//import LoginBG from "./components/LoginBG/LoginBG";
import "./style.css"
import { getAllUsers, getOneUser, createUser } from "../../utils/API"

class LoginFacebook extends Component {

    state = {
        auth: false,
        fbDetails: {},
        redirect: null
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
        const user = await this.getThisUser()
      
        //if we do not find a user with that id we will create a user
        //for testing puposes we should make a bs id in order to see if it creates a new user
        !user ? createUser(this.state.fbDetails).then( res => console.log(res)).catch( err => console.log(err)) : sessionStorage.setItem("fid_pic", `${user.fb_ID}|${user.imageLink}`)

        this.setState({ auth: true })
    }

    getUsers = () => {
        getAllUsers().then( data => console.log(data)).catch( err => console.log(err))
    }

    getThisUser = async () => {

        let user
        await getOneUser(this.state.fbDetails.fb_ID)
                    .then( data => {
                        user = data.data
                        return user
                    })
                    .catch( err => console.log(err))
        return user
    }

    render = () => {
        if (this.state.auth && this.state.fbDetails.fb_ID) {
                return <Redirect to="/Profile"/>
        } else if(this.state.auth && !this.state.fbDetails.fb_ID) {
                const user = this.getThisUser()
                sessionStorage.setItem("fb_ID", JSON.stringify(user.fb_ID))
        }

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
        callback={this.responseFacebook} />
        </> */}
        <FacebookLoginBtn
        appId="519631592082573"
        autoLoad={true}
        // fields="name,picture,user_birthday"
        fields="name,email,picture"
        onClick={this.responseFacebook}/>
        </>
        return <>{facebookData}</>
    }
}

export default LoginFacebook