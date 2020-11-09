import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";

const mockStore = configureStore([]);
const noop = () => {};
const currentCity = `Amsterdam`;
const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

describe(`CitiesList render`, () => {
  const initialState = {};
  const store = mockStore(initialState);
  it(`Should CitiesList render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <CitiesList
              cities={cities}
              currentCity={currentCity}
              changeCityAction={noop}
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
