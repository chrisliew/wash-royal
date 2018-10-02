import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import HeroImage from './HeroImage';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import Faq from './Faq';
import Testimonials from './Testimonials';
import Map from './Map';
import About from './About';
import Footer from './Footer';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <AppNavbar />
        <HeroImage />
        <HowItWorks />
        <Pricing />
        <Faq />
        <Testimonials />
        <About />
        <Footer />
      </div>
    )
  }
}

export default Home;