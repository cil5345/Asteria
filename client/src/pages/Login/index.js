import React from "react";
import Facebook from "../../components/Facebook";
import LoginBG from "../../components/LoginBG/LoginBG";
import Logo from "../../components/Logo/Logo";
import "./style.css"

export default function Login() {
    return (
        <>
        <LoginBG />
        <Logo />
        <div className="fbButton">
            <Facebook />
        </div>
        </>
    )
}

