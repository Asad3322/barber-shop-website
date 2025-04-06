import React from "react";
import { Link } from "react-router-dom"; // ✅ Added
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column with Image */}
            <div className="col-lg-6 about-img-col">
              <div className="about-img-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1622288432450-277d0fef5ed6"
                  alt="Master Barber"
                  className="main-img"
                />
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1"
                  alt="Barber Shop Interior"
                  className="accent-img"
                />
                <div className="experience-badge">
                  <span className="years">25</span>
                  <span className="text">
                    Years of
                    <br />
                    Excellence
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column with Content */}
            <div className="col-lg-6 about-content-col">
              <div className="about-content">
                <span className="subtitle">About Our Barbershop</span>
                <h2 className="title">Traditional Techniques, Modern Style</h2>
                <p className="description">
                  Welcome to our premium barbershop, where traditional
                  craftsmanship meets contemporary style. Since 1998, we've been
                  dedicated to providing exceptional grooming services that help
                  men look and feel their absolute best.
                </p>

                {/* Features Grid */}
                <div className="features-grid">
                  <div className="feature-item">
                    <i className="fas fa-cut" />
                    <h3>Expert Cuts</h3>
                    <p>Precision haircuts tailored to your style</p>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-beard" />
                    <h3>Beard Care</h3>
                    <p>Professional beard grooming &amp; styling</p>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-spray-can" />
                    <h3>Hair Styling</h3>
                    <p>Modern &amp; classic styling options</p>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-pump-soap" />
                    <h3>Products</h3>
                    <p>Premium grooming products</p>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="stats-row">
                  <div className="stat-item">
                    <span className="stat-number">5000+</span>
                    <span className="stat-label">Happy Clients</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">4</span>
                    <span className="stat-label">Expert Barbers</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">25</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </div>

                {/* ✅ Fixed Book Now Link */}
                <Link to="/booking" className="btn btn-book-about">
                  Book Your Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
