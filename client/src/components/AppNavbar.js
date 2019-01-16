import React, { Component } from 'react';
// import { BrowserRouter as Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from 'reactstrap';
import Login from './Login';
import axios from 'axios';

class AppNavbar extends Component {
  constructor() {
    super();
    this.state = {
      // loggedInStatus: '',
      displayName: ''
    };
    this.loggedInStatusText = this.loggedInStatusText.bind(this);
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
  }
  componentDidMount() {
    axios.get('/api/current_user').then(res => {
      this.setState({
        loggedInStatus: res.data,
        displayName: res.data.displayName
      });
    });
  }

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  loggedInStatusText() {
    if (this.state.loggedInStatus) {
      return (
        <div className='logged-in-status-text'>
          Logged In As {this.state.displayName}
          <NavLink className='logout-link' href='/api/logout'>
            Logout
          </NavLink>
        </div>
      );
    } else if (this.state.loggedInStatus === undefined) {
      return;
    } else if (!this.state.loggedInStatus) {
      return <div className='logged-out'>Logged Out</div>;
    }
  }

  signInWithGoogle() {
    if (this.state.loggedInStatus) {
      return;
    } else if (this.state.loggedInStatus === undefined) {
      return;
    } else if (!this.state.loggedInStatus) {
      return <Login />;
    }
  }

  render() {
    return (
      <div>
        <Navbar
          id='nav-bar'
          color='primary'
          dark
          expand='sm'
          className='mb-5'
          sticky='top'
        >
          <Container>
            <NavbarBrand href='/'>WashRoyal</NavbarBrand>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/pricing'>Pricing</NavLink>
              </NavItem>
            </Nav>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href='/orders'>
                  {this.state.loggedInStatus ? <div>Your Orders</div> : null}
                </NavLink>
              </NavItem>
            </Nav>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>{this.loggedInStatusText()}</NavItem>

                {this.signInWithGoogle()}
                <NavItem>
                  <NavLink
                    className='book-collection-button'
                    href='/order/new/standard'
                  >
                    <Button color='success' size='md'>
                      Book A Collection
                    </Button>{' '}
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
