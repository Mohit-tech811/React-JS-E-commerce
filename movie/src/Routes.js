import React from "react";

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Apps from "./Apps";
const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/apps">
        <Apps />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route exact path="/">
        <Redirect to="/register" />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
