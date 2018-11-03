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
        <Link to="/auth/google"><Button className="google-btn" color="primary" size="lg">Google+</Button></Link>
      </div>
    )
  }
}

export default Login;