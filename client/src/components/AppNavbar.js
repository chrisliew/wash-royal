import React, { Component } from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Button } from 'reactstrap';
import Login from './Login';
import Stripe from './Stripe';
import axios from 'axios';


class AppNavbar extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: '',
      displayName: ''
    }
    this.loggedInStatusText = this.loggedInStatusText.bind(this);
  }
  componentDidMount() {
    axios.get('/api/current_user')
      .then(res => {
        this.setState({
          loggedInStatus: res.data,
          displayName: res.data.displayName
        })
      })
  }

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  loggedInStatusText() {
    if (this.state.loggedInStatus) {
      return (
        <div className="logged-in-status-text">
          <div>Logged In As {this.state.displayName}</div>
        </div>
      )
    }
    return (<div>Logged Out</div>)
  }

  render() {
    return (
      <div>
        <Navbar id="nav-bar" color="primary" dark expand="sm" className="mb-5" sticky="top">
          <Container>
            <NavbarBrand href="/">WashRoyal</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                {this.state.loggedInStatus ?
                  <NavLink href="/api/logout">
                    Logout
                  </NavLink> :
                  <Login />
                }
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/pricing">
                  Pricing
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/orders">
                  {this.state.loggedInStatus ? <div>Your Orders</div> : null}
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <div><Stripe /></div>
                </NavItem>
                <NavItem>
                  {this.loggedInStatusText()}
                </NavItem>
                <NavItem>
                  <NavLink href="/order/new/standard"><Button color="success" size="md">Book A Collection</Button>{' '}</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar;

