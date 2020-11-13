import {citiesData} from "./cities-data";
import {ActionType} from "../../action";
import {cities, City} from "../../../const";

describe(`Reducer citiesData work correctly`, () => {
  const initialState = {
    cities,
    city: City.AMSTERDAM
  };

  it(`Reducer citiesData work correctly`, () => {
    expect(citiesData(initialState, ActionType.CHANGE_CITY)).toEqual({
      city: `Amsterdam`,
      cities
    });
  });
});
