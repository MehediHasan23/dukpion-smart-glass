import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import footer from "./../../../images/dukpion-payment-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slide from "react-reveal/Slide";

import {
  faChevronRight,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleRight,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer-container p-5">
      <Container>
        <div className="row">
          <Slide left>
            <div className="col-sm-12 col-md-6 col-lg-3 text-start mx-auto">
              <div>
                <h6 className="fw-bold">Newsletter Subscription</h6>
                <p className="text-muted my-4">
                  Subscribe to our newsletter and get update offers
                </p>
              </div>
              <div>
                <input type="text" class="form-control" />
                <button className="btn btn-primary mt-2 mb-4">
                  subscribe now
                </button>
              </div>
              <div>
                <img className="img-fluid" src={footer} alt="" />
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="col-sm-12 col-md-6 col-lg-3 text-start mx-auto">
              <h6 className="fw-bold">Popular Categories</h6>
              <div className="text-muted mt-4">
                <p className="mt-3">
                  <FontAwesomeIcon icon={faChevronRight} /> PREMIUM SUNGLASSES
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> PREMIUM EYEGLASSES
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> FREE FRAME
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> FREE BLUE CUT LENS
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> TK.599 POWER GLASSES
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> TWO EYEGLASSES
                  TK.999
                </p>
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="col-sm-12 col-md-6 col-lg-2 text-start mx-auto">
              <h6 className="fw-bold">Information</h6>
              <div className="text-muted mt-4">
                <p className="mt-3">
                  <FontAwesomeIcon icon={faChevronRight} /> About Us
                </p>
                <p className="mt-3">
                  <FontAwesomeIcon icon={faChevronRight} /> Contact Us
                </p>

                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> Terms & Conditions
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> Returns & Exchanges
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> Shipping & Delivery
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> Privacy Policy
                </p>
              </div>
            </div>
          </Slide>
          <Slide left>
            <div className="col-sm-12 col-md-6 col-lg-2 text-start mx-auto">
              <h6 className="fw-bold">Quick Links</h6>
              <div className="text-muted mt-4">
                <p className="mt-3">
                  <FontAwesomeIcon icon={faChevronRight} /> Store Locator
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> My Account
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> Orders Tracking
                </p>
                <p className="my-3">
                  <FontAwesomeIcon icon={faChevronRight} /> FAQs
                </p>
              </div>
            </div>
          </Slide>
          <Slide>
            <div className="col-sm-12 col-md-6 col-lg-2 text-start mx-auto">
              <h6 className="fw-bold">Contacts</h6>
              <div className="text-muted mt-4">
                <p className="mt-3">
                  <FontAwesomeIcon icon={faMapMarker} /> 44/8,1st Floor,West
                  Panthopath,North Dhanmondhi,Dhaka-1205
                </p>

                <p className="mt-3">
                  <FontAwesomeIcon icon={faEnvelope} /> info@dukpion.com
                </p>

                <p className="mt-3">
                  <FontAwesomeIcon icon={faPhone} /> +88 01872777452
                </p>
                <div className="icons fs-3">
                  <FontAwesomeIcon
                    className="mx-1 text-success"
                    icon={faFacebookSquare}
                  />{" "}
                  <FontAwesomeIcon
                    className="mx-1 text-danger"
                    icon={faInstagramSquare}
                  />{" "}
                  <FontAwesomeIcon
                    className="mx-1 text-info"
                    icon={faTwitterSquare}
                  />{" "}
                  <FontAwesomeIcon
                    className="mx-1 text-danger"
                    icon={faYoutube}
                  />{" "}
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
