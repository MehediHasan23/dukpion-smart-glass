import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import SetReview from '../SetReview/SetReview';

const Review = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch("https://boiling-caverns-07920.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [])
  return (
    <Container className="mt-5">
      <div>
        <h1 className="text-center fw-bold mb-5">
          WHAT CLIENTS SAYS
        </h1>
      </div>

      <div className="row">
        {reviews.map((review) => (
          <SetReview key={review._id} review={review}></SetReview>
        ))}
      </div>
    </Container>
  );
};

export default Review;