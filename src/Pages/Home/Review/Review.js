import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SetReview from "../SetReview/SetReview";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://boiling-caverns-07920.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="mt-5">
      <div>
        <h1 className="text-center mb-5 text-info">TESTIMONIAL</h1>
      </div>

      <div className="row">
        {reviews.map((review) => (
          <SetReview key={review._id} review={review}></SetReview>
        ))}
      </div>
      <div>
        <Link to="/more">
          <button className="btn btn-secondary">
            VIEW MORE <FontAwesomeIcon icon={faArrowAltCircleDown} />
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Review;
