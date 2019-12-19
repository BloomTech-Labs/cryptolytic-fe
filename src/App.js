import React from "react";
import TradingDashboard from "./Views/TradingDashboard";
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
    </div>
  );
}

export default App;
