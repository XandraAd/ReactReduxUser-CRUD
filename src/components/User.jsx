/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import EditUsersForm from "./EditUsersForm";
import { deleteUser } from "../slices/usersSlice";

const User = () => {
  const state = useSelector((state) => {
    return state.userReducer;
  });

  const dispatch = useDispatch();
  const [lgShow, setLgShow] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleClose = () => {
    setLgShow(false);
  };

  const handleShow = (user) => {
    setEditUser(user);
    setLgShow(true);
  };

 
  

  const handleDelete = (user) => {
    dispatch(deleteUser(user));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Modal size="lg" show={lgShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditUsersForm
                editUserDetail={editUser}
                closeModal={handleClose}
                
                
              />
            </Modal.Body>
          </Modal>
          <Card className="w-100 d-flex">
            <Card.Body>
              <h4 className="border">Users Details</h4>
              {state.users.map((user) => {
                return (
                  <div key={user.id}>
                    <p>Name:{user.name}</p>
                    <p>Email:{user.email}</p>
                    <p> Gen:{user.gen}</p>
                    <p>Phone Number: {user.phone}</p>
                    <Button onClick={() => handleShow(user)}>Edit</Button>
                    <Button
                      onClick={() => handleDelete(user)}
                      className="ms-2"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                );
              })}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default User;
