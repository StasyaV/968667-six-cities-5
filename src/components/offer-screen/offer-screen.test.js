import React from "react";
import renderer from "react-test-renderer";
import {OfferScreen} from "./offer-screen";
import {offers} from "../app/app.test";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";

const mockStore = configureStore([]);
const noop = () => {};
const comments = [
  {
    id: 1,
    avatar: `img/avatar-max.jpg`,
    author: `Alexa`,
    rating: 4,
    text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    date: Date.now()
  },
  {
    id: 2,
    avatar: `img/avatar-max.jpg`,
    author: `Alexa`,
    rating: 4,
    text: `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
    date: Date.now()
  }
];

describe(`OfferScreen render`, () => {
  const initialState = {
    activeOfferId: `0`
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
