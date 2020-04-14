import React from "react";
// import HelloWorld from "./components/HelloWorld"
import Facebook from "./components/Facebook"//@HACER MOVE TO COMPONENETS
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Store from "./components/Store";
import { HashRouter, Switch, Route } from  "react-router-dom"
import "./App.css";

function App() {
  return (
    <>
    <hr />
    <h1>FB Login</h1>
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Facebook}/>
        {/* <Route /> */}
      </Switch>
    </HashRouter>
    {/* <Facebook /> */}
    <hr />
    {/* Antonio ^^^^^^^^ */}
    {/* Chris \/ \/ \/ \/ \/ */}
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
    </>
  );
}

export default App;
