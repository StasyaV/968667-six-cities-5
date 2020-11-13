import React from "react";
import renderer from "react-test-renderer";
import {LoginScreen} from "./login-screen";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";

const mockStore = configureStore([]);
const noop = () => {};

describe(`LoginScreen render`, () => {
  const initialState = {};
  const store = mockStore(initialState);
  it(`Should LoginScreen render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <LoginScreen onSubmit={noop}
              authorizationStatus={`AUTH`}
              city={`Amsterdam`} />
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

  it(`Should LoginScreen render correctly with NO-Auth status`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <LoginScreen onSubmit={noop}
              authorizationStatus={`NO_AUTH`}
              city={`Amsterdam`}/>
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
