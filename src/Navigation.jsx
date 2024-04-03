import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import Logo from "./assets/logo-white.png";

const Navigation = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        data-bs-theme="dark"
        className="nav-top ml-auto"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavHashLink
                className="nav-link nav-hash-link nav-book-btn"
                to="#contactus"
              >
                book
              </NavHashLink>
              <NavHashLink className="nav-link nav-hash-link" to="/#about">
                about
              </NavHashLink>
              <NavDropdown title="services" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/career-consulting">
                  career consulting
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/public-speaking">
                  public speaking
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/digital-marketing">
                  digital marketing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/decision-making">
                  decision making
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
