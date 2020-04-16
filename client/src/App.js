import React from "react";
// import Facebook from "./components/Facebook"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Logo from "./components/Logo/Logo";
// import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat";
import Login from "./pages/Login"
// import mainBG from "./components/mainBG/mainBG";
import Matches from "./pages/Matches";
import "./style.css"

// import Books from "./pages/Books";

function App() {
  return (
    <>

    <Router basename="/">
      {/* <Header /> for profile matches  */}
      <div className="App">
      <Route exact path="/Chat" component={Chat} />
      </div>
      <Route exact path="/Matches" component={Matches} />
      <Route exact path="/Profile" component={Profile} />
      {/* login is default/fallback */}
      <Route exact path="/" component={Login} />
      {/* <Route component={Login} /> */}
      <Footer />
    </Router>
    </>
  );
}

export default App;
