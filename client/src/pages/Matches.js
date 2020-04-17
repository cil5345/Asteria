import React from "react";
import LoginBG from "../components/LoginBG/LoginBG";
import "./matches.css"
import Swipe from "../components/Swipe/Swipe";
import Header from "../components/Header/Header";
// import "../components/mainLoginBG/mainLoginBG"


function Matches() {
    return (
        <>
            <LoginBG />
            <Header />
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