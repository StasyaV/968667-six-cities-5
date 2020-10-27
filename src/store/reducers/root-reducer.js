import {combineReducers} from "redux";
import {offersActions} from "./offers-actions/offers-actions";
import {offersData} from "./offers-data/offers-data";
import {citiesData} from "./cities-data/cities-data";
import {user} from "./user/user";

export const NameSpace = {
  OFFERS: `OFFERS`,
  ACTIONS: `ACTIONS`,
  CITIES: `CITIES`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.OFFERS]: offersData,
  [NameSpace.ACTIONS]: offersActions,
  [NameSpace.CITIES]: citiesData,
  [NameSpace.USER]: user,
});
