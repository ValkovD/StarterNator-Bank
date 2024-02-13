import React, { useReducer, useContext } from "react";
import axios from "axios";
import CarContext from "./CarContext";
import CarReducer from "./CarReducer";
import UserContext from "../user/UserContext";
import AlertContext from "../alert/AlertContext";
import {
  CAR_SUBMIT_SUCCESS,
  CAR_SUBMIT_FAIL,
  CLEAR_CAR_STATE,
  CAR_SEARCH_SUCCESS,
  CAR_SEARCH_FAIL
} from "../types";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
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

  // Search Cars =============================================
  const searchCars = async (searchData) => {

    try {

      // ++++++++++++++++++++++++++++++++++++

      let queryParams = new URLSearchParams(searchData);
      // clears out the empty fields
      queryParams.delete("make", "");
      queryParams.delete("model", "");
      queryParams.delete("$lte", "");
      queryParams.delete("$gte", "");
      queryParams.delete("reg", "");
      queryParams.delete("fuel", "");
      queryParams.delete("fault", "");
      let queryString = queryParams.toString();

      // ++++++++++++++++++++++++++++++++++++
      const config = {
        headers: { "x-auth-token": token },
      };
      // console.log("config", config);
      const res = await axios.get(
        `http://localhost:4000/api/cars/search?${queryString}`,
        config
      );
      dispatch({ type: CAR_SEARCH_SUCCESS, payload: res });
      // console.log("res", res.data);
    } catch (err) {
      dispatch({ type: CAR_SEARCH_FAIL, payload: err.response });
      // console.log("ERROR", err.response.data);
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
        searchCars,
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
