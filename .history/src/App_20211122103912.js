import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Shared/Header";
import SideBar from "./Shared/SideBar";

export default function App() {
  return (
    <Router>
      <Header />
      <div>
        <div>
          <SideBar />
        </div>
        <div></div>
      </div>
    </Router>
  );
}
