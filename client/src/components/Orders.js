import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavbar';
import { Jumbotron, Container, Button, NavLink } from 'reactstrap';

class Orders extends Component {
  state = {
    orders: [],
    order: [],
    googleId: ''
  };

  componentDidMount() {
    axios.get('/api/orders/').then(res => {
      const orders = res.data;
      this.setState({ orders: orders });
    });
    axios.get('/api/current_user').then(res => {
      this.setState({
        googleId: res.data.googleId
      });
    });
  }

  handleClickLink() {
    axios.get('/api/orders/' + this.props.match.params.orderId);
  }

  render() {
    const ordersFilterGoogleId = this.state.orders.filter(
      order => this.state.googleId === order.googleId
    );
    return (
      <div className='orders'>
        <AppNavbar />
        <h1>Your Orders</h1>
        <br />
        <Table striped>
          <thead>
            <tr>
              <th>Reference</th>
              <th>OrderId</th>
              <th>Service</th>
              <th>Collection Date</th>
              <th>Collection Time</th>
              <th>Return Date</th>
              <th>Return Time</th>
            </tr>
          </thead>
          <tbody>
            {ordersFilterGoogleId.map(order => (
              <tr key={order._id}>
                <td>
                  <Link
                    onClick={this.handleClickLink}
                    to={`/orders/${order._id}`}
                  >
                    Details
                  </Link>
                </td>
                <td>{order.orderId}</td>
                <td>{order.service}</td>
                <td>{order.collectionDate}</td>
                <td>{order.collectionTime}</td>
                <td>{order.returnDate}</td>
                <td>{order.returnTime}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <NavLink href='/order/new/standard'>
          <Button color='success' size='lg'>
            Book A Collection
          </Button>{' '}
        </NavLink>
      </div>
    );
  }
}

export default Orders;
