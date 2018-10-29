import React, { Component } from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from 'reactstrap';




class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar id="nav-bar" color="primary" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">WashRoyal</NavbarBrand>
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
                  Your Orders
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="http://github.com/chrisliew">
                    Github
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/order/new/:id"><Button color="success" size="md">Book A Collection</Button>{' '}</NavLink>
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

