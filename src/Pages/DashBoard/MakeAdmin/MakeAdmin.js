import React, { useState } from "react";
import { Container } from "react-bootstrap";

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const [successful, setSuccessFul] = useState(false)
  const emailField = e => {
    setEmail(e.target.value);
  }
  const handelAdmin = e => {
    const user = { email }
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.preventDefault()
  }
  return (
    <Container>
      <div className="text-center mt-5">
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
    </Container>
  );
};

export default MakeAdmin;
