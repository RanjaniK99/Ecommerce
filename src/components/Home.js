import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero mainpg">
      <div className="card bg-dark text-white border-0">
        <img
          src="./assets/bg3.jpg"
          className="card-img bgimg"
          alt="background"
          height="410px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-5 fw-bolder mb-0">
              New Season Arrivals
            </h5>
            <p className="card-text lead fs-3">Check Out All The Trends</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
