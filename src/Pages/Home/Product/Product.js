import React from "react";
import { Button } from "react-bootstrap";
import "./Product.css";
import Zoom from "react-reveal/Zoom";

import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const Product = (props) => {
  // console.log(props);
  const { name, img, rating, ratingCount, modelNumber, variant, price, _id } =
    props.product;
  return (
    <Zoom bottom>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div
          className="card mx-auto  border border-3 rounded-5 m-2 testimonial-card"
          style={{ width: "18rem" }}
        >
          <div className="glasses">
            <img src={img} className="card-img-top img-fluid " alt="..." />
            <div className="glass-content">
              <small className="fw-bold">Hot sell</small>
            </div>
          </div>

          <div className="card-body text-start m-0">
            <h5 className="card-title fw-bold text-muted">{name}</h5>
            <div className="text-start">
              <Rating
                readonly
                className="text-danger"
                initialRating={rating}
                emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                fullSymbol={<FontAwesomeIcon icon={fullStar} />}
              />{" "}
              <span className="text-muted">{rating}</span>
              <span className="text-muted">( reviews {ratingCount})</span>
            </div>
            <div className="text-danger mt-3">
              <p className=" text-muted">Model: {modelNumber}</p>
              <span className="fw-bold">
                <sup className="fs-6">$</sup> {price}
              </span>
            </div>
            <p className=" text-muted">Variant: {variant}</p>
            <Link to={`/orderReplace/${_id}`}>
              <Button className="btn btn-primary w-100 fw-bold">
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Product;
