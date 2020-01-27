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
import IntroIndex from "./Components/Marketing Page/IntroIndex"
import Services from "./Components/Marketing Page/Services"
import TeamPage from "./Components/TeamPage/TeamPage"


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
				{!window.location.href.includes("intro") ?
					<>
						<NavigationHeader />
						<NavigationBar />
					</>
					:
					<></>
				}
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
				<Route exact path='/intro' component={IntroIndex} />
				<Route exact path='/intro/services' component={Services} />
				<Route exact path='/intro/team-page' component={TeamPage}/>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
