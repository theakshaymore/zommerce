import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

function CardDetail() {
  const [addedbtn, setAddedbtn] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  const { data, isPending, error } = useFetch(
    "https://my-json-server.typicode.com/theakshaymore/zommerce-server/clothes/" +
      id
  );

  const addToCart = () => {
    fetch(
      "https://my-json-server.typicode.com/theakshaymore/zommerce-server/cart/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    ).then(() => {
      console.log("new data added");
      // setIsPending(false);
      // history.push("/");
    });
    setAddedbtn(true);
    console.log("added");
  };

  const showAddToCart = () => {
    return (
      <button
        onClick={addToCart}
        className="col-12 btn btn-lg rounded mt-4 my-btn3"
      >
        <i class="fas fa-shopping-cart pe-1"></i>
        Add to Cart
      </button>
    );
  };

  const showAddedButton = () => {
    return (
      <button
        onClick={addToCart}
        className="col-12 btn btn-lg rounded m-1 btn-success"
      >
        <span>
          Added
          <i class="fas fa-check ps-2"></i>
        </span>
      </button>
    );
  };

  return (
    <div className="carddetail">
      {isPending && (
        <div>
          <h1>Loading.......</h1>
        </div>
      )}
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
      {data && (
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-5 img-fluid card-det-img">
              <img src={data.img} alt="img" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 mt-5">
              <div className="conatiner-fluid">
                <p className="h3">{data ? data.name : "Name"}</p>
                <p className="text-muted text-uppercase small">"winter"</p>
                <p className="small text-start">
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
                <p className="p-1">
                  <strong>
                    <i className="fas fa-rupee-sign" />
                    {data ? data.price : "Price"}
                  </strong>
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ipsum,expedita
                </p>

                {addedbtn ? showAddedButton() : showAddToCart(data)}

                {/* <button className="btn col-10 my-4 my-btnn">Add to cart</button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardDetail;
