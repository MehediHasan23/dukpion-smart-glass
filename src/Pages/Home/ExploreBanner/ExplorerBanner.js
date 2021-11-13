import React from "react";
import { NavLink } from "react-router-dom";
import "./ExplorerBanner.css";
import Slide from "react-reveal/Slide";

const ExplorerBanner = () => {
  return (
    <div className="explorer-container">
      <Slide left>
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
      </Slide>
    </div>
  );
};

export default ExplorerBanner;
