import React from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

const OfferList = (props) => {
  const {offers, updateActiveOfferIdAction} = props;
  return (
    <div
      onMouseOver={(evt) => {
        if (typeof updateActiveOfferIdAction === `function`) {
          if (!evt.target.closest(`.place-card`)) {
            return;
          }
          const elementId = evt.target.closest(`.place-card`).id;
          updateActiveOfferIdAction(elementId);
        }
      }}
      className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.array,
  updateActiveOfferIdAction: PropTypes.func,
};

export default OfferList;
