import React, { Component } from "react"
import FacebookLoginBtn from "react-facebook-login"

export default class LoginFacebook extends Component {

    state = {
        auth: false,
        name: "",
        picture: ""
    }

    componentClicked = () => {
        console.log("clicked")
    }

    responseFacebook = response => {
        console.log("facebook is always watching")
        console.log(response)
    }

    render = () => {
        let facebookData

        this.state.auth ? facebookData = <>yeer logged in</>
        :
        facebookData = <>
        <FacebookLoginBtn
        appId="519631592082573"
        autoLoad={true}
        fields="name,picture"
        onClick={this.componentClicked}
        callback={this.responseFacebook} />
        </>
        return <>{facebookData}</>
    }
}

// app id 519631592082573

/* <script> */

/*

FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
});

window.fbAsyncInit = function () {
    FB.init({
        appId: 519631592082573,
        cookie: true,
        xfbml: true,
        version: "v6.0"
    });
    
    FB.AppEvents.logPageView();
};

function stuff() {

   FB.getLoginStatus()
}

function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', function (response) {
            console.log('Successful login for: ' + response.name);
            document.getElementById('status').innerHTML =
              'Thanks for logging in, ' + response.name + '!';
        });
    } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log ' +
          'into this app.';
    }
}

// getLoginStatus( response => alert.write(response.status))
// </script>
*/