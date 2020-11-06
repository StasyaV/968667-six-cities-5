import React from "react";
import renderer from "react-test-renderer";
import OfferList from "./offer-list";
import {offers} from "../app/app.test";

const noop = () => {};

describe(`OfferList render`, () => {
  it(`Should OfferList render correctly`, () => {
    const tree = renderer
    .create(<OfferList
      offers={offers}
      updateActiveOfferIdAction={noop}
      authorizationStatus={`AUTH`}
      changeFavoriteStatusAction={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
