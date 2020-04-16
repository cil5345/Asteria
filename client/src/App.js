import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import Facebook from "./components/Facebook"//@HACER MOVE TO COMPONENETS //Mo commented out.  Talk with Mo
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat";
import Login from "./pages/Login"
import Matches from "./pages/Matches"
// import mainBG from "./components/mainBG/mainBG";
// import Books from "./pages/Books";

function App() {
  return (
    <>

    <Router>

      {/* <Header /> for profile matches  */}


      <Route exact path="/Profile" component={Profile} />
      
      <div className="App">
      <Route exact path="/Chat" component={Chat} />
      </div>

      <Route exact path="/Matches" component={Matches} />
      {/* login is default/fallback */}
      <Route exact path="*" component={Login} />
      <Footer />
    </Router>
    </>
  );
}

export default App;