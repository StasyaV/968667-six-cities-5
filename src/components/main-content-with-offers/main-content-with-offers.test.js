import React from "react";
import renderer from "react-test-renderer";
import MainContentWithOffers from "./main-content-with-offers";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import {offers} from "../../mocks/offers";
import {cities} from "../../const";

const mockStore = configureStore([]);
const noop = () => {};

describe(`MainContentWithOffers render`, () => {
  it(`Should MainContentWithOffers render correctly`, () => {
    const initialState = {
      CITIES: {
        city: `Amsterdam`,
        cities
      },
      ACTIONS: {
        currentSort: `Popular`,
        openSort: false,
        activeOfferId: `0`
      },
      OFFERS: {
        offers
      }
    };
    const store = mockStore(initialState);
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MainContentWithOffers
              city={`Amsterdam`}
              cities={cities}
              offers={offers}
              sort={`Popular`}
              updateActiveOfferIdAction={noop}
              openSort={false}
              openSortListAction={noop}
              authorizationStatus={`AUTH`}
              changeFavoriteStatusAction={noop}
            />
          </Router>
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
