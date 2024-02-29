import React from 'react'
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import Logo from '../assets/images/Logo.png';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={Logo} 
          alt="Logo" 
          width="30" 
          height="30" 
          className="d-inline-block align-top" Bootstrap class for alignment
        />
        
        <b /> Fitness App
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#workouts">Workouts</Nav.Link>
        <Nav.Link href="#classes">Our Classes</Nav.Link>
        <Nav.Link href="#contact">Contact Us</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}


export default MyNavbar;