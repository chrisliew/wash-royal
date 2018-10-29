import React, { Component } from 'react';
import AppNavbar from './AppNavbar';

class OrderConfirmed extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <div className="order-confirmed">
          <div className="container">
            <h1>Your order has been confirmed!</h1>
            <p>Your order number xxx has been confirmed for xxx service with pickup at xxx and delivery at xxx.  The ESTIMATED weight is xxx and price will be xxx. </p>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderConfirmed;