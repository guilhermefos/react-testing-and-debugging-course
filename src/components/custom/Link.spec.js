import React from "react";
import renderer from "react-test-renderer";
import Link from "./Link";

describe("<Link />", () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
