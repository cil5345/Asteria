import React from "react";
import Facebook from "./components/Facebook"//@HACER MOVE TO COMPONENETS //Mo commented out.  Talk with Mo
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat";
// import mainBG from "./components/mainBG/mainBG";
import Matches from "./pages/Matches";
import "./style.css"

// import Books from "./pages/Books";

function App() {
  return (
    <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    <div id='title' />
        <span>
            PURE CSS
    </span>
        <br />
            <span>
                PARALLAX PIXEL STARS
    </span>
            <div />
    <Router>
      {/* <mainBG /> */}
      <h1>FB Login</h1>
      <Logo />
      <Facebook />
      <Header />
      <hr />
      <Route exact path="/Profile" component={Profile} />
      {/* Antonio ^^^^^^^^ */}
      {/* Chris \/ \/ \/ \/ \/ */}
      <div className="App">
      <Route exact path="/Chat" component={Chat} />
      </div>
      {/* <Route exact path="*" component={} /> */}
      <Route exact path="/Matches" component={Matches} />
      <Footer />
    </Router>
    </>
  );
}

export default App;
