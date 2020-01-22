import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReactGa from 'react-ga';
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
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
