import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const renderStars = (count = 4.5) => {
    const stars = [];
    const fullStars = Math.floor(count);
    const hasHalf = count % 1 !== 0;
    for (let i = 0; i < fullStars; i++)
      stars.push(<i key={"full" + i} className="bi bi-star-fill" />);
    if (hasHalf) stars.push(<i key="half" className="bi bi-star-half" />);
    while (stars.length < 5)
      stars.push(<i key={"empty" + stars.length} className="bi bi-star" />);
    return stars;
  };

  const handleShopNow = () => {
    alert("🛍️ Shopping feature is coming soon!");
    // Or use toast: toast.info("Shopping feature is coming soon!");
  };

  return (
    <div className="products-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title display-4 fw-bold">Our Premium Products</h2>
          <p className="text-muted">Professional Hair Care Solutions</p>
        </div>

        {loading ? (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {products.map((product) => (
              <div className="col-lg-3 col-md-6" key={product._id}>
                <div className="product-card h-100">
                  <div className="product-image position-relative">
                    <img src={product.image} alt={product.name} className="card-img-top" />
                    <div className="product-overlay d-flex align-items-center justify-content-center">
                      <button className="btn btn-shop" onClick={handleShopNow}>
                        <i className="bi bi-cart-plus me-2" /> Shop Now
                      </button>
                    </div>
                  </div>
                  <div className="product-info p-4">
                    <h3 className="h5 mb-2">{product.name}</h3>
                    <p className="product-description">{product.description || "High quality product"}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="product-price">${product.price}</div>
                      <div className="rating text-warning">{renderStars(product.rating || 4.5)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
