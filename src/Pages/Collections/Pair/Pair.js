import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container } from "react-bootstrap";
import pair1 from "./../../../images/another/Female-Model-tinified.jpg";
import pair2 from "./../../../images/another/ironman-red-model-photo-2021-a-resized-tinified.png";

const Pair = () => {
  return (
    <Container style={{ marginTop: "70px" }}>
      <div className="row">
        <div className="col-sm-12 col-lg-6 bg-light p-3 rounded">
          <h1 className="text-center">A PAIR FOR HER</h1>
          <img className="img-fluid" src={pair1} alt="" />
          <div style={{ textAlign: "left" }}>
            <div style={{ textAlign: "left" }}>
              <h5 className="fw-bold text-muted">
                Put on the right sunglasses and conquer the world
              </h5>
              <p>
                Sunglasses might be a small accessory, but they have a large
                impact. A great pair can elevate your outfit and your style, but
                our sunglasses for women can boost your mood too.
              </p>
              <button className="btn btn-dark">
                View Details
                <FontAwesomeIcon className="mx-3" icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 bg-light p-3 rounded">
          <h1 className="text-center">A PAIR FOR HIM</h1>
          <img className="img-fluid" src={pair2} alt="" />
          <div style={{ textAlign: "left" }}>
            <h5 className="fw-bold text-muted">
              Look hot with cool sunglasses
            </h5>
            <p>
              No matter your taste, no matter your budget, no matter how often
              you lose your damn sunglasses in the back of a Lyft, we’ve got you
              covered with a wide range of trendy and fashionable shades
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

export default Pair;
