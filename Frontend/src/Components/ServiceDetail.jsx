// src/Components/ServiceDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import haircutImg from "../assets/haircut.jpg";
import beardImg from "../assets/beard.jpg";
import shaveImg from "../assets/shave.jpg";

const services = [
  {
    title: "Haircut & Styling",
    description: "Fresh, clean cuts tailored to your style.",
    image: haircutImg,
  },
  {
    title: "Beard Grooming",
    description: "Precision shaping and grooming for the modern man.",
    image: beardImg,
  },
  {
    title: "Royal Shave",
    description: "Relax with a luxury hot towel shave.",
    image: shaveImg,
  },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services[id];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!service) return <h2 className="text-center mt-5">Service not found</h2>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const booking = {
      ...formData,
      service: service.title,
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));

    setSubmitted(true);
    setFormData({ name: "", phone: "", date: "", time: "", notes: "" });
  };

  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img src={service.image} alt={service.title} className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h2>{service.title}</h2>
          <p className="text-muted">{service.description}</p>

          <h5 className="mt-4 mb-3">Book This Service</h5>

          {submitted && (
            <div className="alert alert-success">
              ✅ Booking confirmed! We’ll contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Preferred Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Preferred Time</label>
              <input
                type="time"
                className="form-control"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Notes</label>
              <textarea
                className="form-control"
                rows="3"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark">
              <i className="fas fa-calendar-check me-2" /> Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
