import React, { Component } from 'react';
import {FormGroup, Label, Input, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';


class ContactInfo extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div className="contact-info">
        <h1> Your Contact Info </h1>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Your name here" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Your email here" />
        </FormGroup>
        <FormGroup check>
        <h2>Receive updates via Facebook Messenger</h2>
          <p>We will send important notifications to you instantly via Facebook Messenger, for example when our drivers arrive for collection or delivery.</p>
          <Label check>
            <Input  type="checkbox" />{' '}
            Send Info to Facebook Messenger
          </Label>
          <p>Is this You?</p>          
          <br />
        </FormGroup>
        <h2>(Optional) Phone number</h2>
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
        <Label for="phone">Name</Label>
        <Input type="number" name="phone" id="phone" placeholder="Your phone here" />
      </FormGroup>

      </div>
    )
  }
}

export default ContactInfo;