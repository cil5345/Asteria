import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Store from "../components/Store/Store";
import "./Chat.css";
import Header from "../components/Header/Header";

function Chat() {
  return (
    <div className="container">
    
        <Header />
        <Store>
          <Dashboard />
        </Store>

    </div>
  );
}

export default Chat;
