import React, { useState, useContext, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import UserContext from "../context/user/UserContext";
import CarContext from "../context/car/CarContext";
import AlertContext from "../context/alert/AlertContext";
const initialCarData = {
  make: "",
  model: "",
  year: "",
  reg: "",
  vin: "",
  engineNum: "",
  engineVolume: "",
  fuel: "",
  powerHp: "",
  powerKw: "",
  milegeBroke: "",
  dateBroke: "",

  fault: "",
  notes: "",
};
const SubmitCar = () => {
  const userContext = useContext(UserContext);
  const { authUser } = userContext;
  const carContext = useContext(CarContext);
  const { submitCar, clearCarState, resStatus, resArray } = carContext;
  const alertContext = useContext(AlertContext);
  const { setAlert, closeAlert } = alertContext;

  const [carData, setCarData] = useState(initialCarData);
  const {
    make,
    model,
    year,
    reg,
    engineVolume,
    fuel,
    milegeBroke,
    dateBroke,
    fault,
    notes,
  } = carData;
  // USE EFFECT===================================================
  useEffect(() => {
    setAlert(resStatus, resArray);
    closeAlert();
    if (resStatus === 200) {
      setCarData(initialCarData);
    }
  }, [resStatus, resArray]);
  // ====================================================================
  const onChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };
  //form validation state
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    authUser(localStorage.getItem("token"));
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return (
        event.preventDefault(), event.stopPropagation(), setValidated(true)
      );
    }
    event.preventDefault();
    // event.stopPropagation();
    authUser(localStorage.getItem("token"));
    setValidated(true);
    submitCar(carData);

    console.log(resStatus);
    // console.log(resArray);
    setAlert(resStatus);
    closeAlert();
    clearCarState(2000);
    // setTimeout(() => {
    //   clearCarState();
    // }, 2000);

    setValidated(false);
  };
  return (
    <Form
      method="post"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <h2 className="text-center mt-3 mb-5">Submit New Car</h2>
      {/* -------------------------------------- */}

      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom01"
        >
          <Form.Label>Make</Form.Label>
          <Form.Control
            name="make"
            onChange={onChange}
            required
            type="text"
            // placeholder="make"
            value={make}
          />

          <Form.Control.Feedback type="invalid">
            Please enter make
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom02"
        >
          <Form.Label>Model</Form.Label>
          <Form.Control
            name="model"
            onChange={onChange}
            required
            type="text"
            // placeholder="model"
            value={model}
          />
          <Form.Control.Feedback type="invalid">
            Please enter model
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom03"
        >
          <Form.Label>Year</Form.Label>
          <Form.Control
            name="year"
            onChange={onChange}
            required
            type="text"
            // placeholder="year"
            value={year}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter year
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom04"
        >
          <Form.Label>Reg</Form.Label>
          <Form.Control
            name="reg"
            onChange={onChange}
            required
            type="reg"
            // placeholder="reg"
            value={reg}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter reg
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom05"
        >
          <Form.Label>Engine cc</Form.Label>
          <Form.Control
            name="engineVolume"
            onChange={onChange}
            required
            type="number"
            // placeholder="engine cc"
            value={engineVolume}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter engine size
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom05"
        >
          <Form.Label>Fuel Type</Form.Label>
          <Form.Control
            name="fuel"
            onChange={onChange}
            required
            type="fuel"
            // placeholder="fuel type"
            value={fuel}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Fuel Type
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom05"
        >
          <Form.Label>Mileage</Form.Label>
          <Form.Control
            name="milegeBroke"
            onChange={onChange}
            required
            type="number"
            // placeholder="mileage"
            value={milegeBroke}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter mileage
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom05"
        >
          <Form.Label>Brakedown Date</Form.Label>
          <Form.Control
            name="dateBroke"
            onChange={onChange}
            required
            type="date"
            // placeholder="date of the brakedown"
            value={dateBroke}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter date
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          xs={12}
          lg={4}
          // lg="2"
          className="mb-3"
          controlId="validationCustom05"
        >
          <Form.Label>Fault</Form.Label>
          <Form.Control
            name="fault"
            onChange={onChange}
            required
            type="text"
            placeholder="fault"
            value={fault}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter starter/alternator
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs={12}
          lg={6}
          className="mb-3"
          controlId="validationCustom05"
        >
          <Form.Control
            name="notes"
            onChange={onChange}
            required
            type="text"
            value={notes}
            as="textarea"
            placeholder="Notes...."
            style={{ height: "100px", width: "100%" }}
          />
          {/* <Form.Control.Feedback as="textarea" type="invalid">
            Please Enter Notes ......
          </Form.Control.Feedback> */}
        </Form.Group>
      </Row>

      {/* -------------------------------------------- */}

      <Row className="justify-content-md-center">
        <Col xs={12} lg={2} className="p-3">
          <Button type="submit" className="w-100">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SubmitCar;
