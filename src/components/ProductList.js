import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function ProductList({ data }) {
  const addToCart = (item) => {
    fetch(
      "https://my-json-server.typicode.com/theakshaymore/zommerce-server/cart/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    ).then(() => {
      console.log("new data added");
    });
  };
  return (
    <div className="container mt-5 pt-5 productlist">
      <h4 class="text-center mb-4">
        <strong>Our Products</strong>
      </h4>
      <div className="row">
        {data.map((item) => (
          <div className="col-lg-4 col-md-5" key={item.id}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
