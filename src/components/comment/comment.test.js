import React from "react";
import renderer from "react-test-renderer";
import Comment from "./comment";
import {comments} from "../comment-list/comment-list.test";

describe(`Comment render`, () => {
  it(`Should Comment render correctly`, () => {
    const tree = renderer
    .create(<Comment
      comment={comments[0]}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
