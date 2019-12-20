import React from "react";
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
      </div>
      <div className='Main'>
        <NavigationBar />

        <TradingDashboard />
      </div>
      <div>
        {" "}
        <ArbitrageDashboard />
      </div>
    </div>
  );
}

export default App;
