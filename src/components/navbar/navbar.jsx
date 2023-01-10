import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import logo from "../../assets/images/logo.png"

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// function NavegationBar() {
//   return (
//     <Navbar className="shadow-sm container-navbar">
//       <img className="logo-nav" src={logo} alt="" />         xxx
//       <Container className="nav-menu">
//         <Nav className="ms-auto">
//           <Nav.Link href="#experts">Experts</Nav.Link>
//           <Nav.Link href="#about-us">About Us</Nav.Link>
//           <h2> | </h2>
//           <Nav.Link href="#sign-in">Sign In</Nav.Link>
//           <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavegationBar;


function OffcanvasExample() {
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
                  <a className="offcanvas-title" href="#home"> Belvedere GynoCare </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Experts</Nav.Link>
                  <Nav.Link href="#action2">About Us</Nav.Link>
                  <h2 className="space"> | </h2>
                  <Nav.Link href="#action3">Sign In</Nav.Link>
                  <Nav.Link href="#action4">Sign Up</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;