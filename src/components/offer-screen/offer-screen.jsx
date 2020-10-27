import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import CommentList from "../comment-list/comment-list";
import NewCommentForm from "../new-comment-form/new-comment-form";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";

const OfferScreen = (props) => {
  const {offers} = props;

  const offer = offers[0];
  const nearOffers = offers.length > 3 ? offers.slice(1, 4) : offers;

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.detailedImages.map((img, index) =>
              <div key={index} className="property__image-wrapper">
                <img className="property__image" src={img} alt="Photo studio"/>
              </div>
            )}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.isPremium
              ?
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
              : ``}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.name}
              </h1>
              {offer.isFavorite
                ?
                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">In bookmarks</span>
                </button>
                :
                <button className="place-card__bookmark-button button" type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>}
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={ {width: `${offer.rating * 20}%`} }></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {offer.roomType}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedroomsCount} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                  Max {offer.guestsCount} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {offer.features.map((feature, index) => {
                  return (
                    <li key={index} className="property__inside-item">
                      {feature}
                    </li>);
                })}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={offer.owner.avatar} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {offer.owner.name}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {offer.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offer.comments.length}</span></h2>
              <ul className="reviews__list">
                <CommentList comments={offer.comments}/>
              </ul>
              <NewCommentForm comments={offer.comments} />
            </section>
          </div>
        </div>
        <Map mapClass={`property__map map`} />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OfferList offers={nearOffers} />
          </div>
        </section>
      </div>
    </main>
  );
};

OfferScreen.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = ({CITIES, OFFERS}) => ({
  city: CITIES.city,
  offers: OFFERS.offers
});

export {OfferScreen};
export default connect(mapStateToProps)(OfferScreen);
