import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/images/Logo.png";
import "../styles/Navbar.css";
import { auto } from "@popperjs/core";

const MyNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.089)' }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand to="#home">
          {/* Your Logo here */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* The toggle button */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Collapsible content */}
          <Nav className="me-auto">
            <Link
              style={{
                color: "white",
                fontSize: "1.6rem",
                marginRight: "600px",
                textDecoration: "none",
              }}
              to="/"
            >
              HappyFiit
            </Link>
            <Link
              style={{
                color: "white",
                fontSize: "1.3rem",
                padding: "5px",
                marginRight: "40px",
                textDecoration: "none",
              }}
              to="/ProgressTracker"
            >
              Progress Tracker
            </Link>
            <Link
              style={{
                color: "white",
                fontSize: "1.3rem",
                padding: "5px",
                textDecoration: "none",
              }}
              to="/contact"
            >
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar