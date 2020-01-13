import React from "react";
import { Switch, Route } from "react-router-dom";
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";
import Charts from "./Views/Charts";
function App() {
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
}

export default App;
