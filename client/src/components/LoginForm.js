import React from "react";
import { useState, useContext, useEffect } from "react";

import Stack from "react-bootstrap/Stack";
// import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import UserContext from "../context/user/UserContext";
import AlertContext from "../context/alert/AlertContext";
const initialLoginData = {
  email: "",
  password: "",
  validated: false,
};
const LoginForm = () => {
  // Init Contexts Used================================
  const userContext = useContext(UserContext);
  const { loginUser, resStatus, resArray, clrUserState } = userContext;
  const alertContext = useContext(AlertContext);
  const { setAlert, closeAlert } = alertContext;

  // local state
  const [loginData, setLoginData] = useState(initialLoginData);
  const { email, password, validated } = loginData;
  // ===============useEffect====================
  useEffect(() => {
    if (resStatus === 200) {
      closeAlert();
      setLoginData(initialLoginData);
      clrUserState();
      // console.log("from register user form hook status 200");
      return;
    }
    setAlert(resStatus, resArray);
    // console.log("from register user form hook status NOT 200");
    closeAlert();
  }, [resStatus, resArray]);
  // ============================================
  // On change
  const onChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  // ------------Handle Submit-----------------------------
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      return (
        e.preventDefault(),
        e.stopPropagation(),
        setLoginData({ ...loginData, validated: true })
      );
    }
    e.preventDefault(email);
    // real actions
    setLoginData({ ...loginData, validated: true });
    loginUser(loginData);
  };
  // --------------------------------------------------------------

  // const { email, password, validated } = loginInput;
  return (
    <Stack direction="horizontal" gap={5}>
      <Form
        inline="true"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="justify-content-md-center">
          <Col lg={4} xs={12} className="my-2">
            <InputGroup>
              {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
              <Form.Control
                onChange={onChange}
                required
                name="email"
                type="email"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon1"
                value={email}
              />
            </InputGroup>
          </Col>
          <Col lg={4} xs={12} className="my-2">
            <InputGroup>
              {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
              <Form.Control
                onChange={onChange}
                required
                name="password"
                type="password"
                placeholder="Password"
                className=" mr-sm-2"
                value={password}
              />
            </InputGroup>
          </Col>

          <Col lg={2} xs={12}>
            <Button type="submit" className="w-100 my-2">
              Login
            </Button>
          </Col>
          <Col lg={2} xs={12}>
            <Nav.Link href="/registerUser" className="my-2">
              Register
            </Nav.Link>
          </Col>
        </Row>
      </Form>
    </Stack>
  );
};

export default LoginForm;
