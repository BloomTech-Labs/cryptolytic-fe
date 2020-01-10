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
  const menuItems = ['home', 'arbitrage', 'trading', 'api', 'data']
  const { getByText } = render(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>
  );
  menuItems.forEach(e => {
    expect(`/${e}/i`)
  })
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
