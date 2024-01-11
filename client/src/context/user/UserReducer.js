import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  REG_CLEAR_STATE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  AUTH_FAIL,
  AUTH_SUCCESS,
} from "../types";

// The big switch case that updates the initial state with the payload that it is been passed with

export default (state, action) => {
  switch (action.type) {
    case REG_CLEAR_STATE:
      return {
        resArray: [],
        resStatus: null,
        token: localStorage.getItem("token"),
      };

    case REGISTER_SUCCESS:
      localStorage.setItem("token", `${action.payload.data[0].token}`);
      return {
        ...state,
        resArray: action.payload.data,
        resStatus: action.payload.status,
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        //  action.payload.data.errors is returned from express validator data is OBJECT thathas errors:[] errors is ARRAY

        //  action.payload.data   IS RETURNED FROM ME CUSTOM RESPONSE data is ARRAY
        resArray: action.payload.data.errors || action.payload.data,
        resStatus: action.payload.status,
        isAuth: false,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", `${action.payload.data[0].token}`);
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        resArray: action.payload.data,
        resStatus: action.payload.status,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        //  action.payload.data.errors is returned from express validator data is OBJECT thathas errors:[] errors is ARRAY

        //  action.payload.data   IS RETURNED FROM ME CUSTOM RESPONSE data is ARRAY
        resArray: action.payload.data.errors || action.payload.data,
        resStatus: action.payload.status,
      };
    case AUTH_SUCCESS:
      localStorage.setItem("isAuth", true);
      return {
        ...state,
        user: action.payload.data[0].user,
        isAuth: true,
      };
    case AUTH_FAIL:
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      return {
        token: localStorage.getItem("token"),
        isAuth: localStorage.getItem("isAuth"),
        resArray: [],
        resStatus: null,
        isAuth: null,
        user: {},
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
      return {
        token: localStorage.getItem("token"),
        isAuth: localStorage.getItem("isAuth"),
        resArray: [],
        resStatus: null,
        isAuth: null,
        user: {},
      };
    default:
      return { ...state };
  }
};
