import React, { Component } from 'react';
import Home from './components/Home';
import Pricing from './components/Pricing';
import BookingPage from './components/BookingPage';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/order/new/:id" component={BookingPage} />
        </div>
      </Router>
    );
  }
}

export default App;
