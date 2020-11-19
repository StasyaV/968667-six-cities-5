import React from "react";
import PropTypes from "prop-types";
import Comment from '../comment/comment';
import {sortCommentsByDate} from "../../utils/utils";

const CommentList = (props) => {
  const {comments} = props;
  const getSortedComments = () => {
    if (comments.length > 0) {
      return sortCommentsByDate(comments);
    }
    return comments;
  };

  return (
    <ul className="reviews__list">
      {getSortedComments().map((comment, index) => (
        <Comment
          key={`${comment.id}-${index}`}
          comment={comment}
        />
      ))}
    </ul>
  );

};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CommentList;
