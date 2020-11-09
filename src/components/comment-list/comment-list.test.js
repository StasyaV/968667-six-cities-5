import React from "react";
import renderer from "react-test-renderer";
import CommentList from "./comment-list";

export const comments = [
  {
    id: 1,
    avatar: `img/avatar-max.jpg`,
    author: `Alexa`,
    rating: 4,
    text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    date: `2019-05-08T14:13:56.569Z`
  },
  {
    id: 2,
    avatar: `img/avatar-max.jpg`,
    author: `Alexa`,
    rating: 4,
    text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

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
