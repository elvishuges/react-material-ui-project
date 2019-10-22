import React from "react";
import { Router,Redirect, Route } from "react-router";
import Login from '../components/Login'
import ListaUsuarios from '../components/ListaUsuarios'
import { createBrowserHistory } from "history";

const history = createBrowserHistory()

export default props => (
  <Router history={history}>
    <Route path="/login" component={Login} /> 
    <Route path="/listaUsuarios" component={ListaUsuarios} />    
      
    <Redirect from="*" to="/login" />
  </Router>
);
