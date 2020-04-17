import React from "react";
// import mainBG from "../components/mainBG/mainBG";
import Swipe from "../components/Swipe/Swipe";
import "./matches.css"
// import "../components/mainBG/mainBG"


function Matches() {
    return (
        <>
        {/* <mainBG /> */}
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