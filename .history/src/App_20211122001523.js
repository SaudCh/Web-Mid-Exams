import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
}
