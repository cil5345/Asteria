import React from "react";
import LoginBG from "../components/LoginBG/LoginBG";
import "./matches.css"
import Swipe from "../components/Swipe/Swipe";
import Header from "../components/Header/Header"

// import "../components/mainBG/mainBG"


function Matches() {
    return (
        <>
        <Header />
            <LoginBG />
            <div className="page">
                {/* <mainBG /> */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                <Swipe />
            </div>
        </div >
        </>

    );
}

export default Matches;