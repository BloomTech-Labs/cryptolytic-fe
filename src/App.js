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
import IntroIndex from "./Components/Marketing Page/IntroIndex"
import Services from "./Components/Marketing Page/Services"
import TeamPage from "./Components/TeamPage/TeamPage"
function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
		<Route exact path='/' component={IntroIndex} />
		<Route exact path='/services' component={Services} />
		<Route exact path='/team' component={TeamPage}/>
        <Route
          path='/main'
          render={({ match: { url } }) => (
            <>
              <div className='navHeader'>
				  {!window.location.href.includes("intro") ?
                <>
                	<NavigationHeader />
	                <NavigationBar />
                </>
				:
				<></>}
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
