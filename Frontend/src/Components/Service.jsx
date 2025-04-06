import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Service.css";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/services");
        setServices(res.data);
      } catch (err) {
        toast.error("Failed to load services");
      }
    };
    fetchServices();
  }, []);

  return (
    <section className="services-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle">Our Premium Services</span>
          <h2 className="title">Professional Barber Services</h2>
          <div className="separator">
            <i className="fas fa-scissors" />
          </div>
        </div>

        <div className="row g-4">
          {services.length === 0 ? (
            <p className="text-center">No services available.</p>
          ) : (
            services.map((service) => (
              <div className="col-lg-4 col-md-6" key={service._id}>
                <div className="service-card">
                  <div className="service-image">
                    <img
                      src={`http://localhost:5000${service.image}`}
                      alt={service.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => (e.target.src = "/default-service.jpg")}
                    />
                    <div className="price-badge">${service.price}</div>
                  </div>
                  <div className="service-content">
                    <div className="service-icon">
                      <i className="fas fa-scissors" />
                    </div>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check" /> Clean Tools</li>
                      <li><i className="fas fa-check" /> Professional Staff</li>
                      <li><i className="fas fa-star text-warning" /> 5-Star Rated</li>
                    </ul>

                    {/* ✅ Book Now button links to booking route */}
                    <Link to={`/book-service/${service._id}`} className="btn btn-book-service">
                      <i className="fas fa-calendar-check me-2" />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Service;
