import React from "react";
import "./Extraproducts.css";

// ✅ Fixed import paths
import img4 from "../assets/Beard oil.jpg";
import img5 from "../assets/Styling pomade.jpg";
import img6 from "../assets/Gift card.jpg";
import img7 from "../assets/apothecary-87-Zlr-jJDqmaI-unsplash.jpg";

const Extraproducts = () => {
  return (
    <>
      <section className="products-section py-5">
        <div className="container">
          <div className="row g-4">
            {/* Service Card 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="product-card h-100">
                <div className="product-image">
                  <img
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3"
                    className="img-fluid"
                    alt="Classic Haircut"
                  />
                  <div className="product-tag">Popular</div>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="product-card h-100">
                <div className="product-image">
                  <img
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3"
                    className="img-fluid"
                    alt="Beard Trim"
                  />
                  <div className="product-tag bg-danger">Hot</div>
                </div>
              </div>
            </div>

            {/* Product Card 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="product-card h-100">
                <div className="product-image">
                  <img src={img4} className="img-fluid" alt="Beard Oil" />
                  <div className="product-tag bg-success">New</div>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="product-card h-100">
                <div className="product-image">
                  <img src={img5} className="img-fluid" alt="Hair Pomade" />
                </div>
              </div>
            </div>

            {/* Additional Products */}
            <div className="col-lg-3 col-md-6">
              <div className="product-card h-100">
                <div className="product-image">
                  <img
                    src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?ixlib=rb-4.0.3"
                    className="img-fluid"
                    alt="Shaving Kit"
                  />
                  <div className="product-tag bg-info">Bundle</div>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="product-card h-100">
                <div className="product-image">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3"
                    className="img-fluid"
                    alt="Hot Towel Shave"
                  />
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="product-card h-100">
                <div className="product-image">
                  <img src={img7} className="img-fluid" alt="Professional Scissors" />
                </div>
              </div>
            </div>

            {/* Product Card 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="product-card h-100">
                <div className="product-image">
                  <img src={img6} className="img-fluid" alt="Gift Card" />
                  <div className="product-tag bg-warning">Best Gift</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Extraproducts;
