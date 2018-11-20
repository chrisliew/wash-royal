import React, { Component } from 'react';
import { FormGroup, Label, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ContactInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleOnChangeClientName = this.handleOnChangeClientName.bind(this);
    this.handleOnChangeEmail = this.handleOnChangeEmail.bind(this);
    this.handleOnChangePhoneNumber = this.handleOnChangePhoneNumber.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleOnChangeClientName(event) {
    this.props.handleOnChangeClientName(event.target.value)
  }

  handleOnChangeEmail(event) {
    this.props.handleOnChangeEmail(event.target.value)
  }

  handleOnChangePhoneNumber(event) {
    this.props.handleOnChangePhoneNumber(event.target.value)
  }

  render() {
    return (
      <div className="contact-info">
        <h2>4. Your Contact Info </h2>
        <div className="container">
          <FormGroup >
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Your name here"
              onChange={this.handleOnChangeClientName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email here"
              onChange={this.handleOnChangeEmail}
            />
          </FormGroup>
          <FormGroup check>
            <h4>Receive updates via Facebook Messenger</h4>
            <p>We will send important notifications to you instantly via Facebook Messenger, for example when our drivers arrive for collection or delivery.</p>
            <Label check>
              <Input type="checkbox" />{' '}
              Send Info to Facebook Messenger
          </Label>
            <p>Is this You?</p>
            <br />
          </FormGroup>
          <h4>(Optional) Phone number</h4>
          <p>We will send important notifications to you instantly via SMS, for example when our drivers arrive for collection or delivery.</p>
          <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Enter Area Code (+84 Default Vietnam)
        </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
          <FormGroup>
            <Label for="phone"></Label>
            <Input
              type="number"
              name="phone"
              id="phone"
              placeholder="Your phone here"
              onChange={this.handleOnChangePhoneNumber}
            />
          </FormGroup>
        </div>
      </div>
    )
  }
}

export default ContactInfo;