import React from "react";
import Facebook from "./components/Facebook"//@HACER MOVE TO COMPONENETS //Mo commented out.  Talk with Mo
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat";
import "./App.css";
import LoginBG from "./components/mainBG/mainBG";
import mainBG from "./components/mainBG/mainBG";

// import Books from "./pages/Books";

function App() {
  return (
    <Router>
      <mainBG />
      <hr />
      <h1>FB Login</h1> 
      <Facebook /> 
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
