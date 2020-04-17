import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import Store from "../components/Store/Store";
import "./Chat.css";

function Chat() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default Chat;
