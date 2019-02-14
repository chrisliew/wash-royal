import React from 'react';
import { Button } from 'reactstrap';

const PricingCards = props => {
  return (
    <div className='pricing-cards'>
      <div className='card'>
        <div className='header'>
          <header>Economy</header>
        </div>
        <div className='price'>
          <div>20,000 ₫</div>
          <div className='kg'>/kg</div>
          <a className='order-type-link' href='/order/new/economy'>
            <Button color='success' size='lg'>
              Order Economy
            </Button>
          </a>
        </div>
        <div className='details'>
          <ul>
            <li>48 hour completion</li>
            <li>Free Delivery</li>
            <li>60 minute window</li>
            <li>20,000 ₫ /kg</li>
          </ul>
        </div>
      </div>
      <div className='card'>
        <div className='header'>
          <header>Standard</header>
        </div>
        <div className='price'>
          <div>30,000 ₫</div>
          <div className='kg'>/kg</div>
          <a className='order-type-link' href='/order/new/standard'>
            <Button color='success' size='lg'>
              Order Standard
            </Button>
          </a>
        </div>
        <div className='details'>
          <ul>
            <li>24 hour completion</li>
            <li>Free Delivery</li>
            <li>60 minute window</li>
            <li>30,000 ₫ /kg</li>
          </ul>
        </div>
      </div>
      <div className='card'>
        <div className='damnn'>
          <div className='header'>
            <header>Express</header>
          </div>
          <div className='price'>
            <div>40,000 ₫</div>
            <div className='kg'>/kg</div>
            <a className='order-type-link' href='/order/new/express'>
              <Button color='success' size='lg'>
                Order Express
              </Button>
            </a>
          </div>
          <div className='details'>
            <ul>
              <li>6 hour completion</li>
              <li>Free Delivery</li>
              <li>60 minute window</li>
              <li>40,000 ₫ /kg</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
