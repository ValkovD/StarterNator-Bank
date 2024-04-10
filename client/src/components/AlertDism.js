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
        {resArray
          ? resArray.map((error, index) => {
            return <Alert.Heading key={index}>{error.msg}</Alert.Heading>;
          })
          : null}
        {passMsg ? <Alert.Heading>{passMsg}</Alert.Heading> : null}
        <hr />
        <div className="d-flex justify-content-end">
        </div>
      </Alert>
    </>
  );
}

export default AlertDism;
