import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <h1>Testimonials</h1>
        <br />
        <br />
        <div className="styles" >
          <div className="media">
            <a href="#" className="pull-left animated rotateIn">
              <img src="http://gravatar.com/avatar/5ff03ed9872ea8b1e8214e37f06af586?s=512" width="70px" className="img-circle" />
            </a>
            <div className="media-body animated slideInRight">
              <h3>Chris Liew</h3>
              <em>CEO, <a href="http://w3eden.com">W3 Eden</a></em>
            </div>
          </div>
          <div className="tm"></div>
          <div className="bubble animated bounceIn">
          I was on vacation in Da Nang and needed to wash clothes - laundry prices in the hotels are insane. When looking for an alternative I found WashRoyal, their service is amazing. They pick up your clothes on time in your hotel and bring them back as well - all within a 30 minute window decided on by the customer. Everything worked out perfectly and the price is great.
       </div>
        </div>
        <br />
        <br />
        <div className="styles" >
          <div className="media">
            <a href="#" className="pull-left animated rotateIn">
              <img src="http://gravatar.com/avatar/5ff03ed9872ea8b1e8214e37f06af586?s=512" width="70px" className="img-circle" />
            </a>
            <div className="media-body animated slideInRight">
              <h3>Adam Othman</h3>
              <em>CEO, <a href="http://w3eden.com">W3 Eden</a></em>
            </div>
          </div>
          <div className="tm"></div>
          <div className="bubble animated bounceIn">
          While we lived in Da Nang we really enjoyed your laundry service. Most especially, my daughter just noticed that her dress, which had a broken strap, and our sheet, which had a tear in it, was sewn back together, and we can only think it must have been your great help! We were definitely satisfied with your service as it was, but we're very thankful for your extra help to fix these items for us. We will of course be glad to use your service when we're back in Vietnam.
       </div>
        </div>
        
      </div>
    )
  }
}

export default Testimonials;