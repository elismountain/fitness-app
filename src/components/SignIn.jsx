import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SignIn = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [goal, setGoal] = useState('');
  const [nameError, setNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [weightError, setWeightError] = useState('');
  const [heightError, setHeightError] = useState('');
  const [goalError, setGoalError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setNameError('Name is required');
      return;
    } else {
      setNameError('');
    }

    if (!age.trim()) {
      setAgeError('Age is required');
      return;
    } else {
      setAgeError('');
    }

    if (!weight.trim()) {
      setWeightError('Weight is required');
      return;
    } else {
      setWeightError('');
    }

    if (!height.trim()) {
      setHeightError('Height is required');
      return;
    } else {
      setHeightError('');
    }

    if (!goal.trim()) {
      setGoalError('Goal is required');
      return;
    } else {
      setGoalError('');
    }

    onSubmit({ name, age, weight, height, goal });
    setName('');
    setAge('');
    setWeight('');
    setHeight('');
    setGoal('');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                isInvalid={!!nameError}
              />
              <Form.Control.Feedback type="invalid">{nameError}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label>Age:</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                isInvalid={!!ageError}
              />
              <Form.Control.Feedback type="invalid">{ageError}</Form.Control.Feedback>
            </Form.Group>
            {/* Repeat Form.Group for weight, height, goal similarly */}
            <Button variant="purple" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
