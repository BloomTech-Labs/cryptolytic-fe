import React from "react";
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <div className='App'>
      <NavigationHeader />
      <NavigationBar />
      <TradingDashboard />
      <ArbitrageDashboard />
    </div>
  );
}

export default App;
