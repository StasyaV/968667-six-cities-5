import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {fetchFavoriteOffersList, changeFavorite} from "../../store/api-actions";
import history from "../../browser-history";
import {cities} from "../../const";
import {getOffersByCity} from "../../utils/utils";
import {updateActiveOfferId} from '../../store/action';

class FavoritesScreen extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavoriteOffersAction} = this.props;

    loadFavoriteOffersAction();
  }

  render() {
    const {favoriteOffers, changeFavoriteStatusAction, email} = this.props;
    const onFavoriteButtonClick = (evt) => {
      const offer = evt.target.closest(`.place-card`);
      if (!offer) {
        return;
      }

      changeFavoriteStatusAction(offer.id, 0);
    };


    const onTitleClick = (evt) => {
      const {updateActiveOfferIdAction} = this.props;
      const offerId = evt.target.closest(`.place-card`).id;
      history.push(`/offer/${offerId}`);
      updateActiveOfferIdAction(`${offerId}`);
    };

    const onAccountLinkClick = () => {
      history.push(`/favorites`);
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
                    <a onClick={onAccountLinkClick} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{email}</span>
                    </a>

                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {favoriteOffers.length === 0 ?
          <main className="page__main page__main--favorites page__main--favorites-empty">
            <div className="page__favorites-container container">
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                </div>
              </section>
            </div>
          </main>
          :
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                {cities.map((city, index) => {
                  const filteredOffers = getOffersByCity(favoriteOffers, city);
                  if (filteredOffers.length > 0) {
                    return (
                      <ul key={`${city}-${index}`} className="favorites__list">
                        <li className="favorites__locations-items">
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <a className="locations__item-link" href="#">
                                <span>{city}</span>
                              </a>
                            </div>
                          </div>
                          <div className="favorites__places">
                            {filteredOffers.map((offer) => (
                              <article key={`${offer.roomType}-${offer.id}`} className="favorites__card place-card" id={offer.id}>
                                <div className="favorites__image-wrapper place-card__image-wrapper">
                                  <a href="#">
                                    <img className="place-card__image" src={offer.img} width="150" height="110" alt="Place image"/>
                                  </a>
                                </div>
                                <div className="favorites__card-info place-card__info">
                                  <div className="place-card__price-wrapper">
                                    <div className="place-card__price">
                                      <b className="place-card__price-value">&euro; {offer.price}</b>
                                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                                    </div>
                                    <button onClick={onFavoriteButtonClick} className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                      <svg className="place-card__bookmark-icon" width="18" height="19">
                                        <use xlinkHref="#icon-bookmark"></use>
                                      </svg>
                                      <span className="visually-hidden">In bookmarks</span>
                                    </button>
                                  </div>
                                  <div className="place-card__rating rating">
                                    <div className="place-card__stars rating__stars">
                                      <span style={ {width: `100%`} }></span>
                                      <span className="visually-hidden">Rating</span>
                                    </div>
                                  </div>
                                  <h2 className="place-card__name">
                                    <a onClick={onTitleClick}>{offer.name}</a>
                                  </h2>
                                  <p className="place-card__type">{offer.roomType}</p>
                                </div>
                              </article>
                            ))}
                            <p></p>
                          </div>
                        </li>
                      </ul>
                    );
                  }
                  return ``;
                })
                }

              </section>
            </div>
          </main>
        }
      </div>
    );
  }
}

FavoritesScreen.propTypes = {
  favoriteOffers: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadFavoriteOffersAction: PropTypes.func.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
  updateActiveOfferIdAction: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ACTIONS, USER}) => ({
  favoriteOffers: ACTIONS.favoriteOffers,
  updateActiveOfferIdAction: ACTIONS.updateActiveOfferIdAction,
  email: USER.email
});

const mapDispatchToProps = ((dispatch) => ({
  loadFavoriteOffersAction() {
    dispatch(fetchFavoriteOffersList());
  },
  changeFavoriteStatusAction(id, num) {
    dispatch(changeFavorite(id, num));
  },
  updateActiveOfferIdAction(id) {
    dispatch(updateActiveOfferId(id));
  }
}));

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);

