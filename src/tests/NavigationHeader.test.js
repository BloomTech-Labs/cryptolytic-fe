import React from "react";
///
import NavigationHeader from "../Components/NavigationHeader";
///
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

test("NavigationHeader component initialized without crashing", () => {
  render(<NavigationHeader />);
});

describe("<NavigationHeader /> matches verified SnapShot", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<NavigationHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
