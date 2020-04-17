import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Store from "../components/Store/Store";
import Header from "../components/Header/Header"


function Chat() {
    return (
        <>
            <Header />
            <Store>
                <Dashboard />
            </Store>
        </>
    );
}

export default Chat;
