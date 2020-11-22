import React from "react";
import renderer from "react-test-renderer";
import CommentList from "./comment-list";
import {comments} from "../../mocks/offers";

jest.mock(`moment`, () => () => ({format: () => `May 08`}));

describe(`CommentList render`, () => {
  it(`Should Comment render correctly`, () => {
    const tree = renderer
    .create(<CommentList
      comments={comments}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
