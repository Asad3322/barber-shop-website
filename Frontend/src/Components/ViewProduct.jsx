import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ViewProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [editProduct, setEditProduct] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", price: "", image: null });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("There was an error fetching the products.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
      toast.success("Product deleted successfully");
    } catch (err) {
      toast.error("Failed to delete product");
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
    setEditForm({ name: product.name, price: product.price, image: null });
    setPreview(product.image);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditForm((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("name", editForm.name);
      formData.append("price", editForm.price);
      if (editForm.image) {
        formData.append("image", editForm.image);
      }

      const res = await axios.put(
        `http://localhost:5000/api/products/${editProduct._id}`,
        formData
      );

      toast.success("Product updated");

      // Update local state
      const updated = products.map((p) =>
        p._id === editProduct._id ? res.data.product : p
      );
      setProducts(updated);
      setEditProduct(null);
      setPreview(null);
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (loading) return <div className="text-center">Loading products...</div>;
  if (error) return <div className="text-center text-danger">{error}</div>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">View Products</h2>
      <div className="row">
        {products.length === 0 ? (
          <div className="col-12 text-center">
            <p>No products available.</p>
          </div>
        ) : (
          products.map((product) => (
            <div key={product._id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  loading="lazy"
                  onError={(e) => (e.target.src = "/default-product.jpg")}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEditClick(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {editProduct && (
        <div className="modal d-block" tabIndex="-1" style={{ background: "#00000080" }}>
          <div className="modal-dialog">
            <div className="modal-content p-3">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setEditProduct(null);
                    setPreview(null);
                  }}
                />
              </div>
              <div className="modal-body">
                <input
                  className="form-control mb-2"
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleFormChange}
                  placeholder="Product name"
                />
                <input
                  className="form-control mb-2"
                  type="number"
                  name="price"
                  value={editForm.price}
                  onChange={handleFormChange}
                  placeholder="Price"
                />
                <input
                  className="form-control mb-2"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    style={{ width: "100%", marginTop: "10px" }}
                  />
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setEditProduct(null)}>
                  Cancel
                </button>
                <button className="btn btn-success" onClick={handleUpdate}>
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
