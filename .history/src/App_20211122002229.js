import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/home";
import Invalid from "./Error/error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/error">
          <Invalid />
        </Route>
      </Switch>
    </Router>
  );
}
