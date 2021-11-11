import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="row d-flex justify-content-center align-items-center banner">
        <div className="col-md-6">
          <h1 className="banner-title">Empowering Storytellers</h1>
          <p className="text-white mt-3 text-center mb-5">
            Everything you want to know about the Bangladesh Film School
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
