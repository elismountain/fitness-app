import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/icons/favicon.ico";
import "../styles/Navbar.css";
import { useLocation } from "react-router-dom";

const MyNavbar = () => {

  const location = useLocation();
  const isHomePage = location.pathname =='/';

  const [displayNavbarLinks, setDisplayNavbarLinks] = useState("inline");

  useEffect(() => {
    if(isHomePage) {
      setDisplayNavbarLinks('none');
    } else {
      setDisplayNavbarLinks('inline');
    }
  }, [isHomePage]);

  return (
    <Navbar style={{ backgroundColor: 'rgba(0, 0, 0, 0.089)', marginBottom : "40px" }} variant="dark" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <img
              src={Logo} 
              alt="Logo" 
              width="120" 
              height="120" 
              className="d-inline-block align-top" 
            />
          </Navbar.Brand>
        </Link>        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-content">
            <div className="navbar-title">
            <Link
              style={{
                color: "white",
                fontSize: "1.6rem",
                textDecoration: "none",
              }}
              to="/"
            >
              HappyFiit
            </Link>
            </div>
            <div className="navbar-links">
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
              Team
            </Link>
/Link>

            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar