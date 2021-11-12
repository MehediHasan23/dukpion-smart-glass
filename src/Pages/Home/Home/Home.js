import React from "react";
import Banner from "../../Shared/Banner/Banner";
import Products from "../Products/Products";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Review/>
    </div>
  );
};

export default Home;

/* const glasses = [
  {
    name: "Black Sparkle Eyeglass",
    price: "720",
    img: "https://img-for-json.netlify.app/images/1.png",
    rating: "4.5",
    ratingCount: 509,
    category: "Rectangle",
  },
  {
    name: "Full Transparent Eyeglass",
    price: "1800",
    img: "https://img-for-json.netlify.app/images/2.jpg",
    rating: "4.3",
    ratingCount: 280,
    category: "Rectangle",
  },
  {
    name: "Semi Oval Ass Men Frame",
    price: "3599",
    img: "https://img-for-json.netlify.app/images/3.jpg",
    rating: "4.5",
    ratingCount: 1033,
    category: "Oval",
  },
  {
    name: "All Time Hit Fashion Eyeware",
    price: "2550",
    img: "https://img-for-json.netlify.app/images/4.png",
    rating: "3.5",
    ratingCount: 1209,
    category: "Oval",
  },
  {
    name: "Cat Eye Eyeglass For Lady",
    price: "1656",
    img: "https://img-for-json.netlify.app/images/5.png",
    rating: "4.5",
    ratingCount: 3100,
    category: "CATEYE",
  },
  {
    name: "Transparent Women Eyeglass ",
    price: "834",
    img: "https://img-for-json.netlify.app/images/6.png",
    rating: "5",
    ratingCount: 970,
    category: "CATEYE",
  },
  {
    name: "FASHION Sunglass ",
    price: "634",
    img: "https://img-for-json.netlify.app/images/7.png",
    rating: "3.5",
    ratingCount: 780,
    category: "GRADIENT",
  },
  {
    name: "Stylish Yellow Sunglass ",
    price: "740",
    img: "https://img-for-json.netlify.app/images/8.png",
    rating: "4.5",
    ratingCount: 990,
    category: "POLARIZED",
  },
  {
    name: "Coolest SunGlasses ",
    price: "637",
    img: "https://img-for-json.netlify.app/images/9.png",
    rating: "5",
    ratingCount: 1350,
    category: "POLARIZED",
  },
  {
    name: "Pilot Shade Men's Sunglass ",
    price: "1737",
    img: "https://img-for-json.netlify.app/images/10.png",
    rating: "4.2",
    ratingCount: 1580,
    category: "PILOT",
  },
  {
    name: "Pilot Shade Men's Sunglass ",
    price: "1737",
    img: "https://img-for-json.netlify.app/images/11.png",
    rating: "4.2",
    ratingCount: 770,
    category: "PILOT",
  },
  {
    name: "Premium Pilot Sunglass ",
    price: "2937",
    img: "https://img-for-json.netlify.app/images/12.png",
    rating: "4.8",
    ratingCount: 990,
    category: "PILOT",
  },
  {
    name: "Retro Polarized Sunglasses ",
    price: "2550",
    img: "https://img-for-json.netlify.app/images/13.png",
    rating: "4.5",
    ratingCount: 1190,
    category: "PREMIUM",
  },
  {
    name: "Clubmaster Lady Sunglass ",
    price: "2937",
    img: "https://img-for-json.netlify.app/images/14.png",
    rating: "5",
    ratingCount: 506,
    category: "CLUBMASTER",
  },
]; */
