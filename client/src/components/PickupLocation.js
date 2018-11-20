import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

class PickupLocation extends Component {
  constructor(props) {
    super(props);
    this.handleOnChangeLocation = this.handleOnChangeLocation.bind(this);
    this.handleOnChangeRoomNumber = this.handleOnChangeRoomNumber.bind(this);
  }

  handleOnChangeLocation(event) {
    this.props.handleOnChangeLocation(event.target.value)
  }

  handleOnChangeRoomNumber(event) {
    this.props.handleOnChangeRoomNumber(event.target.value)
  }

  render() {
    return (
      <div className="pickup-location">
        <h2>5. Pickup Location</h2>
        <div className="container">
          <h4>Name of your hotel, guesthouse, or apartment building. </h4>
          <FormGroup>
            <Label for="name"></Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter name here"
              onChange={this.handleOnChangeLocation}
            />
          </FormGroup>
          <h4>Room Number</h4>
          <FormGroup>
            <Label for="room"></Label>
            <Input
              type="number"
              name="room"
              id="room"
              placeholder="Enter room here"
              onChange={this.handleOnChangeRoomNumber}
            />
          </FormGroup>
          <div>
            <h4>(Optional) If you're not staying in a hotel, guesthouse or apartment building, please enter your address below</h4>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default PickupLocation;