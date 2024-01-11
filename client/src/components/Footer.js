import React from "react";
import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
import logo from "./logo/Original_Logo.png";

export default function Footer() {
  return (
    <Card className="text-center">
      <Card.Header>StarterNator Bank 1.0.0</Card.Header>
      <Card.Body>
        <img src={logo} width="80" height="60" />
      </Card.Body>
      <Card.Footer className="text-muted">
        <strong>Deyan Valkov 2023</strong>
      </Card.Footer>
    </Card>
  );
}
