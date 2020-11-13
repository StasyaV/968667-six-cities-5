import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoritesScreen} from "../favorites-screen/favorites-screen";
import {offers} from "../../mocks/offers";

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

describe(`Favorite button works correct`, () => {
  it(`Should favorite button be pressed`, () => {
    const changeFavoriteStatusAction = jest.fn();

    const wrapper = mount(
        <FavoritesScreen
          favoriteOffers={[offers[0]]}
          changeFavoriteStatusAction={changeFavoriteStatusAction}
          loadFavoriteOffersAction={noop}
        />
    );

    const favoriteButton = wrapper.find(`button.place-card__bookmark-button`);
    favoriteButton.simulate(`click`);
    expect(changeFavoriteStatusAction).toHaveBeenCalledTimes(1);
  });
});
