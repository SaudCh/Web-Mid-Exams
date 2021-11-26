import logo from "./logo.svg";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home/home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
