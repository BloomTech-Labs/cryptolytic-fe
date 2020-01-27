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
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './firebase'



const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady: true,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(
	applyMiddleware(thunk.withExtraArgument({ getFirebase }), logger),
	reactReduxFirebase(fbConfig)
	),
	// composeEnhancers(applyMiddleware(logger))
);


ReactDOM.render(
	<Router>
	
		<Provider store={store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById("root")
);
