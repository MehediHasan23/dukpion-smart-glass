import React from "react";
import Rating from "react-rating";

import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

const SetReview = (props) => {
  const { name, rating, comment } = props.review;
  console.log(props);
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div
        class="card text-dark bg-light mx-auto mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div class="card-header border-0">
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted ">{rating}</span>
            <span className="text-muted "> {name}</span>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default SetReview;
