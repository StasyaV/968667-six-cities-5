import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {sendComment} from "../../store/api-actions";

class NewCommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.textRef = createRef();
    this.ratingRef = createRef();
    this.buttonRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onCommentSubmit} = this.props;

    evt.preventDefault();
    const offerId = evt.target.closest(`.property`).id;

    if (!this.textRef || !this.ratingRef || this.textRef.value > 300 || this.textRef.value < 50) {
      this.buttonRef.disabled = true;
    }

    onCommentSubmit({
      comment: this.textRef.current.value,
      rating: this.ratingRef.current.value,
    }, offerId);

    this.textRef.current.value = ``;
    this.ratingRef.current.value = ``;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="reviews__form form" action="#" method="post">
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
            ref={this.ratingRef}/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
            ref={this.ratingRef}/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
            ref={this.ratingRef}/>
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
            ref={this.ratingRef}/>
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
            ref={this.ratingRef}/>
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
          ref={this.textRef}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button ref={this.buttonRef} className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

NewCommentForm.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onCommentSubmit(commentData, offerId) {
    dispatch(sendComment(commentData, offerId));
  }
});

export {NewCommentForm};
export default connect(null, mapDispatchToProps)(NewCommentForm);
