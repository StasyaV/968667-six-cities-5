import React from "react";
import renderer from "react-test-renderer";
import Comment from "./comment";
import {comments} from "../../mocks/offers";

describe(`Comment render`, () => {
  jest.mock(`moment`, () => () => ({format: () => `May 08`}));
  it(`Should Comment render correctly`, () => {
    const tree = renderer
    .create(<Comment
      comment={comments[0]}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
