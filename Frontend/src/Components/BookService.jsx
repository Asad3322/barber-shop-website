import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BookService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/services/${id}`);
        setService(res.data);
      } catch (err) {
        toast.error("Failed to load service");
      }
    };
    fetchService();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/bookings", {
        serviceId: service._id,
        serviceName: service.name,
        userName,
        date,
      });
      toast.success("Booking confirmed!");
      navigate("/my-bookings");
    } catch (err) {
      toast.error("Booking failed");
    }
  };

  if (!service) return <div className="text-center mt-4">Loading service...</div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0 rounded-4">
            <div
              className="card-header text-white text-center rounded-top-4"
              style={{
                background: "linear-gradient(135deg, #4e54c8, #8f94fb)",
              }}
            >
              <h4 className="fw-bold mb-0">Book: {service.name}</h4>
            </div>
            <div className="card-body p-4">
              <div className="text-center mb-4">
                <img
                  src={`http://localhost:5000${service.image}`}
                  alt={service.name}
                  className="img-fluid rounded-3 shadow-sm"
                  style={{ maxHeight: "240px", objectFit: "cover" }}
                  onError={(e) => (e.target.src = "/default-service.jpg")}
                />
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Your Name</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">Booking Date</label>
                  <input
                    type="date"
                    className="form-control rounded-3"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-lg w-100 rounded-3"
                  style={{
                    background: "linear-gradient(to right, #667eea, #764ba2)",
                    color: "#fff",
                    fontWeight: "600",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s",
                  }}
                >
                  <i className="fas fa-calendar-check me-2" />
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookService;
