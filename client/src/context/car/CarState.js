import React, { useReducer, useContext } from "react";
import axios from "axios";
import CarContext from "./CarContext";
import CarReducer from "./CarReducer";
import UserContext from "../user/UserContext";
import AlertContext from "../alert/AlertContext";
import { CAR_SUBMIT_SUCCESS, CAR_SUBMIT_FAIL, CLEAR_CAR_STATE } from "../types";
const CarState = (props) => {
  const initialState = {
    resArray: [],
    resStatus: null,
  };
  const userContext = useContext(UserContext);
  const { token } = userContext;
  // const token = 123;
  const alertContext = useContext(AlertContext);
  const { setAlert, closeAlert } = alertContext;
  const [state, dispatch] = useReducer(CarReducer, initialState);
  // Post car to database==============================
  const submitCar = async (data) => {
    try {
      const config = {
        headers: { "x-auth-token": token },
      };
      const res = await axios.post(
        "http://localhost:4000/api/cars",
        data,
        config
      );
      dispatch({ type: CAR_SUBMIT_SUCCESS, payload: res });
      console.log(res);
      // setAlert(res.status, res.data);
      // closeAlert();
    } catch (err) {
      dispatch({ type: CAR_SUBMIT_FAIL, payload: err.response });
      console.log(err.response);
    }
  };
  // ===================================================//
  // Clear car state TO DO
  const clearCarState = (delay) => {
    setTimeout(() => {
      dispatch({ type: CLEAR_CAR_STATE });
    }, delay);

    console.log("clearCarState called");
  };
  // ===================================================//
  return (
    <CarContext.Provider
      value={{
        submitCar,
        clearCarState,
        resArray: state.resArray,
        resStatus: state.resStatus,
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};

export default CarState;
