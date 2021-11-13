import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faSmileBeam, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faHome,
  faHouseUser,
  faPlus,
  faShoppingCart,
  faSignOutAlt,
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
  const { admin, logOut } = useAuth();
  return (
    <div className="container-fluid dashboard-container">
      <div className="row ">
        <div
          style={{ minHeight: "80vh", marginTop: "80px" }}
          className="col-sm-12 col-md-6 col-lg-2  text-white pt-5 "
        >
          {/* accordion */}
          <div className="accordion " id="accordionExample">
            {admin && (
              <div className="accordion-item mt-3">
                <h2 className="accordion-header " id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    text-dark
                    fw-bold
                    border-0
                    style={{ background: "#F97F51" }}
                  >
                    <FontAwesomeIcon
                      icon={faUserLock}
                      className="me-2 text-light"
                    />{" "}
                    <span className="text-light fw-bold">Admin Panel</span>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <Link
                      className="text-decoration-none text-dark fw-bold"
                      to={`${url}/manageAllOrders`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faTasks} /> Manage Orders
                      </li>
                    </Link>
                    <Link
                      className="text-decoration-none text-dark fw-bold"
                      to={`${url}/manageAllProducts`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faTasks} /> Manage Products
                      </li>
                    </Link>
                    <Link
                      className="text-decoration-none text-dark fw-bold"
                      to={`${url}/addProduct`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faPlus} /> Add Product
                      </li>
                    </Link>

                    <Link
                      className="text-decoration-none text-dark fw-bold"
                      to={`${url}/makeAdmin`}
                    >
                      <li style={{ listStyle: "none" }} className="text-start">
                        {" "}
                        <FontAwesomeIcon icon={faUserLock} /> Make Admin
                      </li>
                    </Link>
                  </div>
                </div>
              </div>
            )}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                  text-dark
                  fw-bold
                  style={{ background: "#F97F51" }}
                >
                  <FontAwesomeIcon
                    icon={faUserCog}
                    className="me-2 
                    fw-bold
                    text-light
                  "
                  />{" "}
                  <span
                    className="text-light
                  fw-bold"
                  >
                    User Panel
                  </span>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <Link
                    className="text-decoration-none text-dark fw-bold"
                    to={`${url}`}
                  >
                    <li style={{ listStyle: "none" }} className="text-start">
                      {" "}
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                      ></FontAwesomeIcon>{" "}
                      My Order
                    </li>
                  </Link>

                  <Link
                    className="text-decoration-none text-dark fw-bold"
                    to={`${url}/payment`}
                  >
                    <li style={{ listStyle: "none" }} className="text-start">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCreditCard}
                      ></FontAwesomeIcon>{" "}
                      Payment{" "}
                    </li>
                  </Link>

                  <Link
                    className="text-decoration-none text-dark fw-bold"
                    to={`${url}/review`}
                  >
                    <li className="text-start " style={{ listStyle: "none" }}>
                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      Review
                    </li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="uses-btn rounded" style={{ background: "#F97F51" }}>
              <button
                onClick={logOut}
                className="text-decoration-none text-light fw-bold text-dark  btn "
              >
                <FontAwesomeIcon
                  className="fs-4 text-light"
                  icon={faSignOutAlt}
                ></FontAwesomeIcon>
              </button>
              <Link
                to="/"
                className="text-decoration-none text-light text-dark fw-bold btn"
              >
                <FontAwesomeIcon
                  className="fs-4 text-light"
                  icon={faHouseUser}
                ></FontAwesomeIcon>
              </Link>
            </div>
          </div>
          {/* accordion */}
        </div>
        <div
          style={{ minHeight: "80vh" }}
          className="bg-order-list col-sm-12 col-md-6 col-lg-10 pt-5 text-white "
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
