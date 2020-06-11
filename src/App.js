import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Videos from "./Videos";
import Home from "./Home";
import "./App.css";
function App() {
  return (
    <Router>
      <div>
        <div className="header-bar" style={{ display: "flex" }}>
          <div style={{ width: 300 }} className="logo-container">
            <img
              src="PersonalLogo.png"
              className="Logo"
              style={{ width: "100%" }}
            ></img>
          </div>
          <div className="flex-container links-container">
            <div className="nav-link">
              <Link to="/">My Homepage</Link>
            </div>
            <div className="nav-link">
              <Link to="/about">About Me</Link>
            </div>
            <div className="nav-link">
              <Link to="/v">Videos</Link>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/v">
            <Videos></Videos>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
