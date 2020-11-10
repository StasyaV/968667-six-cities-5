import React from "react";
import renderer from "react-test-renderer";
import {FavoritesScreen} from "./favorites-screen";
import {offers} from "../../mocks/offers";

const noop = () => {};

describe(`FavoritesScreen render`, () => {
  it(`Should FavoritesScreen render correctly`, () => {
    const tree = renderer
    .create(<FavoritesScreen
      favoriteOffers={offers}
      loadFavoriteOffersAction={noop}
      changeFavoriteStatusAction={noop}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should FavoritesScreen without offers render correctly`, () => {
    const tree = renderer
    .create(<FavoritesScreen
      favoriteOffers={[]}
      loadFavoriteOffersAction={noop}
      changeFavoriteStatusAction={noop}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
