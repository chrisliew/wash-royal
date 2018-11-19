import React from 'react';
import { Jumbotron, Container, Button, NavLink } from 'reactstrap';

const HeroImage = () => {
  return (
    <div>
      <Jumbotron id="hero-image" fluid>
        <Container className="container" fluid>
          <h1>Laundry Done Quick and Easy In Da Nang</h1>
          <h2>Free Pickup and Delivery within the city</h2>
          <p>Prices starting at 20,000 ₫ per kg</p>
          <NavLink href="/order/new/standard"><Button color="success" size="md">Book A Collection</Button>{' '}</NavLink>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default HeroImage;