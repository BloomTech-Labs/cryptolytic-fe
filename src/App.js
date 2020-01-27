import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ReactGa from 'react-ga';
import TradingDashboard from "./Views/TradingDashboard";
import { AuthProvider } from "./Components/Registeration/Auth";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Charts from "./Views/Charts";
import MarketIndex from "./Components/Market Index/MarketIndex"
import Home from "./Components/Registeration/Home";
import Login from "./Components/Registeration/Login";
import SignUp from "./Components/Registeration/SignUp";

function App() {
	return (
	  <div className='App'>
		<AuthProvider>
		  <Router>
  
			  <Route exact path="/" component={Login} /> 
			  <Route path="/signup" component={SignUp} />
			  <Route path="/main" render={({match: { url } })=> (
			  <>
				<div className='navHeader'>
				  <NavigationHeader />
				  <NavigationBar />
				</div>
				<Route path={`${url}/home`} component={Home} />
				<Route path={`${url}/trading-dashboard`} component={TradingDashboard} />
				<Route path={`${url}/arbitrage-dashboard`} component={ArbitrageDashboard} />
				<Footer />
			  </>
			)}/>
		  </Router>
		</AuthProvider>
  
	  </div>
	);
  }
export default App;
