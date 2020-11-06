import React from "react";
import renderer from "react-test-renderer";
import CommentList from "./comment-list";

const comments = [
  {
    id: 1,
    avatar: `img/avatar-max.jpg`,
    author: `Alexa`,
    rating: 4,
    text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    date: Date.now()
  },
  {
    id: 2,
    avatar: `img/avatar-max.jpg`,
    author: `Alexa`,
    rating: 4,
    text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    date: Date.now()
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
