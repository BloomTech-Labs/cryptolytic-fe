import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/Registeration/PrivateRoute";
import { AuthProvider } from "./Components/Registeration/Auth";
import Home from "./Components/Registeration/Home";
import Login from "./Components/Registeration/Login";
import SignUp from "./Components/Registeration/SignUp";

import ReactGa from 'react-ga';
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";



function App() {
  return (
    <div className='App'>
      <div className='navHeader'>
        <NavigationHeader />
        <NavigationBar />
      </div>
      <div className='Main'>
        <Switch>
          <Route exact path='/trading-dashboard'>
            <TradingDashboard />
          </Route>
          <Route exact path='/arbitrage-dashboard'>
            <ArbitrageDashboard />
          </Route>
          <AuthProvider>
          <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </AuthProvider>
        </Switch>
      </div>
      <Footer />
    </div>
  );
import Charts from "./Views/Charts";
import MarketIndex from "./Components/Market Index/MarketIndex"
function App() {


	useEffect(() => {
		ReactGa.initialize('UA-154456797-1')

		//this reports pageviews on our site
		ReactGa.pageview('/')
	}, []
	)

	return (
		<div className='App'>
			<div className='navHeader'>
				<NavigationHeader />
				<NavigationBar />
			</div>
			<Switch>
				<Route exact path='/home' component={MarketIndex} />
				<Route exact path='/trading-dashboard' component={TradingDashboard} />
				<Route
					exact
					path='/arbitrage-dashboard'
					component={ArbitrageDashboard}
				/>
				<Route exact path='/charts' component={Charts} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
