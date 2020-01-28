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
import { MemoryRouter } from "react-router";
import renderer from "react-test-renderer";

test("Dashboard components initialized without crashing!", () => {
	render(<TradingDashboard />);
	render(<ArbitrageDashboard />);
	render(<NavigationHeader />);
	render(
		<MemoryRouter>
			<NavigationBar />
		</MemoryRouter>
	);
	render(<Footer />);

});
test("<App /> should rende r", () => {
	render(
		<MemoryRouter>
			<App />
		</MemoryRouter>
	);
});

describe('<App /> matches verified SnapShot', () => {
	it('should match snapshot', () => {
		const tree = renderer.create(
			<MemoryRouter>
				<App />
			</MemoryRouter>
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});