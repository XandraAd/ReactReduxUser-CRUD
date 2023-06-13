//import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import User from "./components/User";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container >
        <Row>
          <Col md={6}>
            <UserForm />
          </Col>
          <Col   md={6}>
            <User />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
