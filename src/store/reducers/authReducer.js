import {
  USER_SIGNIN_START,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNUP_START,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE
} from "../actions";

const initialState = {
  userSignInStart: false,
  userSignInError: "",
  userSignUpStart: false,
  userSignUpError: ""
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNIN_START:
      return {
        ...state,
        userSignInStart: true,
        userSignInError: ""
      };
    case USER_SIGNIN_SUCCESS:
      console.log("login success");
      return {
        ...state,
        userSignInStart: false,
        userSignInError: ""
      };
    case USER_SIGNIN_FAILURE:
      console.log("login error");
      return {
        ...state,
        userSignInStart: false,
        userSignInError: "Login Failed"
      };
    case USER_SIGNUP_START:
      return {
        ...state,
        userSignUpStart: true,
        userSignUpError: ""
      };
    case USER_SIGNUP_SUCCESS:
      console.log("Sign Up Success");
      return {
        ...state,
        userSignUpStart: false,
        userSignUpError: ""
      };
    case USER_SIGNUP_FAILURE:
      console.log("Sign Up Error");
      return {
        ...state,
        userSignUpStart: false,
        userSignUpError: action.payload.message
      };
    default:
      return state;
  }
};
