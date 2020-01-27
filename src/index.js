import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../src/store/reducers";
import firebase from "./firebase";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  compose(
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({ getFirebase }), logger)
    )
  )
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </Router>,
  document.getElementById("root")
);
