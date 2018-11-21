import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'reactstrap'

class Stripe extends Component {
  render() {
    
    return(
      <StripeCheckout 
        name="Wash Royal Authorize Payment"
        description="You won't be charged anything here, until your invoice is sent to you"
        amount={2000}
        token={token => console.log("TOKEN", token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <Button color="success" size="md">Authorize Now (Nothing will be charged)</Button>
      </StripeCheckout>
    );
  }
}

export default Stripe;

