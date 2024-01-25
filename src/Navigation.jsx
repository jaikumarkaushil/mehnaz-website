import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

// docs: https://react-bootstrap.netlify.app/docs/components/navbar
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
          <Navbar.Brand href="#home">Mehnaz Tabassum</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#book">book</Nav.Link>
              <Nav.Link href="#about">about</Nav.Link>
              <NavDropdown title="services" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#services/3.1">
                  career consulting
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/3.2">
                  public speaking
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/3.3">
                  digital content creation
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/3.4">
                  project management
                </NavDropdown.Item>
                <NavDropdown.Item href="#services/3.4">
                  decision making
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#resources">resources</Nav.Link>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
