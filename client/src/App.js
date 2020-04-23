import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Profile from "./pages/Profile/Profile";
import Leedle from "./pages/Leedle"
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Matches from "./pages/Matches";
import "./style.css";


function App() {
  return (
    <>

    <Router basename="/">
      
      <div className="App">
      <Route exact path="/Chat" component={Chat} />
      </div>
      <Route exact path="/Matches" component={Matches} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/leedle" component={Leedle} />
      {/* login is default/fallback */}
      <Route exact path="/" component={Login} />
      {/* <Route component={Login} /> */}
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
