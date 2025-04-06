import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddService = () => {
  const [service, setService] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      return toast.error("Please select an image.");
    }

    const formData = new FormData();
    formData.append("name", service.name);
    formData.append("category", service.category);
    formData.append("description", service.description);
    formData.append("price", service.price);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:5000/api/services", formData);
      toast.success("Service added successfully");
      setService({ name: "", category: "", description: "", price: "" });
      setImage(null);
    } catch (err) {
      toast.error("Failed to add service");
    }
  };

  return (
    <div className="container mt-4">
      <h3>Add Service</h3>
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
          <label className="form-label">Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          <i className="bi bi-plus-circle me-2"></i>Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
