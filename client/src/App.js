import React from "react";
import Dashboard from "./components/Dashboard";
import Store from "./components/Store";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
