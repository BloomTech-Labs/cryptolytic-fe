import React from "react";
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <TradingDashboard />
      <ArbitrageDashboard />
    </div>
  );
}

export default App;
