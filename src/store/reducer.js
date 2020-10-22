import {getOffer} from "../mocks/offers";
import {extend} from "../utils/utils";
import {ActionType} from "./action";
import {cities, City, SortType} from "../const";

const renderOfferCards = 4;

const offerCards = new Array(renderOfferCards).fill().map(getOffer);

const initialState = {
  cities,
  city: City.AMSTERDAM,
  offers: offerCards,
  currentSort: SortType.POPULAR,
  activeOfferId: ``,
  openSort: false
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
    case ActionType.UPDATE_SORT:
      return extend(state, {
        currentSort: action.payload,
        openSort: false
      });
    case ActionType.UPDATE_ACTIVE_ID:
      return extend(state, {
        activeOfferId: action.payload
      });
    case ActionType.OPEN_SORT:
      return extend(state, {
        openSort: action.payload
      });
  }
  return state;
};

export {reducer};
