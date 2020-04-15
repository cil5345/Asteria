import React from "react";
// import HelloWorld from "./components/HelloWorld"
// import Facebook from "./components/Facebook"//@HACER MOVE TO COMPONENETS //Mo commented out.  Talk with Mo
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat";
// import "./App.css";
// import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <hr />
      {/* <h1>FB Login</h1> ---This is is for dating app login - Chris added and Mo commented out! */}
      {/* <Facebook /> ----Chris Added this and Mo Commented out.  Talk with Mo */}
      <Header />
      <Route exact path="/Profile" component={Profile} />
      <hr />
      {/* Antonio ^^^^^^^^ */}
      {/* Chris \/ \/ \/ \/ \/ */}
      <div className="App">
        <Route exact path="/Chat" component={Chat} />
      </div>
      <Footer />
    </Router>

  );
}

export default App;
