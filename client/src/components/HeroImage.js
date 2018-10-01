import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';

const HeroImage = () => {
  return (
    <div>
      <Jumbotron id="hero-image" fluid>
        <Container className="container" fluid>
          <h1>Laundry Done Quick and Easy In Da Nang</h1>
          <h2>Free Pickup and Delivery within the city</h2>
          <p>Prices starting at 20,000 per kg</p>
          <Button color="success" size="lg">Book A Collection</Button>{' '}
        </Container>
      </Jumbotron>
    </div>
  )
}

export default HeroImage;