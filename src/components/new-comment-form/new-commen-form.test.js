import React from "react";
import renderer from "react-test-renderer";
import {NewCommentForm} from "./new-comment-form";

const noop = () => {};
describe(`NewCommentForm render`, () => {
  it(`Should NewCommentForm render correctly`, () => {
    const tree = renderer
    .create(<NewCommentForm
      onCommentSubmit={noop}
      rating={`4`}
      comment={`Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`}
      offerId={`1`}
      resetState={noop}
      onRatingChange={noop}
      onCommentInputChange={noop}
      isErrorToSubmit={false}
      updateErrorStatusAction={noop}
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
