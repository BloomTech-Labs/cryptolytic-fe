import React from "react";
import { MemoryRouter } from "react-router";
///
import TableData from "../Components/TradingDashboardTable/TableData";
///
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

test("Trading TableData can render without crashing", () => {
  render(<TableData />);
});

// Verify correct color and/or class for positive percentage
// test("Trading TableData class applies correct className for positive integers", () => {
//   render(<TableData item={{ percentage: 1 }} />);
// });

describe("<TableData /> matches verified SnapShot", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<TableData />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
