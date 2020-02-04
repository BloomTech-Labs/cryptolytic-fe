import axios from "axios";

export const FETCH_CHARTDATA_START = "FETCH_CHARTDATA_START";
export const FETCH_CHARTDATA_SUCCESS = "FETCH_CHARTDATA_SUCCESS";
export const FETCH_CHARTDATA_FAILURE = "FETCH_CHARTDATA_FAILURE";

export const getChartData = fields => dispatch => {
  console.log(fields);
  const { exchange, trading_pair, timeFrame } = fields;
  dispatch({ type: FETCH_CHARTDATA_START });
  axios
    .post(
      `https://cryptolytics-sample-ds.herokuapp.com/liveDataRoute/getDataBy${timeFrame}`,
      { exchange, trading_pair }
    )
    .then(res => {
      console.log(res.data.data);
      dispatch({ type: FETCH_CHARTDATA_SUCCESS, payload: res.data.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_CHARTDATA_FAILURE, payload: err });
    });
};

export const FETCH_COMPARE_CHARTDATA_START = "FETCH_COMPARE_CHARTDATA_START";
export const FETCH_COMPARE_CHARTDATA_SUCCESS =
  "FETCH_COMPARE_CHARTDATA_SUCCESS";
export const FETCH_COMPARE_CHARTDATA_FAILURE =
  "FETCH_COMPARE_CHARTDATA_FAILURE";

export const getCompareChartData = fields => dispatch => {
  console.log(fields);
  const { exchange, trading_pair, timeFrame } = fields;
  dispatch({ type: FETCH_COMPARE_CHARTDATA_START });
  axios
    .post(
      `https://cryptolytics-sample-ds.herokuapp.com/liveDataRoute/getDataBy${timeFrame}`,
      { exchange, trading_pair }
    )
    .then(res => {
      console.log(res.data.data);
      dispatch({
        type: FETCH_COMPARE_CHARTDATA_SUCCESS,
        payload: res.data.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_COMPARE_CHARTDATA_FAILURE, payload: err });
    });
};

export const SET_OPTIONS_START = "SET_OPTIONS_START";

export const setOptions = options => dispatch => {
  console.log(options);
  dispatch({ type: SET_OPTIONS_START, payload: options });
};

export const SET_COMPARE_OPTIONS_START = "SET_COMPARE_OPTIONS_START";

export const setCompareOptions = options => dispatch => {
  console.log(options);
  dispatch({ type: SET_COMPARE_OPTIONS_START, payload: options });
};

export const TOGGLE_SWITCH_START = "TOGGLE_SWITCH_START";

export const setToggled = toggle => dispatch => {
  console.log(toggle);
  dispatch({ type: TOGGLE_SWITCH_START, payload: toggle });
};

// Sign In

export const USER_SIGNIN_START = "USER_SIGNIN_START";
export const USER_SIGNIN_SUCCESS = "USER_SIGNIN_SUCCESS";
export const USER_SIGNIN_FAILURE = "USER_SIGNIN_FAILURE";

export const signIn = credentials => {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: USER_SIGNIN_START });
    const firebase = getFirebase();

    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(credentials.email, credentials.password);

      const idToken = await firebase.auth().currentUser.getIdToken(true);

      localStorage.setItem("firebase_jwt", idToken);

      const response = await axios.post(
        "https://cryptolytic-backend-production.herokuapp.com/api/auth/login",
        {},
        {
          headers: {
            Authorization: idToken
          }
        }
      );

      dispatch({ type: USER_SIGNIN_SUCCESS });

      console.log("sign in response", response);
    } catch (error) {
      dispatch({ type: USER_SIGNIN_FAILURE, payload: error });
      console.log("sign in response", error);
    }
  };
};

// Sign Up

export const USER_SIGNUP_START = "USER_SIGNUP_START";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE";

export const signUp = credentials => {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: USER_SIGNUP_START });
    const firebase = getFirebase();

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        );

      const idToken = await firebase.auth().currentUser.getIdToken(true);

      localStorage.setItem("firebase_jwt", idToken);

      const response = await axios.post(
        "https://cryptolytic-backend-production.herokuapp.com/api/auth/register",
        {},
        {
          headers: {
            Authorization: idToken
          }
        }
      );

      console.log("response>>>>", response);
      dispatch({ type: USER_SIGNUP_SUCCESS });
    } catch (error) {
      console.log("sign up error", error);
      dispatch({ type: USER_SIGNUP_FAILURE, payload: error });
    }
  };
};
