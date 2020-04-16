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
    
    //@MVP save fbID to localstorage/session
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
        //@HACER cleanup/get rid of console.log()'s
        const user = await this.getThisUser()
      
        //if we do not find a user with that id we will create a user
        //for testing puposes we should make a bs id in order to see if it creates a new user
        !user ? createUser(this.state.fbDetails).then( res => console.log(res)).catch( err => console.log(err)) : console.log("already exists")
        
        //document.location.href("/Profile")

        //sessionStorage.setItem("fb_ID", this.state.fbDeatails.fb_ID)

        //otherwise we already have this user, we dont need to create the user
        //@HACER take to next page?
    }

    getUsers = () => {
        getAllUsers().then( data => console.log(data)).catch( err => console.log(err))
    }

    getThisUser = async () => {

        let user
        await getOneUser(this.state.fbDetails.fb_ID)
                    // .then( data => data.data)
                    .then( data => {
                        console.log(data)
                        console.log(data.data)
                        user = data.data
                        console.log(user)
                        return user
                    })
                    .catch( err => console.log(err))
        return user
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
        {/* <button className="antonios_test_buttons" onClick={this.getUsers}>testGetUsers</button>
        <button className="antonios_test_buttons" onClick={this.getThisUser}>getThisUser</button>
        <button className="antonios_test_buttons" onClick={this.getComp}>get Comps</button>
        <button className="antonios_test_buttons" onClick={this.updateUser}>yeet</button> */}
        </>
        return <>{facebookData}</>
    }
}

export default LoginFacebook