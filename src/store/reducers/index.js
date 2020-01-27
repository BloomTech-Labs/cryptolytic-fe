import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import { authReducer } from "./authReducer";
import { projectReducer } from "./projectReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firebase: firebaseReducer
});
