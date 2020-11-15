import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../const";
import history from "../../browser-history";

const OfferCard = (props) => {
  const {offer, authorizationStatus, changeFavoriteStatusAction, updateActiveOfferIdAction} = props;

  const onFavoriteButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      history.push(`/login`);
      return;
    }

    changeFavoriteStatusAction(offer.id, !offer.isFavorite ? 1 : 0);
  };

  const onTitleClick = () => {
    history.push(`/offer/${offer.id}`);
    updateActiveOfferIdAction(`${offer.id}`);
  };

  return (
    <article className="cities__place-card place-card" id={offer.id}
    >
      {offer.isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ``}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={onFavoriteButtonClick} className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ {width: `${offer.rating * 20}%`} }></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a onClick={onTitleClick}>{offer.name}</a>
        </h2>
        <p className="place-card__type">{offer.roomType}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    roomType: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    comments: PropTypes.array,
  }).isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  updateActiveOfferIdAction: PropTypes.func.isRequired,
};

export {OfferCard};
export default OfferCard;
