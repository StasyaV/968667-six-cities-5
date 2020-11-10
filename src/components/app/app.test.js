import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import {cities} from "../../const";
import {offers} from "../../mocks/offers";

const mockStore = configureStore([]);

describe(`App render`, () => {
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
    },
    USER: {
      authorizationStatus: `NO_AUTH`,
      email: `Oliver.conner@gmail.com`
    }
  };
  const store = mockStore(initialState);
  it(`App render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App offers={offers} />
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
