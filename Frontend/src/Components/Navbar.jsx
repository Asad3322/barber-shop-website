import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <i className="fas fa-cut me-2" />
            BARBER X
          </Link>
          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-home me-2" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <i className="fas fa-info-circle me-2" /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  <i className="fas fa-concierge-bell me-2" /> Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  <i className="fas fa-box-open me-2" /> Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn-contact" to="/contact">
                  <i className="fas fa-envelope me-2" /> Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn-signin" to="/login">
                  <i className="fas fa-sign-in-alt me-2" /> Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
