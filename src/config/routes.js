import React from "react";
import { Router,Redirect, Route } from "react-router";
import Login from '../components/Login'
import CourseList from '../components/CourseList'
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

export default props => (
  <Router history={history}>
    <Route path="/login" component={Login} /> 
    <Route path="/listaCursos" component={CourseList} />    
      
    <Redirect from="*" to="/login" />
  </Router>
);
