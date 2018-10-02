import React from 'react';
import { Button } from 'reactstrap';

const PricingCards = (props) => {
  return (
      <div className="pricing-cards">
        <div className="card">
          <div className="header">
            <header>Economy</header>
          </div>
          <div className="price">
            <div>20,000 ₫</div>
            <div className="kg">/kg</div>
            <Button color="success" size="lg">Order Economy</Button>{' '}
          </div>
          <div className="details">
            <ul>
              <li>48 hour</li>
              <li>Free Delivery</li>
              <li>60 minute window</li>
              <li>20,000 ₫</li>
              <li>Guaranteed</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <header>Standard</header>
          </div>
          <div className="price">
            <div>30,000 ₫</div>
            <div className="kg">/kg</div>
            <Button color="success" size="lg">Order Standard</Button>{' '}
          </div>
          <div className="details">
            <ul>
              <li>24 hour</li>
              <li>Free Delivery</li>
              <li>60 minute window</li>
              <li>30,000 ₫</li>
              <li>Guaranteed</li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="header">
            <header>Express</header>
          </div>
          <div className="price">
            <div>40,000 ₫</div>
            <div className="kg">/kg</div>
            <Button color="success" size="lg">Order Express</Button>{' '}
          </div>
          <div className="details">
            <ul>
              <li>6 hour</li>
              <li>Free Delivery</li>
              <li>30 minute window</li>
              <li>40,000 ₫</li>
              <li>Guaranteed</li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default PricingCards;