import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./Components/Registeration/PrivateRoute";
import { AuthProvider } from "./Components/Registeration/Auth";
import Home from "./Components/Registeration/Home";
import Login from "./Components/Registeration/Login";
import SignUp from "./Components/Registeration/SignUp";
import TradingDashboard from "./Views/TradingDashboard";
import ArbitrageDashboard from "./Views/ArbitrageDashboard";
import "./App.css";
import NavigationHeader from "./Components/NavigationHeader";
import NavigationBar from "./Components/NavigationBar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
      
            <Route exact path="/" component={Login} /> 
            <Route path="/signup" component={SignUp} />

            <Route path="/main" render={({match: { url } })=> (
            <>
              <div className='navHeader'>
                <NavigationHeader />
                <NavigationBar />
              </div>

              <Route path={`${url}/home`} component={Home} />
              <Route path={`${url}/trading-dashboard`} component={TradingDashboard} />
              <Route path={`${url}/arbitrage-dashboard`} component={ArbitrageDashboard} />
              
              <Footer />
            </>
          )}/>

          
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
