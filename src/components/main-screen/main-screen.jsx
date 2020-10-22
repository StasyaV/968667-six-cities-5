import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import MainContentNoOffers from "../main-content-no-offers/main-content-no-offers";
import MainContentWithOffers from "../main-content-with-offers/main-content-with-offers";
import {getOffersByCity} from "../../utils/utils";


const MainScreen = (props) => {
  const {offers, cities, city, currentSort, updateActiveOfferId, openSortList, openSort} = props;

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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
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
          sort={currentSort} updateActiveOfferId={updateActiveOfferId}
          openSort={openSort} openSortList={openSortList} />
      }
    </div>
  );
};

MainScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  currentSort: PropTypes.string.isRequired,
  updateActiveOfferId: PropTypes.func.isRequired,
  openSortList: PropTypes.func.isRequired,
  openSort: PropTypes.bool.isRequired
};

const mapStateToProps = (({city, offers, cities, currentSort, openSort}) => ({
  city,
  offers: getOffersByCity(offers, city),
  cities,
  currentSort,
  openSort
}));

const mapDispatchToProps = ((dispatch) => ({
  updateActiveOfferId(id) {
    dispatch(ActionCreator.updateActiveOfferId(id));
  },
  openSortList(bool) {
    dispatch(ActionCreator.openSortList(bool));
  }
}));

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
