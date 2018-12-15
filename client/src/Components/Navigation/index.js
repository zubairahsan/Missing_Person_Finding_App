import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../HomePage';
import Login from '../login';
import Signup from '../signup';
import addPerson from '../AddPerson';
import policeForm from '../policeForm';

export default class Navigation extends Component {
  render() {
    return (
      <Router>
        <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} /> 
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="/addPerson" component={addPerson} /> 
          <Route exact path="/policeForm" component={policeForm} />

        </div>
      </Router>
    );
  }
}
