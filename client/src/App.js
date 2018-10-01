import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import HeroImage from './components/HeroImage';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar />
        <HeroImage />
      </div>
    );
  }
}

export default App;
