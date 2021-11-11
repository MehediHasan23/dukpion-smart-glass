import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
// import logo from "./../../../images/logo.png";
import logo2 from "./../../../images/logo2.png";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="img-fluid" src={logo2} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link className="fw-bold text-muted" as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link className="fw-bold text-muted" as={Link} to="/explorer">
              EXPLORE
            </Nav.Link>
            {user?.email ? (
              <>
                <Nav.Link
                  className="fw-bold text-muted"
                  as={Link}
                  to="/dashboard"
                >
                  DASHBOARD
                </Nav.Link>
                <Nav.Link
                  className="fw-bold text-muted"
                  as={Link}
                  to="/registration"
                >
                  <button
                    onClick={logOut}
                    className="btn btn-outline-secondary border-0 fw-bold"
                  >
                    LOGOUT
                  </button>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link className="fw-bold text-muted" as={Link} to="/login">
                LOGIN
              </Nav.Link>
            )}
            <NavDropdown id="basic-nav-dropdown mr-5">
              <div className="text-center">
                <p>{user?.displayName}</p>
                <small className="m-0 mb-2">{user?.email}</small>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
