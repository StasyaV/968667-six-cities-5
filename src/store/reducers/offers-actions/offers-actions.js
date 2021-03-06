import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {SortType} from "../../../const";

const initialState = {
  currentSort: SortType.POPULAR,
  activeOfferId: ``,
  openSort: false,
  comments: [],
  nearbyOffers: [],
  favoriteOffers: []
};

const offersActions = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_ACTIVE_ID:
      return extend(state, {
        activeOfferId: action.payload
      });
    case ActionType.UPDATE_SORT:
      return extend(state, {
        currentSort: action.payload,
        openSort: false
      });
    case ActionType.OPEN_SORT:
      return extend(state, {
        openSort: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.LOAD_NEARBY_OFFERS:
      return extend(state, {
        nearbyOffers: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload,
      });
  }
  return state;
};

export {offersActions};
