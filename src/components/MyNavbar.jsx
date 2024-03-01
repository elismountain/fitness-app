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
          className="d-inline-block align-top" bootstrap class for alignment
        />
        
        <b /> Fitness App
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link style={{color : "white", fontSize : "15px", padding : "5px", textDecoration : "none"}} to="#workouts">Workouts</Link>
        <Link style={{color : "white", fontSize : "15px", padding : "5px", textDecoration : "none"}}to="#classes">Our Classes</Link>
        <Link style={{color : "white", fontSize : "15px", padding : "5px", textDecoration : "none"}}to="#contact">Contact Us</Link>
      </Nav>
    </Container>
  </Navbar>
  )
}


export default MyNavbar;