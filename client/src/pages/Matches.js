import React, { Component } from "react";
// import mainBG from "../components/mainBG/mainBG";
import Swipe from "../components/Swipe/Swipe";
import "./matches.css"
// import "../components/mainBG/mainBG"


class Matches extends Component {
   
   
   render = () => 
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

  
}

export default Matches;