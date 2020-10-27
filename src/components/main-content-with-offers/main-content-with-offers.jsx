import React from "react";
import PropTypes from "prop-types";
import CitiesList from "../citiesList/citiesList";
import Map from "../map/map";
import OfferList from "../offer-list/offer-list";
import Sort from "../sort/sort";
import {getSortedOffers} from "../../utils/utils";

const MainContentWithOffers = (props) => {
  const {offers, cities, city, sort, updateActiveOfferIdAction, openSort, openSortListAction} = props;
  const sortedOffers = getSortedOffers(sort, offers);
  const getOpenSortList = (evt) => {
    evt.preventDefault();
    if (openSort) {
      openSortListAction(false);
    } else {
      openSortListAction(true);
    }
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities={cities} currentCity={city} />
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers.length} places to stay in {city}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span onClick={getOpenSortList} className="places__sorting-type" tabIndex="0">
                {sort}
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <Sort />
            </form>
            <OfferList offers={sortedOffers} updateActiveOfferIdAction={updateActiveOfferIdAction}/>
          </section>
          <div className="cities__right-section">
            <Map mapClass={`cities__map map`} mapZoom={offers[0].сityZoom}/>
          </div>
        </div>
      </div>
    </main>
  );
};

MainContentWithOffers.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  updateActiveOfferIdAction: PropTypes.func.isRequired,
  openSort: PropTypes.bool.isRequired,
  openSortListAction: PropTypes.func.isRequired,
};

export default MainContentWithOffers;
