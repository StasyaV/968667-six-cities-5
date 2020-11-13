import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import withForm from "../../hocs/with-form";
import {CommentLength} from "../../const";
import {connect} from "react-redux";
import {sendComment} from "../../store/api-actions";
import {updateErrorStatus} from '../../store/action';

class NewCommentForm extends PureComponent {
  constructor(props) {
    super(props);
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
    this.formRef = createRef();
    this.commentInputRef = createRef();
    this.ratingRef = createRef();
  }

  _handleFormSubmit(evt) {
    const {onCommentSubmit, rating, comment, offerId, resetState} = this.props;
    evt.preventDefault();

    if (comment.length > CommentLength.MIN && comment.length <= CommentLength.MAX && rating) {
      onCommentSubmit({
        comment,
        rating
      }, offerId);
    }

    resetState();
    this.formRef.current.reset();
  }

  render() {
    const {rating, comment, onRatingChange, onCommentInputChange,
      isErrorToSubmit, updateErrorStatusAction} = this.props;

    if (isErrorToSubmit) {
      this.formRef.current.style.boxShadow = `0 0 10px red`;
      updateErrorStatusAction(false);
    }

    return (
      <form ref={this.formRef} onSubmit={this._handleFormSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input ref={this.ratingRef} className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
            onChange={onRatingChange}/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input ref={this.ratingRef} className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
            onChange={onRatingChange}/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input ref={this.ratingRef} className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
            onChange={onRatingChange}/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input ref={this.ratingRef} className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
            onChange={onRatingChange}/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input ref={this.ratingRef} className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
            onChange={onRatingChange}/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
          onChange={onCommentInputChange} ref={this.commentInputRef}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button" type="submit"
            disabled={comment.length < CommentLength.MIN || comment.length >= CommentLength.MAX || !rating || !comment ? true : false}>
            Submit</button>
        </div>
      </form>
    );
  }
}

NewCommentForm.propTypes = {
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  onCommentSubmit: PropTypes.func.isRequired,
  onCommentInputChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  offerId: PropTypes.string.isRequired,
  resetState: PropTypes.func.isRequired,
  isErrorToSubmit: PropTypes.bool.isRequired,
  updateErrorStatusAction: PropTypes.func.isRequired
};

const mapStateToProps = ({ACTIONS, USER}) => ({
  offerId: ACTIONS.activeOfferId,
  isErrorToSubmit: USER.isErrorToSubmit
});

const mapDispatchToProps = ((dispatch) => ({
  onCommentSubmit(commentData, offerId, answer) {
    dispatch(sendComment(commentData, offerId, answer));
  },
  updateErrorStatusAction(answer) {
    dispatch(updateErrorStatus(answer));
  }
}));

export {NewCommentForm};
export default connect(mapStateToProps, mapDispatchToProps)(withForm(NewCommentForm));
