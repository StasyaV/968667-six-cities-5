import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import CommentList from "../comment-list/comment-list";
import NewCommentForm from "../new-comment-form/new-comment-form";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import {fetchCommentsList, fetchNearbyOffersList, changeFavorite} from "../../store/api-actions";
import {AuthorizationStatus} from "../../const";

class OfferScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {offers, loadCommentsAction, loadNearbyOffersAction} = this.props;

    this._getAdditionalData(loadCommentsAction, offers[0].id);
    this._getAdditionalData(loadNearbyOffersAction, offers[0].id);
  }

  _getAdditionalData(func, id) {
    return func(id);
  }

  render() {
    const {offers, comments, nearbyOffers, activeOfferId, authorizationStatus, changeFavoriteStatusAction} = this.props;
    const offer = offers.find((item) => item.id === +activeOfferId);

    const onFavoriteButtonClick = () => {
      changeFavoriteStatusAction(offer.id, !offer.isFavorite ? 1 : 0);
    };
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
                <button onClick={onFavoriteButtonClick} className={`place-card__bookmark-button button ${offer.isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
                  <svg className="place-card__bookmark-icon" width="18" height="19">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? `In bookmarks` : `To bookmarks`}</span>
                </button>
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
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ul className="reviews__list">
                  <CommentList comments={comments}/>
                </ul>
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <NewCommentForm /> : ``}
              </section>
            </div>
          </div>
          <Map mapClass={`property__map map`} mapZoom={offer.detailsMapZoom} coordinates={offer.coordinates}
            mainOffer={offer} nearbyOffers={nearbyOffers}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={nearbyOffers} />
            </div>
          </section>
        </div>
      </main>
    );
  }
}


OfferScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
  nearbyOffers: PropTypes.array.isRequired,
  loadCommentsAction: PropTypes.func.isRequired,
  loadNearbyOffersAction: PropTypes.func.isRequired,
  activeOfferId: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
};

const mapStateToProps = ({CITIES, OFFERS, ACTIONS, USER}) => ({
  city: CITIES.city,
  offers: OFFERS.offers,
  activeOfferId: ACTIONS.activeOfferId,
  comments: ACTIONS.comments,
  nearbyOffers: ACTIONS.nearbyOffers,
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = ((dispatch) => ({
  loadCommentsAction(offerId) {
    dispatch(fetchCommentsList(offerId));
  },
  loadNearbyOffersAction(offerId) {
    dispatch(fetchNearbyOffersList(offerId));
  },
  changeFavoriteStatusAction(id, num) {
    dispatch(changeFavorite(id, num));
  }
}));

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
