import {extend} from "../../../utils/utils";
import {ActionType} from "../../action";
import {City, cities} from "../../../const";

const initialState = {
  cities,
  city: City.AMSTERDAM
};

const citiesData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload
      });
  }
  return state;
};

export {citiesData};
