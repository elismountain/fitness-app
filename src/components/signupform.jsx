import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

function SignUpForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Age</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Age"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Height</Form.Label>
          <InputGroup hasValidation>
           
            <Form.Control
              type="text"
              placeholder="Height"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input Height.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder="Weight" required />
          <Form.Control.Feedback type="invalid">
            Please input Weight.
          </Form.Control.Feedback>
        </Form.Group>
{/* dropdown for goals */}
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Goals
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Back</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cardio</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Chest</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Lower Arms</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Lower Legs</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Neck</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Shoulder</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Upper Arms</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Upper Legs</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Waist</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default SignUpForm;