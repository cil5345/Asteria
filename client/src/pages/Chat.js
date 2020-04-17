import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Store from "../components/Store/Store";
import Header from "../components/Header/Header"
import LoginBG from "../components/LoginBG/LoginBG"


function Chat() {
    return (
        <>
            <LoginBG />
            <Header />
            <Store>
                <Dashboard />
            </Store>
        </>
    );
}

export default Chat;
