import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ViewService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/services");
        setServices(res.data);
        setLoading(false);
      } catch (err) {
        toast.error("Failed to load services");
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this service?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/services/${id}`);
      setServices((prev) => prev.filter((service) => service._id !== id));
      toast.success("Service deleted successfully");
    } catch (err) {
      toast.error("Failed to delete service");
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-service/${id}`);
  };

  if (loading) return <div className="text-center">Loading services...</div>;

  return (
    <div className="container mt-4">
      <h3>View Services</h3>
      {services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service._id}>
                <td>
                  <img
                    src={`http://localhost:5000${service.image}`}
                    alt={service.name}
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-service.jpg";
                    }}
                  />
                </td>
                <td>{service.name}</td>
                <td>{service.category}</td>
                <td>{service.description}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleEdit(service._id)}
                  >
                    Edit
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

export default ViewService;
