import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../images/logo.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSingOut = () => {
    signOut(auth);
  };
  return (
    <Navbar sticky="top" className="my-2 " bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="logo-img" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/manageitem">
                  Manage Item
                </Nav.Link>
                <Nav.Link as={Link} to="/additem">
                  Add Item
                </Nav.Link>
                <Nav.Link as={Link} to="/myitem">
                  My Item
                </Nav.Link>
              </>
            ) : (
              <></>
            )}

            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>

            {user ? (
              <button
                onClick={handleSingOut}
                className="btn btn-link  text-decoration-none text-danger"
              >
                Sign Out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
