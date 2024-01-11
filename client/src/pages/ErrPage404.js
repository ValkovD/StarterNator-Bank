import React from "react";

import { useRouteError } from "react-router-dom";

import Container from "react-bootstrap/esm/Container";
import ErrImg from "../components/img/error-96.png";
const ErrPage404 = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <Container
      id="error-page"
      className="text-center vh-100 align-items-center"
    >
      <img alt="error" src={ErrImg}></img>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          Status:<span className="text-danger">{error.status}</span>
        </i>
      </p>
      <p>
        <i>{error.statusText}</i>
      </p>
      <p>
        <i className="text-danger">{error.data}</i>
      </p>
    </Container>
  );
};

export default ErrPage404;
