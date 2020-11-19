import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import CommentList from "../comment-list/comment-list";
import NewCommentForm from "../new-comment-form/new-comment-form";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import {fetchCommentsList, fetchNearbyOffersList, changeFavorite} from "../../store/api-actions";
import {AuthorizationStatus} from "../../const";
import {updateActiveOfferId} from "../../store/action";
import history from "../../browser-history";

class OfferScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offer, loadCommentsAction, loadNearbyOffersAction} = this.props;

    this._getAdditionalData(loadCommentsAction, offer.id);
    this._getAdditionalData(loadNearbyOffersAction, offer.id);
  }

  componentDidUpdate(prevProps) {
    const {offer, loadCommentsAction, loadNearbyOffersAction} = this.props;

    if (prevProps.offer.id !== this.props.offer.id) {
      this._getAdditionalData(loadCommentsAction, offer.id);
      this._getAdditionalData(loadNearbyOffersAction, offer.id);
    }
  }

  _getAdditionalData(func, id) {
    return func(id);
  }

  render() {
    const {offer, comments, nearbyOffers, authorizationStatus,
      changeFavoriteStatusAction, updateActiveOfferIdAction, email, loadNearbyOffersAction} = this.props;

    const onFavoriteButtonClick = () => {
      if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        history.push(`/login`);
        return;
      }

      changeFavoriteStatusAction(offer.id, !offer.isFavorite ? 1 : 0);
    };

    const onAccountLinkClick = () => {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        history.push(`/favorite`);
      }
      history.push(`/login`);
    };

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active" href="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    {authorizationStatus === AuthorizationStatus.NO_AUTH ?
                      <a onClick={onAccountLinkClick} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </a>
                      :
                      <a onClick={onAccountLinkClick} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{email}</span>
                      </a>
                    }
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property" id={offer.id}>
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
              mainOffer={offer} offers={nearbyOffers}/>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OfferList offers={nearbyOffers} getUpdatedOffers={loadNearbyOffersAction} authorizationStatus={authorizationStatus}
                  changeFavoriteStatusAction={(id, num) => {
                    changeFavoriteStatusAction(id, num);
                    this._getAdditionalData(loadNearbyOffersAction, offer.id);
                  }} updateActiveOfferIdAction={updateActiveOfferIdAction}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}


OfferScreen.propTypes = {
  offer: PropTypes.object.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  nearbyOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadCommentsAction: PropTypes.func.isRequired,
  loadNearbyOffersAction: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  updateActiveOfferIdAction: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired
};

const mapStateToProps = ({CITIES, ACTIONS, USER}) => ({
  city: CITIES.city,
  comments: ACTIONS.comments,
  nearbyOffers: ACTIONS.nearbyOffers,
  authorizationStatus: USER.authorizationStatus,
  email: USER.email
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
  },
  updateActiveOfferIdAction(id) {
    dispatch(updateActiveOfferId(id));
  }
}));

export {OfferScreen};
export default connect(mapStateToProps, mapDispatchToProps)(OfferScreen);
