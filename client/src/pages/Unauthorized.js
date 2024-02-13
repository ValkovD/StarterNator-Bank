import React from "react";
import Container from "react-bootstrap/esm/Container";
import UnauthorizedPng from "../components/img/unauthorized.png";
const Unauthorized = () => {
  return (
    <Container className="text-center vh-100 align-items-center mt-5">
      <img alt="error" src={UnauthorizedPng}></img>
      <h1>Bye YOU Logged OUT Now</h1>
      <p>Go To</p>
      <p>
        <a href="/">Home Page</a>
      </p>
      <p>or</p>
      <p>
        <a href="/registerUser">Register Page</a>
      </p>
    </Container>
  );
};

export default Unauthorized;
