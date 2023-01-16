import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import logo from "../../assets/images/logo.png"
import { NavLink } from 'react-router-dom';


import Offcanvas from 'react-bootstrap/Offcanvas';

function NavegationBar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 container-navbar">
          <Container fluid>
            <Navbar.Brand href="#">
              <img className="logo-nav" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  {/* <a className="offcanvas-title" href="#home"> Belvedere GynoCare </a> */}
                  <NavLink className="offcanvas-title" to="/">Belvedere GynoCare</NavLink>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className="nav-link" to="/">Doctors</NavLink>
                  <NavLink className="nav-link" to="/about">About Us</NavLink>
                  <h2 className="space"> | </h2>
                  <NavLink className="nav-link">Sign In</NavLink>
                  <NavLink className="nav-link">Sign Up</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavegationBar;