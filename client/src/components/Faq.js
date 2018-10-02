import React, { Component } from 'react';

class Faq extends Component {
  render() {
    return (
      <div className="faq">
        <h1>Frequently Asked Questions (FAQ)</h1>
        <div className="container">
          <div className="question">
            <h2>Do I have to be around for collection and delivery?</h2>
            <p>We're able to collect from your hotel/hostel/guesthouse reception. Just let them know we're coming to pick it up.</p>
          </div>
          <div className="question">
            <h2>How do I pay?</h2>
            <p>You can pay by credit/debit card (we accept VISA, MasterCard and JCB) or cash on delivery.</p>
          </div>
          <div className="question">
            <h2>When do I pay?</h2>
            <p>We'll send you an exact quote as soon as we've weighed everything, letting you know how much is due when we deliver. You can leave cash with your reception if you're unable to be around for delivery.</p>
          </div>
          <div className="question">
            <h2>How long does WashDrop take?</h2>
            <p>We offer an express 6 hour service, as well as our standard next-day service, which will get your laundry back to you in 24 hours.</p>
          </div>
          <div className="question">
            <h2>What are your opening hours?</h2>
            <p>We're open 7 days a week from 8 AM - 8 PM.</p>
          </div>
          <div className="question">
            <h2>Do I need to weigh my laundry?</h2>
            <p>No, we just ask for a weight estimate to give you an instant quote. We'll weigh everything when it arrives at our shop, and send you a invoice with the final amount due.</p>
          </div>
          <div className="question">
            <h2>How is my laundry dried?</h2>
            <p>For our standard service, all laundry is air dried. For our express service we often use dryers on a low setting.</p>
          </div>
          <div className="question">
            <h2>Do I need to sort my clothes in to colours and whites?</h2>
            <p>We'll do that for you, don't worry! Just put everything you want washed in the bag.</p>
          </div>
          <div className="question">
            <h2>What temperature do you wash at?</h2>
            <p>We wash everything at 30 degrees celsius.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Faq;