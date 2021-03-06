import React, { Component } from 'react';
import Stripe from './Stripe';
import { FormGroup, Label, Input } from 'reactstrap';

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioButton1: false,
      radioButton2: false,
      radioButton3: false
    };
  }

  handleOnClickRadioButton1 = () => {
    this.setState({
      radioButton1: true,
      radioButton2: false,
      radioButton3: false
    });
  };

  handleOnClickRadioButton2 = () => {
    this.setState({
      radioButton1: false,
      radioButton2: true,
      radioButton3: false
    });
  };

  handleOnClickRadioButton3 = () => {
    this.setState({
      radioButton1: false,
      radioButton2: false,
      radioButton3: true
    });
  };

  render() {
    const creditCardInfo = (
      <div>
        Your card will only be charged once we have collected and weighed your
        laundry.
        <br />
        <Stripe />
      </div>
    );

    // const bankTransfer =
    //   <div>
    //     Once we have received your laundry at our store, you will receive payment instructions via email.
    //     Please note that we are only able to accept payments from Thai banks.
    //   </div>

    const cash = (
      <div>
        If you are unable to be around for delivery, we highly recommend paying
        by credit card.
      </div>
    );

    return (
      <div className='payment'>
        <h2>6. How would you like to pay?</h2>
        <div className='container'>
          <p>
            There is nothing to pay until your laundry has been weighed and
            processed in our shop. You will then receive an invoice via email
            with a final quote.
          </p>
          <FormGroup tag='fieldset'>
            <legend>
              <h4>Payment Method:</h4>
            </legend>
            <FormGroup check>
              <Label check>
                <Input
                  type='radio'
                  name='radio1'
                  onClick={this.handleOnClickRadioButton1}
                />{' '}
                Credit or Debit Card
                {this.state.radioButton1 && creditCardInfo}
              </Label>
            </FormGroup>
            {/* <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" onClick={this.handleOnClickRadioButton2} />{' '}
                Bank Transfer
              {this.state.radioButton2 && bankTransfer}
              </Label>
            </FormGroup> */}
            <FormGroup check>
              <Label check>
                <Input
                  type='radio'
                  name='radio1'
                  onClick={this.handleOnClickRadioButton3}
                />{' '}
                Cash on Delivery
                {this.state.radioButton3 && cash}
              </Label>
            </FormGroup>
          </FormGroup>
        </div>
      </div>
    );
  }
}

export default Payment;
