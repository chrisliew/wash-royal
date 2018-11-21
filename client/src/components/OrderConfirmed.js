import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class OrderConfirmed extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <div className="order-confirmed">
          <div className="container">
            <h2>Your order has been confirmed!</h2>
            <p>Your order number xxx has been confirmed for xxx service with pickup at xxx and delivery at xxx.  The ESTIMATED weight is xxx and price will be xxx. </p>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderConfirmed;