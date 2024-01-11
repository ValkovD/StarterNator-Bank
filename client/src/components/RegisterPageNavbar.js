import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/starter.png";

const RegisterPageNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container className="justify-content-center">
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
      </Container>
      <Container className="justify-content-center">
        <Navbar.Text>
          <h2>Welcome to our Registration Page</h2>
        </Navbar.Text>
      </Container>
      <Container className="justify-content-around">
        <Navbar.Text>
          <h4>
            Users: <strong>34</strong>
          </h4>
        </Navbar.Text>
        <Navbar.Text>
          <h4>
            Cars: <strong>485</strong>
          </h4>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default RegisterPageNavbar;
