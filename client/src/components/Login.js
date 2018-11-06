import React, { Component } from 'react';
import { Button } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Login extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <AppNavbar />
        Login Using:
        <br />
        <a href="/auth/google">Sign In With Google</a>
      </div>
    )
  }
}

export default Login;