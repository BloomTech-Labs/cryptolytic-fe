import React from "react";
import { Switch, Route } from "react-router-dom";
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";

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
            <div className='Main'>
              <ArbitrageDashboard />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
