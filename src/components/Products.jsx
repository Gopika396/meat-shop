import React from "react";
import "../assets/style/style.css";

import chickenDrumsticks from "../assets/images/chicken-drumsticks.jpg";
import chickenBoneless from "../assets/images/chicken-boneless.jpg";
import chickenThigh from "../assets/images/chicken-thigh.jpg";

import muttonShoulder from "../assets/images/mutton-shoulder.jpg";
import muttonLiver from "../assets/images/mutton-liver.jpg";
import muttonMince from "../assets/images/mutton-mince.jpg";

function Products() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#/">
            MeatMart
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/products">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#/">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="product-page">
        <div className="container">
          <h1>Our Meat Products</h1>

          <p className="product-page-text">
            Fresh chicken and quality mutton for your favorite meals.
          </p>

          <h2>Chicken</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="product-box">
                <img
                  src={chickenDrumsticks}
                  alt="Chicken Drumsticks"
                />

                <h3>Chicken Drumsticks</h3>

                <p>
                  Juicy chicken drumsticks perfect for roasting,
                  grilling and frying.
                </p>

                <h4>₹329 / kg</h4>

                <button className="buy-btn">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-box">
                <img
                  src={chickenBoneless}
                  alt="Chicken Boneless"
                />

                <h3>Chicken Boneless</h3>

                <p>
                  Soft and tender boneless chicken for quick and
                  tasty meals.
                </p>

                <h4>₹399 / kg</h4>

                <button className="buy-btn">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-box">
                <img
                  src={chickenThigh}
                  alt="Chicken Thigh"
                />

                <h3>Chicken Thigh</h3>

                <p>
                  Tender chicken thighs with rich flavor for
                  delicious recipes.
                </p>

                <h4>₹359 / kg</h4>

                <button className="buy-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <h2 className="mutton-title">
            Mutton
          </h2>

          <div className="row">
            <div className="col-md-4">
              <div className="product-box">
                <img
                  src={muttonShoulder}
                  alt="Mutton Shoulder"
                />

                <h3>Mutton Shoulder</h3>

                <p>
                  Fresh mutton shoulder ideal for slow cooking
                  and curries.
                </p>

                <h4>₹849 / kg</h4>

                <button className="buy-btn">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-box">
                <img
                  src={muttonLiver}
                  alt="Mutton Liver"
                />

                <h3>Mutton Liver</h3>

                <p>
                  Fresh mutton liver suitable for traditional
                  home recipes.
                </p>

                <h4>₹599 / kg</h4>

                <button className="buy-btn">
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-box">
                <img
                  src={muttonMince}
                  alt="Mutton Mince"
                />

                <h3>Mutton Mince</h3>

                <p>
                  Freshly minced mutton for kebabs, curries
                  and meatballs.
                </p>

                <h4>₹799 / kg</h4>

                <button className="buy-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>MeatMart</h3>

              <p>
                Fresh chicken and quality mutton for delicious
                everyday meals.
              </p>
            </div>

            <div className="col-md-4">
              <h3>Quick Links</h3>

              <a href="#/">
                Home
              </a>

              <a href="#/products">
                Products
              </a>

              <a href="#/">
                Contact
              </a>

              <a href="#/">
                About
              </a>
            </div>

            <div className="col-md-4">
              <h3>Contact</h3>

              <p>Bengaluru, India</p>
              <p>+91 1111 11111</p>
              <p>meatmart@gmail.com</p>

              <h3>Follow Us</h3>

              <div className="social-links">
                <a href="#">
                  Facebook
                </a>

                <a href="#">
                  X
                </a>

                <a href="#">
                  Instagram
                </a>

                <a href="#">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <hr />

          <p className="copyright">
            © 2026 MeatMart. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Products;