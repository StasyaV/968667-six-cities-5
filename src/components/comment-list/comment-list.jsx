import React from "react";
import PropTypes from "prop-types";
import Comment from '../comment/comment';
import {sortCommentsByDate} from "../../utils/utils";

const CommentList = (props) => {
  const {comments} = props;
  console.log(comments, `coments`);
  const getSortedComments = () => {
    if (comments.lenght > 0) {
      return sortCommentsByDate(comments);
    }
    return comments;
  };
  console.log(getSortedComments(), `sortedComments`);
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
