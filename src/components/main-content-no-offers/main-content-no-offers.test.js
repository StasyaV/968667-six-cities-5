import React from "react";
import renderer from "react-test-renderer";
import MainContentNoOffers from "./main-content-no-offers";
import {cities} from "../../const";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";

const mockStore = configureStore([]);

describe(`MainContentNoOffers render`, () => {
  const initialState = {
    CITIES: {
      city: `Amsterdam`,
      cities
    }
  };
  const store = mockStore(initialState);
  it(`Should MainContentNoOffers render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <MainContentNoOffers
              city={`Amsterdam`}
              cities={cities}
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
