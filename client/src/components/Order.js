import React, { Component } from 'react'
import AppNavbar from './AppNavbar';
import { Table } from 'reactstrap';
import axios from 'axios';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: []
    }
  }

  componentDidMount() {
    axios.get('/api/orders/' + this.props.match.params.orderId)
      .then(res => {
        const order = res.data;
        this.setState({
          order: order
        })
      })
  }

  render() {
    return (
      <div className="order">
        <AppNavbar />
        <Table bordered size="sm">
          <tbody>
            <tr>
              <th scope="row">Building Name</th>
              <td>{this.state.order.clientName}</td>
            </tr>
            <tr>
              <th scope="row">Collection Date</th>
              <td>{this.state.order.collectionDate}</td>
            </tr>
            <tr>
              <th scope="row">Collection Time</th>
              <td>{this.state.order.collectionTime}</td>
            </tr>
            <tr>
              <th scope="row">Return Date</th>
              <td>{this.state.order.returnDate}</td>
            </tr>
            <tr>
              <th scope="row">Return Time</th>
              <td>{this.state.order.returnTime}</td>
            </tr>
            <tr>
              <th scope="row">Service Type</th>
              <td>{this.state.order.service}</td>
            </tr>
            <tr>
              <th scope="row">Estimated KG</th>
              <td>{this.state.order.estimatedKG}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Order;