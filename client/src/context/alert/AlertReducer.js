// import types
import {
  ALERT_SUCCESS,
  ALERT_CLOSE,
  ALERT_BAD_REQUEST,
  ALERT_UNAUTHORIZED_USER,
  ALERT_PASSWORD_NO_MATCH,
  ALERT_PASSWORD_MATCH,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        ...state,
        alertVariant: "success",
        showAlert: true,
        resArray: action.payload,
      };
    case ALERT_UNAUTHORIZED_USER:
      return {
        ...state,
        alertVariant: "danger",
        showAlert: true,
        resArray: action.payload,
      };
    case ALERT_BAD_REQUEST:
      return {
        ...state,
        alertVariant: "danger",
        showAlert: true,
        resArray: action.payload,
      };
    case ALERT_PASSWORD_NO_MATCH:
      return {
        ...state,
        alertVariant: "danger",
        showAlert: true,
        passMsg: action.payload,
      };
    case ALERT_PASSWORD_MATCH:
      return {
        ...state,
        alertVariant: "success",
        showAlert: true,
        passMsg: action.payload,
      };
    case ALERT_CLOSE:
      return {
        alertVariant: "",
        showAlert: false,
        passMsg: "",
        resArray: [],
      };
    default:
      return state;
  }
};
