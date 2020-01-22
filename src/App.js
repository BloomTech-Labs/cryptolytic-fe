import React from "react";
import { Switch, Route } from "react-router-dom";
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
            <ArbitrageDashboard />
          </Route>
          <AuthProvider>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
          </AuthProvider>
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
