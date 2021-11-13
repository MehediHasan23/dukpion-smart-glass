import React from "react";
import Banner from "../../Shared/Banner/Banner";
import AboutCollection from "../AboutCollection/AboutCollection";
import KeepTouch from "../KeepTouch/KeepTouch";
import Products from "../Products/Products";
import Review from "../Review/Review";
import Services from "../Services/Services";
import FeaturedProducts from './../FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <div >
      {/* <Banner /> */}
      <FeaturedProducts />

      {/* <Products /> */}
      {/* <Review /> */}
      {/* <AboutCollection /> */}
      {/* <KeepTouch/> */}
      <Services />
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
    variant: "Rectangle",
    modelNumber: "DKE04558",
    frameMaterial: "High quality Metal & Fiber",
    Size: "53-18-145 mm",
    FrameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Full Transparent Eyeglass",
    price: "1800",
    img: "https://img-for-json.netlify.app/images/2.jpg",
    rating: "4.3",
    ratingCount: 280,
    variant: "Rectangle",
    modelNumber: "DKE04466",
    frameMaterial: "High quality Metal & Fiber",
    Size: "45-22-142 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Semi Oval Ass Men Frame",
    price: "3599",
    img: "https://img-for-json.netlify.app/images/3.jpg",
    rating: "4.5",
    ratingCount: 1033,
    variant: "Oval",
    modelNumber: "DKE04453",
    frameMaterial: "High quality Metal & Fiber",
    Size: "52-16-140 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "All Time Hit Fashion Eyeware",
    price: "2550",
    img: "https://img-for-json.netlify.app/images/4.png",
    rating: "3.5",
    ratingCount: 1209,
    variant: "Oval",
    modelNumber: "DKS04653",
    frameMaterial: "High quality Metal & Fiber",
    Size: "54-19-137 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Cat Eyeglass For Lady",
    price: "1656",
    img: "https://img-for-json.netlify.app/images/5.png",
    rating: "4.5",
    ratingCount: 3100,
    variant: "CATEYE",
    modelNumber: "DKE04048",
    frameMaterial: "High quality Metal & Fiber",
    Size: "53-17-138 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Transparent Women Eyeglass ",
    price: "834",
    img: "https://img-for-json.netlify.app/images/6.png",
    rating: "5",
    ratingCount: 970,
    variant: "CATEYE",
    modelNumber: "DKE02808",
    frameMaterial: "High quality Metal & Fiber",
    Size: "54-19-137 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "FASHION Sunglass ",
    price: "634",
    img: "https://img-for-json.netlify.app/images/7.png",
    rating: "3.5",
    ratingCount: 780,
    variant: "GRADIENT",
    modelNumber: "DKE04686",
    frameMaterial: "High quality Metal & Fiber",
    Size: "58-18-148 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Stylish Yellow Sunglass ",
    price: "740",
    img: "https://img-for-json.netlify.app/images/8.png",
    rating: "4.5",
    ratingCount: 990,
    variant: "POLARIZED",
    modelNumber: "DKE02226",
    frameMaterial: "High quality Metal & Fiber",
    Size: "45-16-130 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Coolest SunGlasses ",
    price: "637",
    img: "https://img-for-json.netlify.app/images/9.png",
    rating: "5",
    ratingCount: 1350,
    variant: "POLARIZED",
    modelNumber: "DKS04487",
    frameMaterial: "High quality Metal & Fiber",
    Size: "43-18-120 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Pilot Shade Men's Sunglass ",
    price: "1737",
    img: "https://img-for-json.netlify.app/images/10.png",
    rating: "4.2",
    ratingCount: 1580,
    variant: "PILOT",
    modelNumber: "DK02864",
    frameMaterial: "High quality Metal & Fiber",
    Size: "59-13-140 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Pilot Shade Men's Sunglass ",
    price: "1737",
    img: "https://img-for-json.netlify.app/images/11.png",
    rating: "4.2",
    ratingCount: 770,
    variant: "PILOT",
    modelNumber: "DK00210",
    frameMaterial: "High quality Metal & Fiber",
    Size: "62-10-135 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Premium Pilot Sunglass ",
    price: "2937",
    img: "https://img-for-json.netlify.app/images/12.png",
    rating: "4.8",
    ratingCount: 990,
    variant: "PILOT",
    modelNumber: "DKE02243",
    frameMaterial: "High quality Metal & Fiber",
    Size: "47-16-128 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Retro Polarized Sunglasses ",
    price: "2550",
    img: "https://img-for-json.netlify.app/images/13.png",
    rating: "4.5",
    ratingCount: 1190,
    variant: "PREMIUM",
    modelNumber: "DKS04693",
    frameMaterial: "High quality Metal & Fiber",
    Size: "60-15-146 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
  {
    name: "Clubmaster Lady Sunglass ",
    price: "2937",
    img: "https://img-for-json.netlify.app/images/14.png",
    rating: "5",
    ratingCount: 506,
    variant: "CLUBMASTER",
    modelNumber: "DKE03279",
    frameMaterial: "High quality Metal & Fiber",
    Size: "52-18-140 mm",
    frameAttribution: "High Quality, Flexible & Durable",
    desc: "Eyeglasses Frame or Prescription Optical Frame",
    lensFunction:
      "UV400, Anti Reflection,Anti Blue Ray & more functions depending on Lens types",
  },
];
 */