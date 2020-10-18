import {getOffer} from "../mocks/offers";
import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {cities, City} from "../const";

const renderOfferCards = 4;

const offerCards = new Array(renderOfferCards).fill().map(getOffer);

const initialState = {
  cities,
  city: City.AMSTERDAM,
  offers: offerCards
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
    case ActionType.UPDATE_OFFERS:
      return extend(state, {
        offers: offerCards
      });
  }
  return state;
};

export {reducer};
