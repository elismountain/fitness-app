import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" style={{color : "white", fontSize : "15px", padding : "5px", paddingLeft : "20px", textDecoration : "none"}}>
      <Container>
        <Row>
          <Col>
            <p>&copy; 2024 Wonder Woman Workout Project</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;