/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addUser } from "../slices/usersSlice";

const UserForm = () => {
  const dispatch= useDispatch()
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setName( e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail( e.target.value);
  };

  const handleGenChange = (e) => {
    e.preventDefault();
    setGen( e.target.value);
  };

  const handlePhoneChange = (e) => {
    e.preventDefault();
    setPhone( e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      name: name,
      email: email,
      gen: gen,
      phone: phone,
    };
    dispatch(addUser(newUser));

    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={name}
          placeholder="Please enter Full Name"
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicGen">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            name="gen"
            value={gen}
            placeholder="Enter phone number"
            onChange={handleGenChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            value={phone}
            placeholder="Enter phone number"
            onChange={handlePhoneChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UserForm;
