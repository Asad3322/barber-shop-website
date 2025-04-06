import React from "react";
import { Link } from "react-router-dom";
import './Hero.css';

const Hero = () => {
  return (
    <div id="barberCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#barberCarousel" data-bs-slide-to={0} className="active" />
        <button type="button" data-bs-target="#barberCarousel" data-bs-slide-to={1} />
        <button type="button" data-bs-target="#barberCarousel" data-bs-slide-to={2} />
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {[
          {
            img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1",
            title: "Premium Haircuts",
            text: "Experience the finest haircuts...",
          },
          {
            img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a",
            title: "Expert Beard Grooming",
            text: "Perfect your look with professional beard styling...",
          },
          {
            img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
            title: "VIP Experience",
            text: "Luxury grooming services in a classic atmosphere",
          },
        ].map((slide, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <img src={slide.img} className="d-block w-100" alt={slide.title} />
            <div className="carousel-caption">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
              <Link to="/booking" className="btn btn-book">Book Now</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="carousel-control-prev" type="button" data-bs-target="#barberCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" />
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#barberCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" />
      </button>
    </div>
  );
};

export default Hero;
