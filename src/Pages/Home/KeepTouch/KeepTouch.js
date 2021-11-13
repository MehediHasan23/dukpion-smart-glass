import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import model from './../../../images/alonso-vila-ulloa-CSDOMK9xy6g-unsplash.jpg'

const KeepTouch = () => {
  return (
    <div className=" my-5 bg-light ">
      <div className="row align-items-center">
        <div className="col-sm-12 col-md-12 col-lg-7">
          <img className="img-fluid" src={model} alt="" />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-5 py-5">
          <div style={{ textAlign: "left" }}>
            <i>
              <h3 className="fw-bold">LET’S KEEP IN TOUCH</h3>
            </i>
            <i>
              <p className="text-muted fs-4">
                We’re very active on our social media platforms. Like and follow
                to stay updated with us.
              </p>
            </i>
            <button className="btn btn-dark">
              <Link
                to="/explorer"
                style={{ textDecoration: "none", color: "white" }}
              >
                <i>VIEW COLLECTION</i> <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeepTouch;