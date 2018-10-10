import React, { Component } from 'react';
import { Button } from 'reactstrap';

class RequestCollection extends Component {
  render() {
    return(
      <div className="request-collection">
        <Button color="primary" size="lg" block>Request Colletion</Button>
        <p>By placing an order you agree to our terms of service.</p>
        <p>* View a map of our free delivery area. Please do not hesitate to contact us for a quote if you are outside of this area.</p>
      </div>
    )
  }
}

export default RequestCollection;