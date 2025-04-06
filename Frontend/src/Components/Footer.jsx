import React from "react";
import { Link } from "react-router-dom"; // ✅ Added
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>About Us</h5>
            <p>Professional barber services with years of experience...</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/booking">Book Now</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Working Hours</h5>
            <ul className="working-hours">
              <li>Mon–Fri: 9AM–8PM</li>
              <li>Saturday: 10AM–6PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Contact Us</h5>
            <ul className="contact-info">
              <li><i className="fas fa-phone" /> +1 234 567 8900</li>
              <li><i className="fas fa-envelope" /> info@barbershop.com</li>
              <li><i className="fas fa-map-marker-alt" /> 123 Barber Street</li>
            </ul>
            <div className="social-icons">
              <a href="https://facebook.com"><i className="fab fa-facebook-f" /></a>
              <a href="https://instagram.com"><i className="fab fa-instagram" /></a>
              <a href="https://twitter.com"><i className="fab fa-twitter" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12"><hr />
            <p className="copyright">
              © 2025 Your Barber Shop. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
