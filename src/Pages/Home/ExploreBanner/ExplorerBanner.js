import React from "react";
import { NavLink } from "react-router-dom";
import "./ExplorerBanner.css";

const ExplorerBanner = () => {
  return (
    <div className="explorer-container">
      <div className="row d-flex justify-content-center align-items-center explorer">
        <div>
          <h1 className="explorer-title m-3">
            What Defines You More <br /> Than Your Glasses?{" "}
          </h1>

          <NavLink to="/home" className="mt-3 regular-btn">
            Go To Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ExplorerBanner;
