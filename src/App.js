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
function App() {
<<<<<<< HEAD


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
				<Route exact path='/trading-dashboard' component={TradingDashboard} />
				<Route
					exact
					path='/arbitrage-dashboard'
					component={ArbitrageDashboard}
				/>
			</Switch>
			<Footer />
		</div>
	);
=======
  return (
    <div className='App'>
      <div className='navHeader'>
        <NavigationHeader />
        <NavigationBar />
      </div>
      <Switch>
        <Route exact path='/trading-dashboard' component={TradingDashboard} />
        <Route
          exact
          path='/arbitrage-dashboard'
          component={ArbitrageDashboard}
        />
        <Route exact path= '/charts' component={Charts} />
      </Switch>
      <Footer />
    </div>
  );
>>>>>>> 2511cacb33c29e359719a868301720ee37ec5394
}

export default App;
