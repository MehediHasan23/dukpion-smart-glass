import React from "react";
import { Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./CollectionBanner.css";
import colllection from "./../../../images/stephanie-hau-P4TPjOXKqY8-unsplash.jpg";

const CollectionBanner = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <div className="row align-items-center " style={{ textAlign: "left" }}>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h1 className="fw-bold">
            A BROAD RANGE OF <br /> TRENDY EYEWEAR{" "}
          </h1>
          <p className="text-muted">
            Perfect look with a suitable pair of glasses. Put on eyewear & put
            on positive view mode.
          </p>
          <Link to="/explorer">
            <button className="btn btn-dark">Shop Now</button>
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <img className="img-fluid" src={colllection} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default CollectionBanner;
