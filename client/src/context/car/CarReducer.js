import {
  CAR_SUBMIT_SUCCESS,
  CAR_SUBMIT_FAIL,
  CLEAR_CAR_STATE,
  CAR_SEARCH_SUCCESS,
  CAR_SEARCH_FAIL,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case CAR_SUBMIT_SUCCESS:
      return {
        // ...state,
        resArray: [...action.payload.data],
        resStatus: action.payload.status,
        //   alertVariant: "success",
        //   showAlert: true,
      };
    case CAR_SUBMIT_FAIL:
      return {
        //  action.payload.data.errors is returned from express validator data is OBJECT that has errors:[] errors is ARRAY

        //  action.payload.data   IS RETURNED FROM ME CUSTOM RESPONSE data is ARRAY
        resArray: action.payload.data.errors || action.payload.data,
        resStatus: action.payload.status,
        //   alertVariant: "danger",
        //   showAlert: true,
      };
    case CAR_SEARCH_SUCCESS:
      console.log(action.payload.data)
      return {
        resArray: [...action.payload.data],
        resStatus: action.payload.status,
      };
    case CAR_SEARCH_FAIL:
      console.log(action.payload.data)
      return {
        resArray: [...action.payload.data],
        resStatus: action.payload.status,
      };
    case CLEAR_CAR_STATE:
      return {
        resArray: [],
        resStatus: null,
      };
    default:
      return state;
  }
};
