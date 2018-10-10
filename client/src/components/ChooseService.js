import React, { Component } from 'react';

class ChooseService extends Component {
  constructor(props) {
    super(props);

    this.handleChooseServiceClick = this.handleChooseServiceClick.bind(this);
  }

  handleChooseServiceClick(e) {
    this.props.onChooseServiceClick(e);
  }

  render() {
    return (
      <div className="choose-service">
        <div className="container">
          <h1>Choose Service Type: {this.props.service} chosen</h1>
          <div>
          
            <div className="cards">
              <div className={this.props.service === 'economy' ? "card-selected" : "card"} onClick={(e) => this.handleChooseServiceClick("economy", e)}>
                <header>
                  Economy
                  </header>
                <div>
                  <div className="price-container">
                    <div className="price" >20,000</div>
                    <div className="denomination">D/kg</div>
                  </div>
                  <div className="points">
                    <ul>
                      <li>24 hours</li>
                      <li>Quick</li>
                      <li>Easy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={this.props.service === 'standard' ? "card-selected" : "card"}onClick={(e) => this.handleChooseServiceClick("standard", e)}>
                <header>
                  Standard
                </header>
                <div>
                  <div className="price-container">
                    <div className="price" >30,000</div>
                    <div className="denomination">D/kg</div>
                  </div>
                  <div className="points">
                    <ul>
                      <li>24 hours</li>
                      <li>Quick</li>
                      <li>Easy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={this.props.service === 'express' ? "card-selected" : "card"}  onClick={(e) => this.handleChooseServiceClick("express", e)}>
                <header>
                  Express
                </header>
                <div>
                  <div className="price-container">
                    <div className="price" >40,000</div>
                    <div className="denomination">D/kg</div>
                  </div>
                  <div className="points">
                    <ul>
                      <li>24 hours</li>
                      <li>Quick</li>
                      <li>Easy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChooseService;