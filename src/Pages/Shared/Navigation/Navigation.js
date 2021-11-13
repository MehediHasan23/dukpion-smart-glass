import Button from "@restart/ui/esm/Button";
import React from "react";
import Fade from "react-reveal/Fade";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
// import logo from "./../../../images/logo.png";
import logo2 from "./../../../images/logo2.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Fade top>
            <Navbar.Brand as={Link} to="/">
              <img className="img-fluid" src={logo2} alt="" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-5 ms-auto  align-items-center">
                <Nav.Link
                  className="fw-bold text-muted fw-bold fs-6"
                  as={Link}
                  to="/home"
                >
                  HOME
                </Nav.Link>
                <Nav.Link
                  className="fw-bold text-muted fw-bold fs-6"
                  as={Link}
                  to="/explorer"
                >
                  EXPLORER
                </Nav.Link>
                <Nav.Link
                  className="fw-bold text-muted fw-bold fs-6"
                  as={Link}
                  to="/collection"
                >
                  COLLECTIONS
                </Nav.Link>

                {!user?.email ? (
                  <>
                    <Nav.Link
                      className="fw-bold text-muted fw-bold fs-6"
                      as={Link}
                      to="/login"
                    >
                      SIGN IN
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link
                      className="fw-bold text-muted fw-bold fs-6"
                      as={Link}
                      to="/dashboard"
                    >
                      DASHBOARD
                    </Nav.Link>
                    <button
                      className="border-0 fw-bold text-muted"
                      onClick={logOut}
                    >
                      LOGOUT
                    </button>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Fade>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
<Nav.Link className="fw-bold text-muted" as={Link} to="/dashboard">
  DASHBOARD
</Nav.Link>;

{
  /* <Nav.Link className="fw-bold text-muted" as={Link} to="/registration">
  <button
    onClick={logOut}
    className="btn btn-outline-secondary border-0 fw-bold"
  >
    LOGOUT
  </button>
</Nav.Link>; */
}
