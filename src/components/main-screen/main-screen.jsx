import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {updateActiveOfferId, openSortList} from '../../store/action';
import MainContentNoOffers from "../main-content-no-offers/main-content-no-offers";
import MainContentWithOffers from "../main-content-with-offers/main-content-with-offers";
import {getOffersByCity} from "../../utils/utils";
import {AuthorizationStatus} from "../../const";


const MainScreen = (props) => {
  const {offers, cities, city, currentSort, updateActiveOfferIdAction, openSortListAction, openSort, authorizationStatus, email} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {authorizationStatus === AuthorizationStatus.NO_AUTH ?
                    <Link to="/login" className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                    :
                    <Link to="/favorites" className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{email}</span>
                    </Link>
                  }
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      {offers.length === 0 ?
        <MainContentNoOffers cities={cities} city={city} />
        :
        <MainContentWithOffers
          cities={cities} city={city} offers={offers}
          sort={currentSort} updateActiveOfferIdAction={updateActiveOfferIdAction}
          openSort={openSort} openSortListAction={openSortListAction} />
      }
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  updateActiveOfferIdAction: PropTypes.func.isRequired,
  openSortListAction: PropTypes.func.isRequired,
  openSort: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({CITIES, OFFERS, ACTIONS, USER}) => ({
  city: CITIES.city,
  offers: getOffersByCity(OFFERS.offers, CITIES.city),
  cities: CITIES.cities,
  currentSort: ACTIONS.currentSort,
  openSort: ACTIONS.openSort,
  authorizationStatus: USER.authorizationStatus,
  email: USER.email
});

const mapDispatchToProps = ((dispatch) => ({
  updateActiveOfferIdAction(id) {
    dispatch(updateActiveOfferId(id));
  },
  openSortListAction(bool) {
    dispatch(openSortList(bool));
  }
}));

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
