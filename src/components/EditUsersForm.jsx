/* eslint-disable no-unused-vars */
import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editUser } from "../slices/usersSlice";

const EditUsersForm = ({ editUserDetail, closeModal }) => {
     const dispatch = useDispatch();


    const [editedUser, setEditedUser] = useState({
      id: editUserDetail.id,
      name: editUserDetail.name,
      email: editUserDetail.email,
      phone: editUserDetail.phone,
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // editUser(editedUserid, editedUser);
      dispatch(editUser(editedUser));
      closeModal();
    };
  
    const handleChange = (e) => {
      e.preventDefault();
      setEditedUser({
        ...editedUser,
        [e.target.name]: e.target.value,
      });
    };
  

  return (
    <>
     <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={editedUser.name}
            placeholder="Please enter Full Name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            value={editedUser.email}
            placeholder="Enter email"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Well never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            value={editedUser.phone}
            placeholder="Enter phone number"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
  </>
  )
}


 


export default EditUsersForm