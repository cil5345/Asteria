import React from "react";
import Facebook from "../../components/Facebook";
import LoginEl from "../../components/LoginEl/LoginEl";
import "./style.css";

export default function Login() {
    return (
        <>
        <LoginEl />
        <div className="fbButton">
            <Facebook />
        </div>
        </>
    )
}

