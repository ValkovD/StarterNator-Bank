import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/starter.png";

import LoginForm from "./LoginForm";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <Navbar.Brand href="/">StarterNator Bank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LoginForm></LoginForm>

            {/* <Nav.Link href="/registerUser">Register</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
