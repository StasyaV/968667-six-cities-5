import React from 'react';
import PropTypes from "prop-types";
import OfferCard from '../offer-card/offer-card';

const OfferList = (props) => {
  const {offers, updateActiveOfferIdAction, authorizationStatus, changeFavoriteStatusAction} = props;
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
      onMouseOut={() => {
        if (typeof updateActiveOfferIdAction === `function`) {
          updateActiveOfferIdAction(``);
        }
      }}
      className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          authorizationStatus={authorizationStatus}
          changeFavoriteStatusAction={changeFavoriteStatusAction}
          updateActiveOfferIdAction={updateActiveOfferIdAction}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  updateActiveOfferIdAction: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
  changeFavoriteStatusAction: PropTypes.func.isRequired,
};

export {OfferList};
export default OfferList;
