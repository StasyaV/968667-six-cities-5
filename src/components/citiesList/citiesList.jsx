import React from "react";
import PropTypes from "prop-types";
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import City from "../city/city";

const CitiesList = (props) => {
  const {cities, currentCity, changeCity, updateOffers} = props;

  const onCityClick = (evt) => {
    evt.preventDefault();
    changeCity(evt.target.textContent);
    updateOffers();
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <City key={`${city}-${i}`}
          city={city} onCityClick={onCityClick}
          isCurrent={currentCity === city}
        />
      ))}
    </ul>
  );

};

CitiesList.propTypes = {
  cities: PropTypes.array.isRequired,
};

const mapStateToProps = (({city, cities}) => ({
  currentCity: city,
  cities
}));

const mapDispatchToProps = ((dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  updateOffers() {
    dispatch(ActionCreator.updateOffers());
  }
}));

CitiesList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  updateOffers: PropTypes.func.isRequired,
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
