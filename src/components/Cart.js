import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import { Redirect, Link } from "react-router-dom";

function Cart() {
  // TODO: COME BACK HERE FOR DYNAMIC DATA #ERR2
  const { data, isPending, error } = useFetch("http://localhost:8000/cart/");

  // STATIC DATA
  const [dummy, setDummy] = useState([
    {
      id: 2,
      name: "Girl Tshirt",
      price: 200,
      img: "https://images.pexels.com/photos/4495705/pexels-photo-4495705.jpeg?auto=compress",
    },
    {
      id: 3,
      name: "Rounded T-shirt",
      price: 140,
      img: "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress",
    },
    {
      id: 5,
      name: "Girls Collection",
      price: 199,
      img: "https://images.pexels.com/photos/1937336/pexels-photo-1937336.jpeg?auto=compress",
    },
  ]);

  console.log(dummy);

  const getAmount = () => {
    let amount = 0;
    dummy.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  return (
    <div>
      <p className="display-6 fw-bold text-center text-dark mt-5">
        Your Cart <i class="fas fa-shopping-cart ps-1"></i>
      </p>
      <div className="row">
        {/* Products List */}
        <div className="col-lg-6 mt-3 cart-totalbox">
          {dummy &&
            dummy.map((item) => (
              <div className="card text-dark text-start border-0 mt-2 mb-5 border-bottom border-end">
                <div className="row no-gutters">
                  <div className="col-sm-5">
                    <div className="card-img" style={{ maxWidth: "500px" }}>
                      <img src={item.img} alt="img" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-sm-7">
                    <div className="card-body">
                      <div class="d-flex justify-content-between">
                        <div>
                          <h5>{item.name}</h5>
                          <p class="mb-2 text-muted text-uppercase small">
                            Category - winter
                          </p>

                          <p class="mb-2 text-muted text-uppercase small">
                            Price: <i className="fas fa-rupee-sign"></i>
                            {item.price}
                          </p>
                          <p class="mb-2 text-muted small">
                            <i class="fas fa-check text-success me-1"></i>
                            In stock
                          </p>
                        </div>
                        <div>
                          <button className="btn btn-sm btn-danger">
                            <i class="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/* Calculations  */}
        <div className="col-lg-6 mt-3 cart-totalbox">
          <div
            className="container card border-0 py-4 "
            style={{ width: "400px" }}
          >
            <h5 className="">Payment Details</h5>
            <div class="mb-3 mt-3">
              <p className="text-muted">
                Complete your purchase by providing your payment details
              </p>
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Card details
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Cardholder name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <hr />
            <ul class="list-group list-group-flush mt-3">
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 mb-1">
                Temporary amount
                <span>
                  {getAmount()}
                  <i className="fas fa-rupee-sign ms-1" />
                </span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0 mb-1">
                Shipping
                <span>Available</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total</strong>
                  <strong>
                    <p class="mb-0">(including All Taxes)</p>
                  </strong>
                </div>
                <span>
                  <strong>
                    {getAmount()}
                    <i className="fas fa-rupee-sign ms-1" />
                  </strong>
                </span>
              </li>
            </ul>
            <div class="row">
              <span>Add a discount code (optional)</span>
              <div class="col-5 mt-3">
                <input type="text" class="form-control" placeholder="" />
              </div>
              <div class="col-3 mt-3">
                <button className="btn btn-dark">Redeem</button>
              </div>
            </div>

            <Link className="btn col-12 mt-5 rounded my-btn3">
              <span>
                Pay <i className="fas fa-rupee-sign"></i> {getAmount()}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
