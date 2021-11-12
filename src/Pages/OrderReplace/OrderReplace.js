import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import Swal from "sweetalert2";
import "./OrderReplace.css";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
const OrderReplace = () => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  useEffect(() => {
    fetch("https://boiling-caverns-07920.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        const products = data?.find((pack) => pack?._id === id);
        setProducts(products);
        reset(products);
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.status = "pending";
    delete data._id;
    fetch("https://boiling-caverns-07920.herokuapp.com/allOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("order successfully taken");

          reset();
        }
      });
  };

  // user
  const { user } = useAuth();
  const { email, displayName } = user;

  return (
    <div className="container-fluid order-section">
      <div className="container py-5">
        <h1 className="text-center mb-3 fw-bold text-white">
          PLACE YOUR ORDER
        </h1>
        <div className="row mx-auto align-items-center">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={products?.img}
                    className="img-fluid h-75 m-3 p-3 rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body text-center">
                    <h5 className="card-title ">{products?.name}</h5>

                    <div
                      className="text-center
                  "
                    >
                      <Rating
                        readonly
                        className="text-warning"
                        initialRating={products?.rating}
                        emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                        fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                      />{" "}
                      <span className="text-muted">{products?.rating}</span>
                      <span className="text-muted">
                        ( {products?.ratingCount} reviews )
                      </span>
                    </div>
                    <p className="card-text m-0">
                      Model: {products?.modelNumber}
                    </p>
                    <p className="card-text m-0">Size : {products?.Size}</p>
                    <p className="card-text m-0">
                      Frame Material: {products?.frameMaterial}.
                    </p>

                    <p className="card-text m-0">Usage: {products?.desc}.</p>

                    <h6>Price: {products?.price}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 data-form">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="p-2 m-2 w-50"
                defaultValue={products?.name}
                {...register("product_name")}
              />

              <input
                className="p-2 m-2 w-50"
                defaultValue={displayName}
                {...register("Name")}
              />

              <input
                className="p-2 m-2 w-50"
                defaultValue={email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}
              <input
                className="p-2 m-2 w-50"
                placeholder="Address"
                defaultValue=""
                {...register("address")}
              />
              <input
                className="p-2 m-2 w-50"
                placeholder="City"
                defaultValue=""
                {...register("city")}
              />
              <input
                className="p-2 m-2 w-50"
                placeholder="phone number"
                defaultValue=""
                {...register("phone")}
              />

              <input
                type="submit"
                value="ORDER"
                className="fw-bold text-muted p-2 m-2 w-50"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReplace;
