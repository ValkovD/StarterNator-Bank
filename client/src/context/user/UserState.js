import React, { useEffect, useReducer } from "react";

import axios from "axios";
import UserContext from "./UserContext";
import UserReducer from "./UserReducer";
import {
  REG_CLEAR_STATE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  AUTH_FAIL,
  AUTH_SUCCESS,
} from "../types";

// Register user State COMPONENT
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
const initialState = {
  resArray: [],
  resStatus: null,
  isAuth: localStorage.getItem("isAuth"),
  user: {},
  // loading: false,
  token: localStorage.getItem("token"),
};
const UserState = (props) => {
  useEffect(() => {
    authUser(localStorage.getItem("token"));
  }, [initialState.token]);
  // initial state

  // useReducer hook dispatches state to UserReducer.js
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // All functions
  // ====================================================================
  // 3.Register User---------------------------------------
  const registerUser = async (userData) => {
    try {
      const res = await axios.post("http://127.0.0.1:4000/api/users", userData);
      // console.log(res);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res,
      });
    } catch (err) {
      console.log(err.response);
      dispatch({ type: REGISTER_FAIL, payload: err.response });
    }
  };

  // Clear User State-----------------------------------
  const clrUserState = () => {
    dispatch({ type: REG_CLEAR_STATE });
  };
  // 6. Login user-----------------------------------------------
  const loginUser = async (userData) => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth", userData);
      // console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      });
      // await console.log(res.data.msg);
      await authUser(res.data[0].token);
    } catch (err) {
      console.log(err.response);
      dispatch({ type: LOGIN_FAIL, payload: err.response });
    }
  };
  // AUTH user
  const authUser = async (token) => {
    try {
      // console.log(`authUser called token:${token}`);
      const config = {
        headers: { "x-auth-token": token },
      };
      const res = await axios.get("http://localhost:4000/api/auth", config);
      // console.log(res);
      dispatch({ type: AUTH_SUCCESS, payload: res });
    } catch (err) {
      // console.error(err.response);
      dispatch({ type: AUTH_FAIL, payload: err.response });
    }
  };
  // ----------------------------------------------------
  // 7.HANDLE LOGOUT
  const logOut = () => {
    dispatch({ type: LOGOUT_SUCCESS });
    // Must also clear the token from local storage

    // console.log("User logged out");
  };
  // RETURN THE READY PRODUCT WITH STATE AND FUCTIONALITY
  // ACCESABLE AS value props to the children of the
  // UserContext.Provider
  return (
    <UserContext.Provider
      value={{
        resArray: state.resArray,
        resStatus: state.resStatus,
        isAuth: state.isAuth,
        token: state.token,
        user: state.user,
        registerUser,
        clrUserState,
        loginUser,
        authUser,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
