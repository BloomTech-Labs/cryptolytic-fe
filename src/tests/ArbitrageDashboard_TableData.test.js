import React from "react";
import { MemoryRouter } from "react-router";
///
import TableData from "../Components/ArbitrageDashboardTable/TableData";
///
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

test("Arbitrage TableData can render without crashing", () => {
  render(<TableData />);
});

describe("<TableData /> matches verified SnapShot", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<TableData />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
