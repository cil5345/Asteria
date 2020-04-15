import React from "react";
import Footer from "../components/Footer/Footer";
import mainBG from "../components/mainBG/mainBG";
import Swipe from "../components/Swipe/Swipe";
import "./matches.css"

function Matches() {
    return (
        <div className="page">
            <mainBG />
            <div className="m">
                    <Swipe />
                </div>
        <Footer />
        </div >

    );
}

export default Matches;