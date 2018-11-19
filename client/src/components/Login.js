import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Login extends Component {
  render() {
    return(
      <div className="login">
        <br />
        <a href="/auth/google"><Button className="loginBtn loginBtn--google">Login With Google+</Button></a>
      </div>
    )
  }
}

export default Login;