import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search" exact>
          <Form />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/:userId/birds" exact>
          <User />
        </Route>
        <Redirect to="/error" />
      </Switch>
    </Router>
  );
}

export default App;
