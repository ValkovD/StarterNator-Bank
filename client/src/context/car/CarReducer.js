import { CAR_SUBMIT_SUCCESS, CAR_SUBMIT_FAIL, CLEAR_CAR_STATE } from "../types";

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
        //  action.payload.data.errors is returned from express validator data is OBJECT thathas errors:[] errors is ARRAY

        //  action.payload.data   IS RETURNED FROM ME CUSTOM RESPONSE data is ARRAY
        resArray: action.payload.data.errors || action.payload.data,
        resStatus: action.payload.status,
        //   alertVariant: "danger",
        //   showAlert: true,
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
