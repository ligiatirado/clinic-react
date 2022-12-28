import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import logo from "../../assets/images/logo.png"

function NavegationBar() {
  return (
    <Navbar className="shadow-sm container-navbar">
      <img className="logo-nav" src={logo} alt="" />
      <Container>
        <Nav className="ms-auto">
          <Nav.Link href="#experts">Experts</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <h2> | </h2>
          <Nav.Link href="#sign-in">Sign In</Nav.Link>
          <Nav.Link href="#sign-up">Sign Up</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavegationBar;
