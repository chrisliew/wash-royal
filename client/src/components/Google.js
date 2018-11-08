import React, { Component } from 'react';
import axios from 'axios';
import AppNavbar from './AppNavbar';

class Google extends Component {
  constructor(props) {
    super(props);
    this.state = {
      google: []
    }
  }

  componentDidMount() {
    axios.get('/api/auth-routes/google')
      .then(res => {
        const google = res.data;
        this.setState({
          google: google
        })
      })
  }

  render() {
    return (
      <div>
        <AppNavbar />
        <h1>{this.state.google}</h1>
      </div>
    )
  }
}

export default Google;