import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
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
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="container-fluid">
      <h1 className="text-center">FEATURED PRODUCTS</h1>
      <Slider {...settings} className="mt-5">
        <div className="border ">
          <img className="img-fluid" src={pic1} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic11} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic3} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic4} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic5} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic6} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic7} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic8} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic9} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={pic10} alt="" />
        </div>
      </Slider>
      <h1 className="text-center my-5">Women Collection</h1>
      <Slider {...settings} className="mt-5">
        <div className="border ">
          <img className="img-fluid" src={picw1} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw7} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw3} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw4} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw5} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw6} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw7} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw8} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw9} alt="" />
        </div>
        <div className="border ">
          <img className="img-fluid" src={picw10} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
