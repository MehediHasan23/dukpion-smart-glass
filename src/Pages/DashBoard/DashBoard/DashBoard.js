import React from "react";
import "./DashBoard.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import MyOrders from "./../MyOrders/MyOrders";
import Payment from "./../Payment/Payment";
import Reviews from "./../Reviews/Reviews";
import ManageOrder from "./../ManageOrder/ManageOrder";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

const DashBoard = () => {
  let { path, url } = useRouteMatch();
  const { user, admin } = useAuth();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <h5>User Dashboard</h5>

            <Link to={`${url}`}>
              <li> Payment</li>
            </Link>

            <Link to={`${url}/myOrder`}>
              <li>My Order</li>
            </Link>

            <Link to={`${url}/review`}>
              <li>Review</li>
            </Link>

            <div className="admin-menu">
              <h5>Admin Dashboard</h5>
              <Link to={`${url}/manageOrders`}>
                <li>Manage Orders</li>
              </Link>

              <Link to={`${url}/manageProduct`}>
                <li>Manage Product</li>
              </Link>
              <Link to={`${url}/addProduct`}>
                <li>Add Product</li>
              </Link>

              <Link to={`${url}/makeAdmin`}>
                <li>Make Admin</li>
              </Link>
            </div>
          </div>

          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <Payment />
              </Route>
              <Route path={`${path}/myOrder`}>
                <MyOrders />
              </Route>
              <Route path={`${path}/review`}>
                <Reviews />
              </Route>

              <Route path={`${path}/manageOrders`}>
                <ManageOrder />
              </Route>
              <Route path={`${path}/manageProduct`}>
                <ManageProduct />
              </Route>
              <Route path={`${path}/addProduct`}>
                <AddProduct />
              </Route>
              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
