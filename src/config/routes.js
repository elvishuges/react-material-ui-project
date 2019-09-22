import React from "react";
import { Router,Redirect, Route } from "react-router";
import Login from '../components/Login'
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

export default props => (
  <Router history={history}>
    <Route path="/login" component={Login} />    
    <Redirect from="*" to="/login" />
  </Router>
);
