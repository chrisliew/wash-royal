import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>WashDrop<span>AddLogoHere</span></h3>
            <p className="footer-links">
              <a href="/">Home</a>
              ·
              <a href="/">Pricing</a>
              ·
              <a href="/">Faq</a>
              ·
              <a href="/">Contact</a>
            </p>
            <p className="footer-company-name">Company Name &copy; 2019</p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p><span>15 My Khe Street</span> Da Nang, Vietnam</p>
            </div>
            <div>
              <i className="fa fa-phone"></i>
              <p>+1 555 123456</p>
            </div>
            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">support@company.com</a></p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
            <div className="footer-icons">
              <a href="/"><i className="fa fa-facebook"></i></a>
              <a href="/"><i className="fa fa-twitter"></i></a>
              <a href="/"><i className="fa fa-linkedin"></i></a>
              <a href="/"><i className="fa fa-github"></i></a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;