import {
  CAR_SUBMIT_SUCCESS,
  CAR_SUBMIT_FAIL,
  CLEAR_CAR_STATE,
  CAR_SEARCH_SUCCESS,
  CAR_SEARCH_FAIL,
  CAR_DELETE_SUCCESS,
  CAR_DELETE_FAIL
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
    case CAR_DELETE_SUCCESS:
      const idToDel = action.payload.data[0].id
      const newArr = state.resArray.filter((car) => {
        return car._id !== idToDel
      })
      return {
        deletedCarId: action.payload.data[0].id,
        resArray: newArr,
        resStatus: action.payload.status,
      }
    case CAR_DELETE_FAIL:
      console.error(action.payload)
      return {
        deletedCarId: "",
        resArray: state.resArray,
        resStatus: state.resStatus
      }
    case CLEAR_CAR_STATE:
      return {
        resArray: [],
        resStatus: null,
      };
    default:
      return state;
  }
};
