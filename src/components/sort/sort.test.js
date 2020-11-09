import React from "react";
import renderer from "react-test-renderer";
import {Sort} from "./sort";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";

const mockStore = configureStore([]);
const noop = () => {};

describe(`Sort render`, () => {
  const initialState = {};
  const store = mockStore(initialState);
  it(`Should Sort render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <Sort
              currentSort={`Popular`}
              openSort={false}
              updateSortAction={noop}
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
