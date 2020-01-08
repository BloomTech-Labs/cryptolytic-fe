import React from "react";
import { MemoryRouter } from "react-router";
///
import NavigationBar from "../Components/NavigationBar";
///
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

test("NavigationBar component initialized without crashing", () => {
  render(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>
  );
});

it("NavigationBar menu items rendered!", () => {
  const { getByText } = render(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>
  );
  getByText(/home/i);
  getByText(/arbitrage/i);
  getByText(/trading/i);
  getByText(/api/i);
  getByText(/data/i);
});

describe("<NavigationBar /> matches verified SnapShot", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <NavigationBar />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
