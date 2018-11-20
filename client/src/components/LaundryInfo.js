import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class LaundryInfo extends Component {
  render() {
    const ironed =
      <div>
        We will only iron items that need ironing (shirts, t-shirts, trousers, etc), so the price is often much lower than estimated.
        Please note that once ironed, all items will be folded for delivery.
      </div>

    const shoes =
      <div>
        How many pairs of shoes?
        <button disabled={this.props.numShoes <= 1} onClick={this.props.handleOnClickSubtractShoes}>-1 Pair</button>
        <span>{this.props.numShoes} pair of shoes</span>
        <button onClick={this.props.handleOnClickAddShoes}>+1 Pair</button>
      </div>

    return (
      <div className="laundry-info">
        <div className="laundry-info-container">

          <h2><b>3. Tell Us About Your Laundry</b></h2>
          <article>
            <p>Approximately how heavy is your laundry?</p>
            <p>Don't worry about it being exact, this is just for estimation of costs</p>
            <div className="estimated-kg">
              <button disabled={this.props.estimatedKG <= 1} onClick={this.props.handleOnClickSubtractKG}>-1KG</button>
              <span>{this.props.estimatedKG}KG</span>
              <button onClick={this.props.handleOnClickAddKG}>+1KG</button>
            </div>
            <br />
            <FormGroup check>
              <h4 className="extra-services-header"><b>Extra Services</b></h4>
              <Label check>
                <Input onClick={this.props.handleOnClickIroned} type="checkbox" />{' '}
                I would like my laundry to be ironed.
            {this.props.ironed && ironed}
              </Label>
              <br />
              <Label check>
                <Input onClick={this.props.handleOnClickShoes} type="checkbox" />{' '}
                I have shoes that need cleaning (sneakers, trainers, sports shoes).
          </Label>
              {this.props.shoes && shoes}
              <br />
              <Label check>
                <Input type="checkbox" />{' '}
                I have sensitive skin, please do not use fabric softener.
          </Label>
              <br />
              <br />
            </FormGroup>
            <div>
              <h4><b>Extra Information</b></h4>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </div>
          </article>
        </div>
      </div>
    )
  }
}

export default LaundryInfo;

