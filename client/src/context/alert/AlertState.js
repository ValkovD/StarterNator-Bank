import React, { useReducer } from "react";

import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

import {
  ALERT_SUCCESS,
  ALERT_CLOSE,
  ALERT_BAD_REQUEST,
  ALERT_UNAUTHORIZED_USER,
  ALERT_PASSWORD_NO_MATCH,
  ALERT_PASSWORD_MATCH,
} from "../types";

const AlertState = (props) => {
  const initialState = {
    alertVariant: "",
    showAlert: false,
    passMsg: "",
    resArray: [],
  };
  const [state, dispatch] = useReducer(AlertReducer, initialState);
  // function alert will have 2 arguments responce code and responce message based on this the alert function eill decide how to display red green or yellow

  const setAlert = (resCode, resArr) => {
    // case success 200
    if (resCode === 200) {
      dispatch({ type: ALERT_SUCCESS, payload: resArr });
    }
    // console.log(`setAlert Called with ${resCode}  code`);
    // case bad request  400 info alert informing user what is bad yellow
    if (resCode === 400) {
      dispatch({ type: ALERT_BAD_REQUEST, payload: resArr });
    }
    if (resCode === 401) {
      dispatch({ type: ALERT_UNAUTHORIZED_USER, payload: resArr });
    }
  };
  // Password Match alert-------------------------------
  const setPasswordAlert = (passMatch, passMsg) => {
    if (!passMatch) {
      dispatch({ type: ALERT_PASSWORD_NO_MATCH, payload: passMsg });
    } else {
      dispatch({ type: ALERT_PASSWORD_MATCH, payload: passMsg });
    }
    // console.log(passMatch, passMsg);
  };
  // --------------------------------------------------
  const closeAlert = () => {
    setTimeout(() => {
      dispatch({ type: ALERT_CLOSE });
    }, 4000);
  };

  //@@@@@@@@@@@@@@@@@@@@@@@@@@
  return (
    <AlertContext.Provider
      value={{
        setAlert,
        setPasswordAlert,
        closeAlert,
        alertVariant: state.alertVariant,
        showAlert: state.showAlert,
        resArray: state.resArray,
        passMsg: state.passMsg,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
  // @@@@@@@@@@@@@@@@@@@@@@@@@
};
export default AlertState;
