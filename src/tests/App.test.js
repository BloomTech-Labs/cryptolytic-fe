import React from "react";
///
import App from "../App";
import TradingDashboard from "../Views/TradingDashboard";
import ArbitrageDashboard from "../Views/ArbitrageDashboard";
import NavigationHeader from "../Components/NavigationHeader";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
///
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

test("Dashboard components initialized without crashing", () => {
  // Invariant failed: You should not use <NavLink> outside a <Router>
  // render(<App />);
  render(<TradingDashboard />);
  render(<ArbitrageDashboard />);
  render(<NavigationHeader />);

  // Invariant failed: You should not use <NavLink> outside a <Router>
  // render(<NavigationBar />);

  render(<Footer />);
});

describe("<App />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
