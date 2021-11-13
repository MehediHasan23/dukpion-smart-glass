import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="row d-flex justify-content-center align-items-center banner">
        <div className="col-md-6 text-left">
          <h1 className="banner-title">
            A BROAD RANGE OF <br />
            TRENDY EYEWEAR
          </h1>
          <p className="text-white mt-3 text-center mb-5">
            Perfect look with a suitable pair of glasses. <br /> Put on eyewear & put
            on positive view mode.
          </p>
          <NavLink to="/explorer" className="mt-3 regular-btn">
            Explorer More
          </NavLink>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Banner;
