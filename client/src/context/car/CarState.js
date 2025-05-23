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
  CAR_SEARCH_FAIL,
  CAR_DELETE_SUCCESS,
  CAR_DELETE_FAIL
} from "../types";
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const CarState = (props) => {
  const initialState = {
    resArray: [],
    resStatus: null,
    deletedCarId: "",
  };
  const userContext = useContext(UserContext);
  const { token } = userContext;
  // const token = 123;
  const alertContext = useContext(AlertContext);
  const { setAlert, closeAlert } = alertContext;
  const [state, dispatch] = useReducer(CarReducer, initialState);

  // SUBMIT car to database==============================
  const submitCar = async (data) => {
    try {
      const config = {
        headers: { "x-auth-token": token },
      };
      const res = await axios.post(
        "https://api.starternator.pdeit.com/api/cars",
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

  // SEARCH Cars =============================================
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
        `https://api.starternator.pdeit.com/api/cars/search?${queryString}`,
        config
      );
      dispatch({ type: CAR_SEARCH_SUCCESS, payload: res });
      // console.log("res", res.data);
    } catch (err) {
      dispatch({ type: CAR_SEARCH_FAIL, payload: err.response });
      // console.log("ERROR", err.response.data);
    }
  };
  // DELETE CAR===============================
  const deleteCar = async (carId) => {
    try {
      const config = {
        headers: { "x-auth-token": token },
      };
      const res = await axios.delete(`https://api.starternator.pdeit.com/api/cars/delete/${carId}`, config);

      dispatch({ type: CAR_DELETE_SUCCESS, payload: res });
      console.log("res", res.data)

    } catch (err) {
      dispatch({ type: CAR_DELETE_FAIL, payload: err.response });
      console.log("ERROR", err.response.data)
    }
  };

  // ===================================================//
  // CLEAR car state TO DO
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
        deleteCar,
        resArray: state.resArray,
        resStatus: state.resStatus,
        deletedCarId: state.deletedCarId
      }}
    >
      {props.children}
    </CarContext.Provider>
  );
};

export default CarState;
