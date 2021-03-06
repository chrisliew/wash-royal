import React, { Component } from 'react';
import axios from 'axios';
import AppNavbar from './AppNavbar';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: []
    }
  }

  componentDidMount() {
    axios.get('/api/auth-routes/logout')
      .then(res => {
        const logout = res.data;
        this.setState({
          logout: logout
        })
      })
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <h1>{this.state.logout}</h1>
      </div>
    )
  }
}

export default Logout;