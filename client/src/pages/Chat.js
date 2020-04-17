import React from "react";
import Store from "../components/Store/Store";
import Dashboard from '../components/Dashboard/Dashboard'
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