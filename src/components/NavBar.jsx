import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import queLogo from "../assets/queLogo.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <Navbar className="navbar-color" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="me-5">
          <img
            alt="Qué Mono!"
            src={queLogo}
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/" className="mx-2">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/bolsos" className="mx-2">
            Bolsos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/baberos" className="mx-2">
            Baberos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/mantas" className="mx-2">
            Mantas
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/accesorios" className="mx-2">
            Accesorios
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};
