import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Card({ item }) {
  const [addedbtn, setAddedbtn] = useState(false);

  const addToCart = () => {
    setAddedbtn(true);
    console.log("added");
  };

  const showAddToCart = () => {
    return (
      <button onClick={addToCart} className="col-5 btn rounded m-1 my-btn">
        <i class="fas fa-shopping-cart pe-1"></i>
        Cart
      </button>
    );
  };

  const showAddedButton = () => {
    return (
      <button onClick={addToCart} className="col-5 btn rounded m-1 btn-success">
        <span>
          Added
          <i class="fas fa-check"></i>
        </span>
      </button>
    );
  };
  return (
    <div class="card my-card m-2 p-2 mt-5">
      <Link to={`/detail/${item.id}`} className="text-decoration-none">
        <img src={item.img} class="card-img-top" alt="..." />
        <div className="card-body text-center">
          <h5 className="btn my-btn3 col-12 rounded">{item.name}</h5>
          <p className="small text-muted text-uppercase mb-2">winter</p>
          <h6 className="mb-3 text-dark">
            <i className="fas fa-rupee-sign pe-2" />
            <span>{item.price}</span>
          </h6>
          <hr />
          <p className="text-center my-0">
            <span>
              <i className="fas fa-star text-warning px-1" />
            </span>
            <span>
              <i className="fas fa-star text-warning px-1" />
            </span>
            <span>
              <i className="fas fa-star text-warning px-1" />
            </span>
            <span>
              <i className="far fa-star text-warning px-1" />
            </span>
            <span>
              <i className="far fa-star text-warning px-1" />
            </span>
          </p>

          {/* {addedbtn ? showAddedButton() : showAddToCart()} */}
          {/* <Link
          to={`/detail/${item.id}`}
          className="col-12 btn m-1 rounded my-btn3"
        >
          View Product
          <i class="fas fa-search ps-2"></i>
        </Link> */}
        </div>
      </Link>
    </div>
  );
}

export default Card;
