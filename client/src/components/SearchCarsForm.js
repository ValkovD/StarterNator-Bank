import React from 'react'
import { useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// context
import CarContext from '../context/car/CarContext';
const initialSearchData = {};
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
export const SearchCarsForm = () => {
  // ====================================
  // Init Contexts Used ----------------------------
  const carContext = useContext(CarContext);
  const { searchCars } = carContext;

  // local state---------------------------------
  const [searchData, setSearchData] = useState(initialSearchData);
  // const { make, model, from, to, reg, fuel, fault } = searchData;

  // --ON CHANGE--------------------------------
  const onChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });

  };
  // -Handle Submit------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    searchCars(searchData);
  }


  // ====================================
  return (

    <Form
      method="get"
      noValidate
      // validated={validated}
      onSubmit={handleSubmit}
      className="px-2"
    >
      <h2 className="text-center mt-3 mb-5">
        Search Cars
      </h2>
      {/* ---------Make----------------------------- */}

      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="5"
          className="mb-3"
          controlId="validationCustom01"
        >
          <Form.Label>Make</Form.Label>

          <Form.Control
            name="make"
            onChange={onChange}
            required
            type="text"
            placeholder="Make"
          // value={make}
          />

          {/* <Form.Control.Feedback type="invalid">
            Please Enter First Name
          </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      {/* ------------Model----------------- */}
      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="5"
          className="mb-3"
          controlId="validationCustom02"
        >
          <Form.Label>Model</Form.Label>
          <Form.Control
            name="model"
            onChange={onChange}
            required
            type="text"
            placeholder="Model"
          // value={model}
          />
          {/* <Form.Control.Feedback type="invalid">
            Please Surname
          </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      {/* -----------------Year from---------------------------- */}
      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="5"
          className="mb-3"
          controlId="validationCustom03"
        >
          <Form.Label>From Year</Form.Label>

          <Form.Control
            name="$gte"
            onChange={onChange}
            required
            type="year"
            placeholder="From Year"
          // value={email}
          />
          {/* <Form.Control.Feedback type="invalid">
            Please Enter Email
          </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      {/* ------------------Year to--------------------------- */}
      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="5"
          className="mb-3"
          controlId="validationCustom03"
        >
          <Form.Label>To Year</Form.Label>

          <Form.Control
            name="$lte"
            onChange={onChange}
            required
            type="year"
            placeholder="To Year"
          // value={email}
          />
          {/* <Form.Control.Feedback type="invalid">
            Please Enter Email
          </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      {/* ----------------REG-------------------- */}

      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="5"
          className="mb-3"
        // controlId="formGroupPassword"
        >
          <Form.Label>REG</Form.Label>
          <Form.Control
            name="reg"
            onChange={onChange}
            // value={password2}
            required
            type="text"
            placeholder="Reg Number"
          />
          {/* <Form.Control.Feedback type="invalid">
            Please Enter Password
          </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      {/* -----------------Fuel------------------------------ */}
      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="5"
          className="mb-3"
        // controlId="formGroupPassword"
        >
          <Form.Label>Fuel type</Form.Label>
          <Form.Control
            name="fuel"
            onChange={onChange}
            // value={password2}
            required
            type="text"
            placeholder="fuel type"
          />
          {/* <Form.Control.Feedback type="invalid">
            Please Enter Password
          </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      {/* -----------------Fault------------------------------ */}
      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="5"
          className="mb-3"
        // controlId="formGroupPassword"
        >
          <Form.Label>Fault</Form.Label>
          <Form.Control
            name="fault"
            onChange={onChange}
            // value={password2}
            required
            type="text"
            placeholder="Fault"
          />
          {/* <Form.Control.Feedback type="invalid">
            Please Enter Password
          </Form.Control.Feedback> */}
        </Form.Group>
      </Row>
      {/* <Row className="justify-content-md-center"> */}
      <Row className="justify-content-center">
        <Col lg={4} xs={12} className="justify-content-center py-3">
          <Button lg="1" type="submit" className="w-100" >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
