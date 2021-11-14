import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import img1 from "./../../../images/another/Champgne-Creative10.jpg";
import img2 from "./../../../images/another/MODEL-PHOTO.jpg";

const Optics = () => {
  return (
    <Container style={{ marginTop: "150px" }} className="shadow">
      <div className="row ">
        <div className="col-sm-12 col-lg-6 bg-light p-3 rounded">
          <h1 style={{ fontWeight: "600", textAlign: "left" }}>
            GRAB A PAIR AND GET OUT THERE IN THE SUN
          </h1>
          <img className="img-fluid" src={img1} alt="" />
          <div style={{ textAlign: "left" }}>
            <h5 className="fw-bold text-muted">
              Sunglasses that help your eyes as well as your Look
            </h5>
            <p>
              Our sunglasses are designed to protect the eyes both from
              excessive light and from damaging UV light rays.
            </p>
            <button className="btn btn-dark">
              View Details
              <FontAwesomeIcon className="mx-3" icon={faChevronRight} />
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6  bg-light p-3 rounded">
          <h1 style={{ fontWeight: "600", textAlign: "left" }}>
            A PAIR OF AFFORDABLE EYEGLASSES
          </h1>
          <img className="img-fluid" src={img2} alt="" />
          <div style={{ textAlign: "left" }}>
            <h5 className="fw-bold text-muted">
              Life is too short to wear ugly eyeglasses
            </h5>
            <p>
              Looking Amazing is simple, just pick your best eyeglasses from our
              wide range of trendy collection.
            </p>
            <button className="btn btn-dark">
              View Details
              <FontAwesomeIcon className="mx-3" icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Optics;
