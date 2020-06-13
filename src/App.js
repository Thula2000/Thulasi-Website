import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Videos from "./Videos";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
