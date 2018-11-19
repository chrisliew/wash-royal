import React, { Component } from 'react';
import { Button } from 'reactstrap';
import AppNavbar from './AppNavbar';


class Login extends Component {
  render() {
    return(
      <div>
        <AppNavbar />
        Login Using:
        <br />
        <a href="/auth/google">Sign In With Google+</a>
        <a href="/auth/facebook">Sign in With Facebook</a>
      </div>
    )
  }
}

export default Login;