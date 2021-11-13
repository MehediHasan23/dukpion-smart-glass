import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faSmileBeam } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faPlus,
  faShoppingCart,
  faStore,
  faTasks,
  faUserCog,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./DashBoard.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from "./../MyOrders/MyOrders";
import Payment from "./../Payment/Payment";
import Reviews from "./../Reviews/Reviews";
import ManageOrder from "./../ManageOrder/ManageOrder";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import useAuth from "../../../Hooks/useAuth";
import AdminRoute from "./../../Login/AdminRoute/AdminRoute";

const DashBoard = () => {
  let { path, url } = useRouteMatch();
  const { user, admin } = useAuth();
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          style={{ minHeight: "80vh" }}
          className="col-sm-12 col-md-6 col-lg-3 bg-dark text-white pt-5"
        >
          {/* accordion */}
          <div class="accordion" id="accordionExample">
            <Link to="/">
              <FontAwesomeIcon
                className="fs-1 m-0 p-0 text-white mx-2"
                icon={faHome}
              ></FontAwesomeIcon>
            </Link>
            <Link to="/products">
              <FontAwesomeIcon
                className="fs-1 m-0 p-0 text-white mx-2"
                icon={faStore}
              ></FontAwesomeIcon>
            </Link>
            {admin && (
              <div class="accordion-item mt-3">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <FontAwesomeIcon icon={faUserLock} className="me-2" /> Admin
                    Panel
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <Link
                      className="text-decoration-none"
                      to={`${url}/manageAllOrders`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faTasks} /> Manage Orders
                      </li>
                    </Link>

                    <Link
                      className="text-decoration-none"
                      to={`${url}/addProduct`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faPlus} /> Add Product
                      </li>
                    </Link>

                    <Link
                      className="text-decoration-none"
                      to={`${url}/makeAdmin`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faUserLock} /> Make Admin
                      </li>
                    </Link>

                    <Link
                      className="text-decoration-none"
                      to={`${url}/checkReviews`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faSmileBeam} /> Check All Reviews
                      </li>
                    </Link>

                    <Link
                      className="text-decoration-none"
                      to={`${url}/manageAllProducts`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faTasks} /> Manage All Products
                      </li>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <FontAwesomeIcon icon={faUserCog} className="me-2" /> User
                  Panel
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <Link className="text-decoration-none" to={`${url}`}>
                    <li
                      className="text-start fs-4"
                      style={{ listStyle: "none" }}
                    >
                      {" "}
                      <FontAwesomeIcon
                        className="fs-4"
                        icon={faShoppingCart}
                      ></FontAwesomeIcon>{" "}
                      My Order
                    </li>
                  </Link>

                  <Link className="text-decoration-none" to={`${url}/payment`}>
                    <li
                      className="text-start fs-4"
                      style={{ listStyle: "none" }}
                    >
                      {" "}
                      <FontAwesomeIcon
                        className="fs-4"
                        icon={faPaypal}
                      ></FontAwesomeIcon>{" "}
                      Payment{" "}
                    </li>
                  </Link>

                  <Link className="text-decoration-none" to={`${url}/review`}>
                    <li
                      className="text-start fs-4"
                      style={{ listStyle: "none" }}
                    >
                      <FontAwesomeIcon
                        className="fs-4"
                        icon={faSmileBeam}
                      ></FontAwesomeIcon>
                      Post A Review
                    </li>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* accordion */}
        </div>
        <div
          style={{ minHeight: "80vh" }}
          className="bg-order-list col-sm-12 col-md-6 col-lg-9 bg-secondary pt-5 text-white "
        >
          <Switch>
            <Route exact path={path}>
              <MyOrders />
            </Route>
            <Route path={`${path}/payment`}>
              <Payment />
            </Route>
            <Route path={`${path}/review`}>
              <Reviews />
            </Route>

            {/* admin section */}
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageOrder />
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct />
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin />
            </AdminRoute>
            {/* <AdminRoute path={`${path}/checkReviews`}>
              <CheckReviews />
            </AdminRoute> */}
            <AdminRoute path={`${path}/manageAllProducts`}>
              <ManageProduct />
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
