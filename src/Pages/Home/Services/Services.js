import React from "react";
import { Container } from "react-bootstrap";
import "./Service.css";
import delivery from "./../../../images/about/CashOnDelivery_Lunettes.png";
import exchange from "./../../../images/about/MoneyBackCionLunettes.png";
import customerCare from "./../../../images/about/Customer-care-icon-resized.png";
import security from "./../../../images/about/credit-card-secure-Checkout-Lunettes-300x300.png";

const Services = () => {
  return (
    <>
      <div className="bg-dark py-5 service-container rounded">
        <h3 className="text-center text-light">OUR SERVICES</h3>
      </div>
      <Container className="service-section pb-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="shadow bg-white p-3 rounded rounded-4">
              <img className="img-fluid w-25 service" src={delivery} alt="" />
              <div>
                <h6>CASH ON DELIVERY</h6>
                <h6>COD service all over Bangladesh</h6>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="shadow bg-white p-3 rounded rounded-4">
              <img className="img-fluid w-25 service" src={exchange} alt="" />
              <div>
                <h6>EASY RETURN & EXCHANGE</h6>
                <h6>Transparent return policy</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <div className="shadow bg-white p-3 rounded rounded-4">
              <img
                className="img-fluid w-25 service"
                src={customerCare}
                alt=""
              />
              <div>
                <h6>DEDICATED TO YOUR CARE</h6>
                <h6> satisfaction is our Attitude</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <div className="shadow bg-white p-3 rounded rounded-4">
              <img className="img-fluid w-25 service" src={security} alt="" />
              <div>
                <h6>SAFE & SECURE CHECKOUT</h6>
                <h6> we care, we’re security aware.</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Services;
