import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/bookings");
        setBookings(res.data);
        setLoading(false);
      } catch (err) {
        toast.error("Failed to load bookings");
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      setBookings((prev) => prev.filter((b) => b._id !== id));
      toast.success("Booking canceled successfully");
    } catch (err) {
      toast.error("Failed to cancel booking");
    }
  };

  if (loading) return <div className="text-center mt-4">Loading bookings...</div>;

  return (
    <div className="container mt-4">
      <h3>Service Bookings</h3>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>User</th>
              <th>Service</th>
              <th>Booking Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={i}>
                <td>{b.userName}</td>
                <td>{b.serviceName}</td>
                <td>{new Date(b.date).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(b._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Bookings;
