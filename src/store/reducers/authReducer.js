import {
  USER_SIGNIN_START,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE
} from "../actions";

const initialState = {
  currentUser: {},
  userSignInStart: false,
  userSignInError: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN_START:
      return {
        ...state,
        userSignInStart: true
      };
    case USER_SIGNIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        userSignInStart: false,
        userSignInError: "",
        currentUser: action.payload
      };
    case USER_SIGNIN_FAILURE:
      console.log("login error");
      return {
        ...state,
        userSignInStart: false,
        userSignInError: "Login Failed"
      };
    default:
      return state;
  }
};
