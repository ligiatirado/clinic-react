import "./formSignUp.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function FormSignUp() {
    return (
        <Container className="container-signup">
            <Form className="content-container-signup">
                <Row className="mb-3 label">
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control className="input" placeholder="First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control className="input" placeholder="Last name" />
                    </Form.Group>
                </Row>

                <Row className="mb-3 label">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control className="input" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridContact">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control className="input" placeholder="(  ) 0000-0000"/>
                    </Form.Group>
                </Row>

                <Row className="mb-3 label">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="input" type="email" placeholder="name@email.com" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className="input" type="password" placeholder="Password"/>
                    </Form.Group>
                </Row>

                <Button className="form-button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default FormSignUp;