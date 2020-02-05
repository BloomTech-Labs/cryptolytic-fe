import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Charts from "./Views/Charts";
import MarketIndex from "./Components/Market Index/MarketIndex";
import Login from "./Components/Registration/Login";
import SignUp from "./Components/Registration/SignUp";
import IntroIndex from "./Components/Marketing Page/IntroIndex";
import Services from "./Components/Marketing Page/Services";
import TeamPage from "./Components/TeamPage/TeamPage";
const useStyles = makeStyles(theme => ({
	navContainer: {
		"@media(max-width: 1300px)": {
			display: "flex",
			flexDirection: "row-reverse"
		}
	}
}));
function App() {
	const classes = useStyles();
	return (
		<div className='App'>
			<Router>
				<Route exact path='/login' render={props => <Login {...props} />} />
				<Route path='/signup' render={props => <SignUp {...props} />} />
				<Route exact path='/' component={IntroIndex} />
				<Route exact path='/services' component={Services} />
				<Route exact path='/team' component={TeamPage} />
				<Route
					path='/main'
					render={({ match: { url }, history }) => (
						<>
							<div className='navHeader'>
								{!window.location.href.includes("intro") ? (
									<div className={classes.navContainer}>
										<NavigationHeader />
										<NavigationBar />
									</div>
								) : (
										<></>
									)}
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
							<Route path={`${url}/exchange-charts`} component={Charts} />
							<Footer />
						</>
					)}
				/>
			</Router>
		</div>
	);
}
export default App;
