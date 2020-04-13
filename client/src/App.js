import React from "react";
// import HelloWorld from "./components/HelloWorld"
import Facebook from "./components/Facebook"//@HACER MOVE TO COMPONENETS
// import { BrowserRouter, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <>
    <hr />
    <h1>FB Login</h1>
    <Facebook />
    <hr />
    </>
  );
}

export default App;
