import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import about from "./../../../images/about/DONOVO-TRANSPARENT-MODEL.jpg";

const AboutCollection = () => {
  return (
    <Container className="mt-5 p-5 bg-light shadow rounded" >
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-5">
          <img className="img-fluid" src={about} alt="" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 mx-4 text-left">
          <div style={{ textAlign: "left" }}>
            <h3 className=" fw-bold text-muted">BLUE LIGHT BLOCKING GLASSES</h3>
            <h6 className=" text-muted">
              Give your eyes a break with anti-blue light glasses. Reading
              glasses with blue light protection is useful for people who want
              to preserve their vision. Due to the intense strain of working at
              the computer, your eyes get tired very quickly, our anti-blue
              glasses help protect your eyes from the harmful effects of the
              blue light.
            </h6>
            <button className="btn btn-dark">
              <Link
                to="/explorer"
                style={{ textDecoration: "none", color: "white" }}
              >
                VIEW COLLECTION <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutCollection;
