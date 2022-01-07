import React from "react";
import { Link, useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg sticky-top navbar-light">
        <a class="navbar-brand fs-5" href="#">
          Zommerce
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item pe-2">
              <Link class="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item pe-2">
              <Link class="nav-link text-dark" to="/cart">
                Cart
              </Link>
            </li>
            <li class="nav-item pe-2">
              <a class="nav-link text-dark" href="#">
                Profile
              </a>
            </li>
            <li class="nav-item pe-2">
              <Link class="nav-link btn text-white rounded my-btn3" to="/">
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
