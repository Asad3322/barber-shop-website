import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <>
        <section className="contact-section">
          <div className="container">
            <div className="row gy-4">
              {/* Contact Information */}
              <div className="col-lg-4">
                <div className="row gy-4">
                  <div className="col-12">
                    <div className="contact-info-box">
                      <div className="contact-icon">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <h4 className="mb-3">Visit Us</h4>

                      <p className="mb-0">123 Barber Street</p>
                      <p className="mb-0">New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contact-info-box">
                      <div className="contact-icon">
                        <i className="bi bi-telephone" />
                      </div>
                      <h4 className="mb-3">Call Us</h4>
                      <p className="mb-0">+1 (555) 123-4567</p>
                      <p className="mb-0">+1 (555) 987-6543</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="contact-info-box">
                      <div className="contact-icon">
                        <i className="bi bi-clock" />
                      </div>
                      <h4 className="mb-3">Working Hours</h4>
                      <p className="mb-0">Monday - Saturday: 9AM - 8PM</p>
                      <p className="mb-0">Sunday: 10AM - 6PM</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="col-lg-8">
                <div className="form-container">
                  <h2 className="section-title text-dark">
                    Book Your Appointment
                  </h2>
                  <form id="appointmentForm">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your first name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your last name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Phone</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter your phone number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">Select Service</label>
                          <select className="form-select" required="">
                            <option value="">Choose a service</option>
                            <option value="haircut">Haircut</option>
                            <option value="beard-trim">Beard Trim</option>
                            <option value="shave">Clean Shave</option>
                            <option value="hair-color">Hair Color</option>
                            <option value="styling">Hair Styling</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Preferred Date</label>
                          <input
                            type="date"
                            className="form-control"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="form-label">Preferred Time</label>
                          <div className="d-flex flex-wrap gap-2">
                            <div className="time-slot">9:00 AM</div>
                            <div className="time-slot">10:00 AM</div>
                            <div className="time-slot">11:00 AM</div>
                            <div className="time-slot">2:00 PM</div>
                            <div className="time-slot">3:00 PM</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group">
                          <label className="form-label">Special Requests</label>
                          <textarea
                            className="form-control"
                            rows={3}
                            placeholder="Any special requests or notes?"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-submit">
                          <i className="bi bi-calendar-check me-2" />
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Contact;
