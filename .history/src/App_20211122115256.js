import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Shared/Header";
import SideBar from "./Shared/SideBar";
import Register from "./Register/register";
import Invalid from "./Invalid/invalid";
import Student from "./Students/student";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-2">
            <SideBar />
          </div>
          <div className="col-12 col-md-10">
            <Switch>
              <Route path="/" exact>
                <div></div>
              </Route>
              <Route path="/register/" exact>
                <Register />
              </Route>
              <Route path="/invalid/" exact>
                <Invalid />
              </Route>
              <Route path="/list/:item" exact>
                <Student />
              </Route>
              <Redirect to="/invalid/" />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
