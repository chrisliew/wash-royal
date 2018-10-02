import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import PricingCards from './PricingCards';
import Map from './Map';

class Pricing extends Component {
  render() {
    return (
      <div className="pricing">
        <AppNavbar />
        <div className="pricing-intro" >
          <h2>Easy Pricing</h2>
          <h3>No Minimums</h3>
          <h3>No Hidden Fees</h3>
          <h3>Credit card payment option for convenient option</h3>
        </div>
        <PricingCards />
        <Map />
      </div>
    )
  }
}

export default Pricing;