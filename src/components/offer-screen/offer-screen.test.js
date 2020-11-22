import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import {OfferScreen} from "./offer-screen";
import {offers, comments} from "../../mocks/offers";

const mockStore = configureStore([]);
const noop = () => {};

jest.mock(`moment`, () => () => ({format: () => `May 08`}));

describe(`OfferScreen render`, () => {
  const initialState = {
    CITIES: {
      city: `Amsterdam`
    },
    ACTIONS: {
      comments,
      activeOfferId: `0`
    },
    OFFERS: {
      offers
    },
    USER: {
      isErrorToSubmit: false,
      email: `Oliver.conner@gmail.com`
    }
  };

  const store = mockStore(initialState);
  it(`Should OfferScreen render correctly`, () => {
    const tree = renderer
    .create(
        <Provider store={store}>
          <Router history={history}>
            <OfferScreen
              offer={offers[0]}
              loadCommentsAction={noop}
              loadNearbyOffersAction={noop}
              authorizationStatus={`AUTH`}
              changeFavoriteStatusAction={noop}
              nearbyOffers={offers}
              comments={comments}
              updateActiveOfferIdAction={noop}
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
