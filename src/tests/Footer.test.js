import React from "react";
///
import Footer from "../Components/Footer";
///
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

test("Footer component initializes without crashing", () => {
  render(<Footer />);
});

describe("<Footer/> matches verified SnapShot", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
