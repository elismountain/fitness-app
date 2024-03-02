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

    if (!age.trim() || parseInt(age) < 0) {
      setAgeError('Age is required');
      return;
    } else {
      setAgeError('');
    }

    if (!weight.trim() || parseInt(weight) < 0) {
      setWeightError('Weight is required');
      return;
    } else {
      setWeightError('');
    }

    if (!height.trim() || parseInt(height) < 0) {
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
    <Container className="d-flex justify-content-center align-items-center vh-75">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit} style={{ minWidth: '700px' }}>
            <Form.Group controlId="name">
              <Form.Label style={{ color:  'white'}}>Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                isInvalid={!!nameError}
              />
              <Form.Control.Feedback style={{color: 'white',fontSize : "20px",padding : "10px", fontWeight: 'bold'}} type="invalid">{nameError}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="age">
              <Form.Label style={{ color:  'white'}}>Age:</Form.Label>
              <Form.Control
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                isInvalid={!!ageError}
                min="10"
              />
              <Form.Control.Feedback style={{color: 'white', fontSize : "20px",padding : "10px", fontWeight: 'bold'}} type="invalid">{ageError}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="weight">
              <Form.Label style={{ color:  'white'}}>Weight (in kg) : </Form.Label>
              <Form.Control
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                isInvalid={!!weightError}
                min="10"
              />
              <Form.Control.Feedback style={{fontSize : "20px",padding : "10px", color: 'white', fontWeight: 'bold'}} type="invalid">{weightError}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="height">
              <Form.Label style={{ color:  'white'}}>Height (in meter) :</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height in metres. Eg 1.75"
                isInvalid={!!heightError}
                // min="1.10"
                // max="2.30"
              />
                 
              <Form.Control.Feedback style={{fontSize : "20px",padding : "10px", color: 'white', fontWeight: 'bold'}} type="invalid">{heightError}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="goal">
              <Form.Label style={{ color:  'white'}}>Goal:</Form.Label>
              <Form.Control
                as="select"
                name={goal}
                onChange={(e) => setGoal(e.target.value)}
                isInvalid={!!goalError}
              >
                <option value="">Select goal</option>
                <option value="Back">Back</option>
                <option value="Cardio">Cardio</option>
                <option value="Chest">Chest</option>
                <option value="Lower arms">Lower Arms</option>
                <option value="Lower legs">Lower Legs</option>
                <option value="Neck">Neck</option>
                <option value="Shoulder">Shoulder</option>
                <option value="Upper arms">Upper Arms</option>
                <option value="Upper legs">Upper Legs</option>
                <option value="Waist">Waist</option>
              </Form.Control>
              <Form.Control.Feedback style={{fontSize : "20px",padding : "10px", color: 'white', fontWeight: 'bold'}} type="invalid">{goalError}</Form.Control.Feedback>
            </Form.Group>
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button
    style={{
      backgroundColor: 'orange',
      border: 'orange', 
      borderRadius: '10px',
      fontSize: '1.5rem',
      padding: '10px 20px',
      fontWeight: 'bold',
      marginTop: '30px',
      marginBottom: '290px'
    }}
    size="lg"
    type="submit"
  >
    I am ready!
  </Button>
</div>


          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;