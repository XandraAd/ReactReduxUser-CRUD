/* eslint-disable no-unused-vars */
import {React, useState} from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import EditUsersForm from "./EditUsersForm";

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

  return (
    <Container>
      <Row>
        <Col>
          <Modal size="lg" show={lgShow} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit User Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <EditUsersForm editUserDetail={editUser} closeModal={handleClose} />
            </Modal.Body>
          </Modal>
          <Card.Body>
            <h1>Users Details</h1>
            {state.users.map((user, index) => (
              <div key={index}>
                <h3>Name: {user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Phone Number: {user.phone}</p>
                <Button onClick={() => handleShow(user)}>Edit</Button>
                <Button className="ms-2" variant="danger">
                  Delete
                </Button>
              </div>
            ))}
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default User;

