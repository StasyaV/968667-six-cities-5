import React from "react";
import PropTypes from "prop-types";
import Comment from '../comment/comment';

const CommentList = (props) => {
  const {comments} = props;

  return (
    <ul className="reviews__list">
      {comments.map((comment, index) => (
        <Comment
          key={`${comment.id}-${index}`}
          comment={comment}
        />
      ))}
    </ul>
  );

};

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default CommentList;
