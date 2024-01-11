import { useContext, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import AlertContext from "../context/alert/AlertContext";
import UserContext from "../context/user/UserContext";
import CarContext from "../context/car/CarContext";
function AlertDism() {
  // const [showAlert, setShowAlert] = useState(false);
  const alertContext = useContext(AlertContext);
  const { alertVariant, showAlert, passMsg, resArray } = alertContext;
  // const userContext = useContext(UserContext);
  // const { } = userContext;
  // const carContext = useContext(CarContext);
  // const { resArray } = carContext;
  // const { loginEmail } = loginInput.email;
  // if (resSuccess !== "") {
  //   setAlert(resSuccess.status, resSuccess.data.msg);
  // }

  return (
    <>
      <Alert show={showAlert} variant={alertVariant}>
        {/* {alertMsg ? <Alert.Heading>{alertMsg}</Alert.Heading> : null} */}
        {resArray
          ? resArray.map((error, index) => {
              return <Alert.Heading key={index}>{error.msg}</Alert.Heading>;
            })
          : null}
        {passMsg ? <Alert.Heading>{passMsg}</Alert.Heading> : null}
        {/* <p>{alertMsg}</p> */}
        <hr />
        <div className="d-flex justify-content-end">
          {/* <Button onClick={closeAlert} variant={`outline-${alertVariant}`}>
            Close me
          </Button> */}
        </div>
      </Alert>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
    </>
  );
}

export default AlertDism;
