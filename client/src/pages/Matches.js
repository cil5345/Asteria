import React from "react";
// import Bg from "../components/Bg/Bg";
import "./matches.css"
import Swipe from "../components/Swipe/Swipe";
// import "../components/mainBG/mainBG"


function Matches() {
    return (
        <>
            {/* <Bg /> */}
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