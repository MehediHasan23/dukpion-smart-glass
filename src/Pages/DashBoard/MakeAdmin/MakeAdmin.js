import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import admin from "./../../../images/admin.png";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [successful, setSuccessFul] = useState(false);
  const emailField = (e) => {
    setEmail(e.target.value);
  };
  const handelAdmin = (e) => {
    const user = { email };
    fetch("https://boiling-caverns-07920.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          Swal.fire("admin made successfully");
          setSuccessFul(true);
        }
      });
    e.preventDefault();
  };
  return (
    <Container>
      <div className="row align-items-center">
        <div className="col-sm-12 col-lg-6">
          <img  className="img-fluid w-75 " src={admin} alt="" />
        </div>
        <div className="text-center col-sm-12 col-lg-6">
          <h1 className="fw-bold">Feeling Alone?</h1>
          <h3>Want To Make An Admin</h3>
          <div className="mt-5">
            <form onSubmit={handelAdmin}>
              <input
                onBlur={emailField}
                type="email"
                name=""
                id=""
                placeholder="enter email"
                className="form-control w-50 mx-auto m-2"
                required
              />
              <input
                className="btn btn-primary w-50"
                type="submit"
                value="send"
              />
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MakeAdmin;
