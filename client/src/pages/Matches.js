import React, { Component } from "react";
// import mainBG from "../components/mainBG/mainBG";
// import Bg from "../components/Bg/Bg";
import "./matches.css"
import Swipe from "../components/Swipe/Swipe";
// import "../components/mainBG/mainBG"


class Matches extends Component {
   
   
   render = () => 
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

  
}

export default Matches;