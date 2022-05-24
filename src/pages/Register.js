import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Form,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Container
 } from "reactstrap";

export default function({createAccount}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate();
  return (
    <Container fluid>
      <Form onSubmit={(event) => { createAccount({firstName, lastName, email, password, address})
        event.preventDefault()
        navigate("/")}}
      >
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="FirstName">
                First Name
              </Label>
              <Input
                id="FirstName"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}                
                type="firstName"
              />
          </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="LastName">
                Last Name
              </Label>
              <Input
                id="LastName"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                type="lastName"
              />
          </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="Email">
                Email
              </Label>
              <Input
                id="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email"
                type="email"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="Password">
                Password
              </Label>
              <Input
                id="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Your password"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="Address">
            Address
          </Label>
          <Input
            id="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="1234 Main St"
            type="address"
          />
        </FormGroup>
        <Button>
          Sign in
        </Button>
      </Form>
    </Container>
    
  )
}