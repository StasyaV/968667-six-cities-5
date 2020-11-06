import React from "react";
import renderer from "react-test-renderer";
import {OfferScreen} from "./offer-screen";
import {offers} from "../app/app.test";

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
  it(`Should OfferScreen render correctly`, () => {
    const tree = renderer
    .create(<OfferScreen
      offer={offers[0]}
      loadCommentsAction={noop}
      loadNearbyOffersAction={noop}
      authorizationStatus={`AUTH`}
      changeFavoriteStatusAction={noop}
      nearbyOffers={offers}
      comments={comments}
    />,
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
