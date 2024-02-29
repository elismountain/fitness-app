import React from 'react'
import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import Logo from '../assets/images/Logo.png';

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark"> {/* Use 'variant="dark"' instead of 'data-bs-theme="dark"' */}
    <Container>
      <Navbar.Brand href="#home">
        <img
          src={Logo} // Use the imported logo image
          alt="Logo" // Provide an alt text for accessibility
          width="30" // Set the width of the logo
          height="30" // Set the height of the logo
          className="d-inline-block align-top" // Apply Bootstrap class for alignment
        />
        
        
        <b /> Fitness App
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Workouts</Nav.Link>
        <Nav.Link href="#pricing">Plan</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    // <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '122px', xs: '40px' }, mt:{ sm: '32px', xs:'20px'}, justifyContent: 'none'}} px="20px">
    //   <Link to="/">
    //     <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin:'0 20px'}} />
    //   </Link>
    //   <Stack
    //   direction="row"
    //   gap="40px"
    //   fontsize="24px"
    //   alignItems="flex-end"
    //   >
    //     <Link to="/" style={{ textDecoration: 'none', color: "#3A1212", borderBottom: '3px solid #FF2625'}}>Home</Link>
    //     <a href="#exercises" style={
    //       {textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
    //   </Stack>
    // </Stack>
  )
}


export default MyNavbar;