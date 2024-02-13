import { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
// context
import UserContext from "../context/user/UserContext";
import AlertContext from "../context/alert/AlertContext";

const initialUserData = {
  name: "",
  surname: "",
  email: "",
  password: "",
  password2: "",
  validated: false,
  btnDisabled: false,
};

function RegisterUserForm() {
  // Init Contexts Used ----------------------------
  const userContext = useContext(UserContext);
  const { registerUser, clrUserState, resStatus, resArray } = userContext;
  const alertContext = useContext(AlertContext);
  const { setAlert, setPasswordAlert, closeAlert } = alertContext;
  // local state-----------------------
  const [userData, setUserData] = useState(initialUserData);

  // --ON CHANGE--------------------------------
  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const { name, surname, email, password, password2, validated, btnDisabled } =
    userData;

  useEffect(() => {
    if (password2 === "") {
      return;
    }
    passwordMatch(password, password2);
  }, [password2]);

  useEffect(() => {
    setAlert(resStatus, resArray);
    console.log("from register user form hook status NOT 200");
    if (resStatus === 200) {
      closeAlert();
      setUserData(initialUserData);
      clrUserState();
      console.log("from register user form hook status 200");
    }
  }, [resStatus, resArray]);

  // Verify password match-----------------------------
  const passwordMatch = (password, password2) => {
    if (password !== password2) {
      console.log("Password mismatch");
      setUserData({ ...userData, btnDisabled: true });
      setPasswordAlert(false, "Password doesn`t match yet");
    } else {
      console.log("MATCH MATCH");
      setUserData({ ...userData, btnDisabled: false });
      setPasswordAlert(true, "Password Match OK");
      closeAlert();
    }
  };
  // ==================Handle Submit=======================
  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      return (
        e.preventDefault(),
        e.stopPropagation(),
        setUserData({ ...userData, validated: true })
      );
    }
    e.preventDefault();
    // e.stopPropagation();
    setUserData({ ...userData, validated: true });
    registerUser(userData);
  };
  // ======================================================
  return (
    <Form
      method="post"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className="px-2"
    >
      <h2 className="text-center mt-3 mb-5">
        Get access to milions of faults described and logged by our users
      </h2>
      {/* -------------------------------------- */}

      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="2"
          className="mb-3"
          controlId="validationCustom01"
        >
          <Form.Label>First Name</Form.Label>

          <Form.Control
            name="name"
            onChange={onChange}
            required
            type="text"
            placeholder="First name"
            value={name}
          />

          <Form.Control.Feedback type="invalid">
            Please Enter First Name
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* ----------------------------- */}
      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="2"
          className="mb-3"
          controlId="validationCustom02"
        >
          <Form.Label>Last name</Form.Label>
          <Form.Control
            name="surname"
            onChange={onChange}
            required
            type="text"
            placeholder="Surname"
            value={surname}
          />
          <Form.Control.Feedback type="invalid">
            Please Surname
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* --------------------------------------------- */}
      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="2"
          className="mb-3"
          controlId="validationCustom03"
        >
          <Form.Label>Email address</Form.Label>

          <Form.Control
            name="email"
            onChange={onChange}
            required
            type="email"
            placeholder="E-mail"
            value={email}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Email
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* --------------------------------------------- */}
      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="2"
          className="mb-3"
          controlId="validationCustom04"
        >
          <Form.Label>Password</Form.Label>

          <Form.Control
            name="password"
            onChange={onChange}
            required
            type="password"
            placeholder="Password"
            value={password}
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Password
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* ------------------------------------ */}

      <Row className="justify-content-md-center">
        <Form.Group
          as={Col}
          xs
          lg="2"
          className="mb-3"
        // controlId="formGroupPassword"
        >
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            name="password2"
            onChange={onChange}
            value={password2}
            required
            type="password"
            placeholder="Repeat Password"
          />
          <Form.Control.Feedback type="invalid">
            Please Enter Password
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      {/* ----------------------------------------------- */}
      {/* <Row className="justify-content-md-center"> */}
      <Row className="justify-content-center">
        <Col lg={2} xs={12} className="justify-content-center py-3">
          <Button lg="1" type="submit" className="w-100" disabled={btnDisabled}>
            Register
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default RegisterUserForm;
