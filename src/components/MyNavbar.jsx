import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
// import Logo from "../assets/images/Logo-2.png";
import Logo from "../assets/icons/favicon.ico";
import "../styles/Navbar.css";
import { auto } from "@popperjs/core";

const MyNavbar = () => {
  return (
    <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.089)', marginBottom : "40px" }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand to="#home">
        <img
          src={Logo} 
          alt="Logo" 
          width="120" 
          height="120" 
          className="d-inline-block align-top" bootstrap class for alignment
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* The toggle button */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Collapsible content */}
          <Nav className="me-auto">
            <Link
              style={{
                color: "white",
                fontSize: "1.6rem",
                marginRight: "400px",
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
              to="/workout-plan"
            >
              Dashboard
            </Link>
            <Link
              style={{
                color: "white",
                fontSize: "1.3rem",
                padding: "5px",
                marginRight: "40px",
                textDecoration: "none",
              }}
              to="/ExerciseDetail"
            >
              Exercises
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