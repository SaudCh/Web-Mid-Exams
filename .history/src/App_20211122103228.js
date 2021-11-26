import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Shared/Header";

export default function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}
