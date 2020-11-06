import React from "react";
import renderer from "react-test-renderer";
import {LoginScreen} from "./login-screen";

const noop = () => {};

describe(`LoginScreen render`, () => {
  it(`Should LoginScreen render correctly`, () => {
    const tree = renderer
    .create(<LoginScreen
      city={`Amsterdam`}
      authorizationStatus={`AUTH`}
      onSubmit={noop}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should LoginScreen render correctly with NO-Auth status`, () => {
    const tree = renderer
    .create(<LoginScreen
      city={`Amsterdam`}
      authorizationStatus={`NO_AUTH`}
      onSubmit={noop}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
