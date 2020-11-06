import React from "react";
import renderer from "react-test-renderer";
import {Sort} from "./sort";

const noop = () => {};

describe(`Sort render`, () => {
  it(`Should Sort render correctly`, () => {
    const tree = renderer
    .create(<Sort
      currentSort={`Popular`}
      openSort={false}
      updateSortAction={noop}
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
