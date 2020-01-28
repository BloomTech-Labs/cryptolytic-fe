import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ReactGa from "react-ga";
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Charts from "./Views/Charts";
import MarketIndex from "./Components/Market Index/MarketIndex";
import Home from "./Components/Registeration/Home";
import Login from "./Components/Registeration/Login";
import SignUp from "./Components/Registeration/SignUp";
import IntroIndex from "./Components/Marketing Page/IntroIndex";
import Services from "./Components/Marketing Page/Services";
import TeamPage from "./Components/TeamPage/TeamPage";
function App() {
	return (
		<div className='App'>
			<Router>
				<Route exact path='/' component={Login} />
				<Route path='/signup' component={SignUp} />
				<Route
					path='/main'
					render={({ match: { url } }) => (
						<>
							<div className='navHeader'>
								<NavigationHeader />
								<NavigationBar />
							</div>
							<Route path={`${url}/home`} component={MarketIndex} />
							<Route
								path={`${url}/trading-dashboard`}
								component={TradingDashboard}
							/>
							<Route
								path={`${url}/arbitrage-dashboard`}
								component={ArbitrageDashboard}
							/>
							<Switch>
								{/* <Route exact path='/home' component={MarketIndex} /> */}
								<Route
									exact
									path='/trading-dashboard'
									component={TradingDashboard}
								/>
								<Route
									exact
									path='/arbitrage-dashboard'
									component={ArbitrageDashboard}
								/>
								<Route exact path={`${url}/charts`} component={Charts} />
								<Route exact path={`${url}/intro`} component={IntroIndex} />
								<Route
									exact
									path={`${url}/intro/services`}
									component={Services}
								/>
								<Route
									exact
									path={`${url}/intro/team-page`}
									component={TeamPage}
								/>
							</Switch>
							<Footer />
						</>
					)}
				/>
			</Router>
		</div>
	);
}
export default App;