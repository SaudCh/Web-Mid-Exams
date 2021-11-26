import logo from "./logo.svg";
import "./App.css";
import { Router, Route } from "react-router-dom";
import Home from "./Home/home";

function App() {
  return (
    <div>
      <Router>
        <Route path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
