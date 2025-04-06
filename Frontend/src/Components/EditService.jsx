import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditService = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);

  // Load existing service
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

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", service.name);
    formData.append("category", service.category);
    formData.append("description", service.description);
    formData.append("price", service.price);
    if (image) formData.append("image", image);

    try {
      await axios.put(`http://localhost:5000/api/services/${id}`, formData);
      toast.success("Service updated successfully");
      navigate("/view-service");
    } catch (err) {
      toast.error("Failed to update service");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Edit Service</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Service Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={service.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            name="category"
            className="form-control"
            value={service.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            value={service.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={service.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Replace Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Service
        </button>
      </form>
    </div>
  );
};

export default EditService;
