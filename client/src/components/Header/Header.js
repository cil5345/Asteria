import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// import { Link } from "react-router-dom";
// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
    return (

        <section className="container">
            <div className="top-bar">
                <div className="top-bar-left">
                    <span className="menu-text h1">ASTERIA Dating App</span>
                    <div className="links">
                    <Link to="/Profile">Profile</Link>
                    <br></br>
                    <Link to="Chat">Chat</Link>
                    </div>
                </div>
            </div>
            {/* <h1>ASTERIA Dating App</h1> */}
        </section>
    )
}

export default Header;