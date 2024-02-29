import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
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