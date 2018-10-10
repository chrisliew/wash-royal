import React from 'react';
import { Button, NavLink } from 'reactstrap';

const HowItWorks = () => {
  return(
    <div className="how-it-works">
      <h1>How It Works</h1>
      <div className="description">
        <div className="card">
          <img src="./pictures/laptop.png" alt="laptop"/>
          <h2>Book A Collection</h2>
          <div className="long-info">In just seconds you'll receive a price estimate and we'll send a driver to collect your laundry as soon as possible.</div>
        </div>
        <div className="card">
          <img src="./pictures/delivery-truck.png" alt="truck"/>
          <h2>Our Driver Collects</h2>
          <div className="long-info">We'll collect your laundry from anywhere in Da Nang. Collection and delivery are always free within the city.</div>
        </div>
        <div className="card">
          <img src="./pictures/laundry.png" alt="laundry maching"/>
          <h2>Our Team Cleans</h2>
          <div className="long-info">Your laundry is taken to our facilities where our expert team spot-check and track every item. We use only the best quality products, to keep your clothes and shoes looking like new.</div>
        </div>
        <div className="card">
          <img src="./pictures/delivery-man.png" alt="delivery man"/>
          <h2>Our Driver Delivers</h2>
          <div className="long-info">Your clean laundry is returned to you in as little as 6 hours with our express service, or 24 hours with our standard service.</div>
        </div>
      </div>
      <NavLink href="/order/new/:id"><Button color="success" size="lg">Book A Collection</Button>{' '}</NavLink>    </div>
  )
}

export default HowItWorks;