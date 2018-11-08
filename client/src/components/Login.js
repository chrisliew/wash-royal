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
        <Button><a href="/auth/google">Sign In With Google+</a></Button>
      </div>
    )
  }
}

export default Login;