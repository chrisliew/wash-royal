import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import HeroImage from './HeroImage';
import HowItWorks from './HowItWorks';
import Faq from './Faq';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import BookingButton from './BookingButton';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <AppNavbar />
        <HeroImage />
        <HowItWorks />
        <BookingButton />
        <Faq />
        <BookingButton />
        <Testimonials />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Home;
