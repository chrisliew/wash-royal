import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class OrderConfirmed extends Component {
  render() {
    const location = this.props.location.state;
    return (
      <div>
        <AppNavbar />
        <div className='order-confirmed'>
          <div className='container'>
            <h2>Your order has been confirmed!</h2>
            <p>
              Your order number {location.orderId} has been confirmed for{' '}
              {location.service} service with pickup on{' '}
              {location.collectionDate} @ {location.collectionTime} and delivery
              on {location.returnDate} @ {location.returnTime}.{' '}
            </p>
            <div>
              Click <Link to='/orders'>Here</Link> for more details
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderConfirmed;
