import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/starter.png";
import Button from "react-bootstrap/Button";
import UserContext from "../context/user/UserContext";
import Form from "react-bootstrap/Form";
export default function UserPageNavbar() {
  const userContext = useContext(UserContext);
  const { logOut, user } = userContext;
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container className="justify-content-between">
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
        <Navbar.Collapse>
          <Container>
            <Form className="justify-content-center">
              <Row lg="auto">
                <Col xs={12} lg={8} className="mb-2">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    // className="me-2"
                    aria-label="Search"
                  />
                </Col>
                <Col xs={12} lg={4} className="mb-3">
                  <Button variant="success" className="w-100">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>

          <Container>
            <Navbar.Text>
              Welcome
              <strong> {`${user.name} || ${user.email}`}</strong>
            </Navbar.Text>
            <Button
              onClick={logOut}
              className="ms-4 mt-2"
              variant="outline-dark"
            >
              Logout
            </Button>{" "}
            {/* </Col> */}
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
