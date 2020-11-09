import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";
import {cities} from "../../const";
import {offers} from "../app/app.test";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";

const mockStore = configureStore([]);
const noop = () => {};

describe(`MainScreen render`, () => {
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
  it(`Should MainScreen render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MainScreen
              city={`Amsterdam`}
              currentCity={`Amsterdam`}
              cities={cities}
              offers={offers}
              currentSort={`Popular`}
              updateActiveOfferIdAction={noop}
              openSort={false}
              openSortListAction={noop}
              authorizationStatus={`AUTH`}
              changeFavoriteStatusAction={noop}
              email={`Oliver.conner@gmail.com`}
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

  it(`Should MainScreen without offers render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MainScreen
              city={`Amsterdam`}
              currentCity={`Amsterdam`}
              cities={cities}
              offers={[]}
              currentSort={`Popular`}
              updateActiveOfferIdAction={noop}
              openSort={false}
              openSortListAction={noop}
              authorizationStatus={`AUTH`}
              changeFavoriteStatusAction={noop}
              email={`Oliver.conner@gmail.com`}
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
