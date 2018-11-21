import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class BG extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }
  onRadioBtnClick2(rSelected2) {
    this.setState({ rSelected2 });
  }

  render() {
    return (
      <div>
        <h5>Radio Buttons</h5>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick2(1)} active={this.state.rSelected2 === 1}>One</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick2(2)} active={this.state.rSelected2 === 2}>Two</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick2(3)} active={this.state.rSelected2 === 3}>Three</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
      </div>
    );
  }
}

export default BG;
