import React from "react";
import { Button } from "react-bootstrap";

import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const Product = (props) => {
  console.log(props);
  const { name, img, rating, category, price,  _id } = props.product;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div
        className="card mx-auto className='mb-0' border m-2"
        style={{ width: "18rem" }}
      >
        <img  src={img} className="card-img-top img-fluid " alt="..." />
        <div className="card-body text-center m-0">
          <h5 className="card-title">{name}</h5>
          <div className="text-start">
            <Rating
              readonly
              className="text-warning"
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">{rating}</span>
          </div>
          <p>Price: {price}</p>
          <Link to={`/order/${_id}`}>
            <Button className="btn btn-primary w-100 fw-bold">Add to Cart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
