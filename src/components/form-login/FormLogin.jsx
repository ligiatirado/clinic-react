import "./formLogin.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function FormLogin() {
  return (
    <Container className="container-login">
      <div className="content-container">
        <Form>
          <Form.Group className="mb-3 label" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 label" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className="input" type="password" placeholder="Password" />
          </Form.Group>
          <Button className="form-button" variant="primary" type="submit">
            Sign In
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default FormLogin;
