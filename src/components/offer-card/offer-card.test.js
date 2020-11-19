import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card";
import {offers} from "../../mocks/offers";

const noop = () => {};
window.scroll = noop;
describe(`OfferCard render`, () => {
  it(`Should OfferCard render correctly`, () => {
    const tree = renderer
    .create(<OfferCard
      offer={offers[0]}
      authorizationStatus={`AUTH`}
      changeFavoriteStatusAction={noop}
      updateActiveOfferIdAction={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
