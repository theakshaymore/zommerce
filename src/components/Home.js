import React from "react";
import useFetch from "../useFetch";
import ProductList from "./ProductList";
import Trending from "./Trending";

function Home() {
  const { data, isPending, error } = useFetch("http://localhost:8000/clothes/");

  return (
    <div className="home">
      <Trending />
      {/* List of products */}
      {isPending && (
        <div className="container">
          <h1 className="text-center mt-3">Loading.......</h1>
        </div>
      )}
      {error && (
        <div>
          <h1>{error}</h1>
        </div>
      )}
      {data && <ProductList data={data} />}
    </div>
  );
}

export default Home;
