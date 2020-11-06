import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withForm from "./with-form";

const noop = () => {};
const comment = `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`;
const rating = `5`;

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withForm(MockComponent);

describe(`WithForm render`, () => {
  it(`withForm is rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        onRatingChange={noop}
        onCommentInputChange = {noop}
        rating={rating}
        comment={comment}
        resetState={noop}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
