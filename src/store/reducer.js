import {getOffer} from "../mocks/offers";
import {extend, getOffersByCity} from "../utils/utils";
import {ActionType} from "./action";
import {cities, City} from "../const";

const renderOfferCards = 4;

const offerCards = new Array(renderOfferCards).fill().map(getOffer);
const defaultOffers = getOffersByCity(offerCards, City.AMSTERDAM);

const initialState = {
  cities,
  city: City.AMSTERDAM,
  offers: defaultOffers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.UPDATE_OFFERS:
      return extend(state, {
        offers: getOffersByCity(offerCards, state.city)
      });
  }
  return state;
};

export {reducer};
