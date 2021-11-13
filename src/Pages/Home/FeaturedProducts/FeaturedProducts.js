import React from "react";
import './FeaturedProducts.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from "react-rating";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";

import pic1 from "./../../../images/sunglasses/men/1.jpg";
import pic3 from "./../../../images/sunglasses/men/3.jpg";
import pic4 from "./../../../images/sunglasses/men/4.jpg";
import pic5 from "./../../../images/sunglasses/men/4.jpg";
import pic6 from "./../../../images/sunglasses/men/6.jpg";
import pic7 from "./../../../images/sunglasses/men/7.jpg";
import pic8 from "./../../../images/sunglasses/men/8.jpg";
import pic9 from "./../../../images/sunglasses/men/9.jpg";
import pic10 from "./../../../images/sunglasses/men/10.jpg";
import pic11 from "./../../../images/sunglasses/men/11.jpg";

import picw1 from "./../../../images/sunglasses/women/w1.jpg";
import picw2 from "./../../../images/sunglasses/women/w2.jpg";
import picw3 from "./../../../images/sunglasses/women/w3.jpg";
import picw4 from "./../../../images/sunglasses/women/w4.jpg";
import picw5 from "./../../../images/sunglasses/women/w4.jpg";
import picw6 from "./../../../images/sunglasses/women/w6.jpg";
import picw7 from "./../../../images/sunglasses/women/w7.jpg";
import picw8 from "./../../../images/sunglasses/women/w8.jpg";
import picw9 from "./../../../images/sunglasses/women/w9.jpg";
import picw10 from "./../../../images/sunglasses/women/w10.jpg";

const FeaturedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="container-fluid featured-products">
      <h1 className="text-center">
        <span className="text-info">FEATURED</span> PRODUCTS
      </h1>
      <h5 className="text-center fw-bold text-muted">Men's Collection</h5>
      <Slider {...settings} className="mt-5">
        <div className="border ">
          <img className="img-fluid " src={pic1} alt="" />
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
          <h5>Vista Transparent</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic11} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.8}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 790)</span>
          </div>
          <h5>Whistler Black</h5>
          <p className="fw-bold text-muted">৳ 800.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic3} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.5}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 623)</span>
          </div>
          <h5>Vista Blackt</h5>
          <p className="fw-bold text-muted">৳ 1150.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic4} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.2}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1450)</span>
          </div>
          <h5>Evantikk Black</h5>
          <p className="fw-bold text-muted">৳ 1350.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic5} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={5}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1120)</span>
          </div>
          <h5>Explora Flip Black</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic6} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.5}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>Burrgon Red</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic7} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.8}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1523)</span>
          </div>
          <h5>Explora Flip Silver Grey</h5>
          <p className="fw-bold text-muted">৳ 1450.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic8} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1923)</span>
          </div>
          <h5>ONNIX Green</h5>
          <p className="fw-bold text-muted">৳ 950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic9} alt="" />
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
          <h5>Ironman Red</h5>
          <p className="fw-bold text-muted">৳ 1950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic10} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 4123)</span>
          </div>
          <h5>Depp Yellow</h5>
          <p className="fw-bold text-muted">৳ 2950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
      </Slider>

      {/* women collection  */}

      <h5 className="text-center fw-bold text-muted my-5">
        Women's Collection
      </h5>
      <Slider {...settings} className="mt-5">
        <div className="border ">
          <img className="img-fluid" src={picw1} alt="" />
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
          <h5>Evantikk Red</h5>
          <p className="fw-bold text-muted">৳ 1250.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw2} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={3.4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>BUFORD BLUE MIRROR</h5>
          <p className="fw-bold text-muted">৳ 1250.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw3} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.7}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1323)</span>
          </div>
          <h5>SOLAR GUN GREY</h5>
          <p className="fw-bold text-muted">৳ 1950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw4} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.5}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1223)</span>
          </div>
          <h5>Heritage Original</h5>
          <p className="fw-bold text-muted">৳ 550.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw5} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1300)</span>
          </div>
          <h5>STATESMAN BLACK</h5>
          <p className="fw-bold text-muted">৳ 1150.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw6} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.2}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 523)</span>
          </div>
          <h5>Evantikk Gold</h5>
          <p className="fw-bold text-muted">৳ 450.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw7} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.9}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>PATTINSON LEOPARD</h5>
          <p className="fw-bold text-muted">৳ 1950.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw8} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.5}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 433)</span>
          </div>
          <h5>MARIN GOLD BLACK</h5>
          <p className="fw-bold text-muted">৳ 1150.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw9} alt="" />
          <div>
            <Rating
              readonly
              className="text-danger"
              initialRating={4.1}
              emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
              fullSymbol={<FontAwesomeIcon icon={fullStar} />}
            />{" "}
            <span className="text-muted">( reviews 1123)</span>
          </div>
          <h5>BUFORD BLUE MIRROR</h5>
          <p className="fw-bold text-muted">৳ 550.00</p>
          <button className="fw-bold btn btn-dark my-2">Add to cart</button>
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw10} alt="" />
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

export default FeaturedProducts;
