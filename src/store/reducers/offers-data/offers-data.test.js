import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {offersData} from "./offers-data";
import {ActionType} from "../../action";
import {serverOffers, adaptedOffers} from "../../../mocks/offers";
import {fetchOffersList} from "../../api-actions";

const api = createAPI(() => {});

describe(`OffersData Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(offersData(void 0, {})).toEqual({
      offers: []
    });
  });

  it(`Reducer updates activeOfferId`, () => {
    expect(offersData({
      offers: [],
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: adaptedOffers,
    })).toEqual({
      offers: adaptedOffers
    });
  });
});

describe(`Testing related to offersData async operations`, () => {

  it(`makes a correct API call for offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerLoader = fetchOffersList();

    apiMock
      .onGet(`/hotels`)
      .reply(200, serverOffers);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: adaptedOffers,
        });
      });
  });
});
