import React, { Component } from 'react';
import Home from './components/Home';
import Pricing from './components/Pricing';
import BookingPage from './components/BookingPage';
import Orders from './components/Orders';
import Order from './components/Order';
import OrderConfirmed from './components/OrderConfirmed';
import Login from './components/Login';
import Logout from './components/Logout';
import Google from './components/Google';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/logout" component={Logout} />
          <Route path="/auth/google" component={Google} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/orders" component={Orders} />
          <Route path="/orders/:orderId" component={Order} />
          <Route path="/order/new/:id" component={BookingPage} />
          <Route path="/order/confirmed/:id" component={OrderConfirmed} />
        </div>
      </Router>
    );
  }
}

export default App;
