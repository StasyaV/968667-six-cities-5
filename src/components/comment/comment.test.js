import React from "react";
import renderer from "react-test-renderer";
import Comment from "./comment";

const comment = {
  id: 1,
  avatar: `img/avatar-max.jpg`,
  author: `Alexa`,
  rating: 4,
  text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  date: Date.now()
};

describe(`Comment render`, () => {
  it(`Should Comment render correctly`, () => {
    const tree = renderer
    .create(<Comment
      comment={comment}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
