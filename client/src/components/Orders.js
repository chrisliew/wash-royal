import React, { Component } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AppNavbar from './AppNavbar';


class Orders extends Component {
  state = {
    orders: [],
    order: []
  }

  componentDidMount() {
    axios.get('/api/orders/')
      .then(res => {
        const orders = res.data;
        this.setState({ orders: orders })
      })
  }

  handleClickLink() {
    axios.get('/api/orders/' + this.props.match.params.orderId)
  }

  render() {
    console.log("ORDERS", this.state.orders)
    return (
      <div>
        <AppNavbar />
        <Table striped>
          <thead>
            <tr>
              <th>Reference</th>
              <th>Latest Status</th>
              <th>Service</th>
              <th>Collection Date</th>
              <th>Collection Time</th>
              <th>Return Date</th>
              <th>Return Time</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map(order =>
              <tr key={order._id}>
                <td>
                  <Link
                    onClick={this.handleClickLink}
                    to={`/orders/${order._id}`}>{order._id}
                  </Link>
                </td>
                <td>{order.status}</td>
                <td>{order.service}</td>
                <td>{order.collectionDate}</td>
                <td>{order.collectionTime}</td>
                <td>{order.returnDate}</td>
                <td>{order.returnTime}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Orders;