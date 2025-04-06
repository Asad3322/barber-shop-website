import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; // For notifications

const AddProduct = () => {
  const [product, setProduct] = useState({ name: "", price: "" });
  const [imageFile, setImageFile] = useState(null);

  // Handle form field change (name, price)
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the name, price, and image are provided
    if (!product.name || !product.price || !imageFile) {
      toast.error("Please provide name, price, and image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("image", imageFile);  // Ensure the field name matches the backend

    try {
      const response = await axios.post("http://localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",  // This header is important for file uploads
        },
      });
      toast.success("Product added successfully!");
      console.log(response.data);  // Handle the response if needed
      setProduct({ name: "", price: "" });
      setImageFile(null);
    } catch (err) {
      toast.error("Error adding product");
      console.error("Error adding product:", err);
    }
  };

  return (
    <div className="container py-5">
      <h3 className="text-center mb-4">Add Product</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter product price"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
