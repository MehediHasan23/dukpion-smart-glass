import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "react-rating";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

import glass1 from "./../../../images/sunglasses/01_sunglasses_image-800x520.png";
import glass2 from "./../../../images/sunglasses/03_sunglasses_image-800x520.png";
import glass3 from "./../../../images/sunglasses/04_sunglasses_image-800x520.png";
import glass4 from "./../../../images/sunglasses/05_sunglasses_image-800x520.png";
import glass5 from "./../../../images/sunglasses/06_sunglasses_image-800x520.png";
import glass6 from "./../../../images/sunglasses/12_sunglasses_image-800x520.png";
const CollectionDetails = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginTop: "120px" }}>
      <h2>
        <span className="text-info">Latest</span> Collection
      </h2>
      <Slider {...settings} className="my-5">
        <div className="border bg-light">
          <div className="glasses">
            <img className="img-fluid " src={glass1} alt="" />
            <div className="glass-content">
              <small className="fw-bold">Premium</small>
            </div>
          </div>
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>Moveflex Silver</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border bg-light ">
          <div className="glasses">
            <img className="img-fluid " src={glass2} alt="" />
            <div className="glass-content">
              <small className="fw-bold">Premium</small>
            </div>
          </div>
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>Moveflex Silver</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border bg-light">
          <div className="glasses">
            <img className="img-fluid " src={glass3} alt="" />
            <div className="glass-content">
              <small className="fw-bold">Premium</small>
            </div>
          </div>
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>Moveflex Silver</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border bg-light">
          <div className="glasses">
            <img className="img-fluid " src={glass4} alt="" />
            <div className="glass-content">
              <small className="fw-bold">Premium</small>
            </div>
          </div>
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>Moveflex Silver</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border bg-light">
          <div className="glasses">
            <img className="img-fluid " src={glass5} alt="" />
            <div className="glass-content">
              <small className="fw-bold">Premium</small>
            </div>
          </div>
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>Moveflex Silver</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border bg-light">
          <div className="glasses">
            <img className="img-fluid " src={glass6} alt="" />
            <div className="glass-content">
              <small className="fw-bold">Premium</small>
            </div>
          </div>
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>Moveflex Silver</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
      </Slider>
    </div>
  );
};

export default CollectionDetails;
