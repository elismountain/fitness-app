import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import Logo from '../assets/images/Logo.png';
import '../styles/Navbar.css';

const MyNavbar = () => {
  return (
    <Navbar bg="transparent" variant="dark">
    <Container>
      <Navbar.Brand to="#home">
        <img
          src={Logo} 
          alt="Logo" 
          width="120" 
          height="120" 
          className="d-inline-block align-top" 
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link style={{color : "white", fontSize : "18px", padding : "5px", paddingLeft : "20px", textDecoration : "none"}} to="/">Fitness App</Link> 
        <Link style={{color : "white", fontSize : "18px", padding : "5px", textDecoration : "none"}} to="/WorkoutPlan">Workouts</Link>
        <Link style={{color : "white", fontSize : "18px", padding : "5px", textDecoration : "none"}}to="/ProgressTracker">Progress Tracker</Link>
        <Link style={{color : "white", fontSize : "18px", padding : "5px", textDecoration : "none"}}to="/contact">Contact Us</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}


export default MyNavbar;