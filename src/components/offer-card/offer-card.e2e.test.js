import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "../offer-card/offer-card";
import {offers} from "../../mocks/offers";

Enzyme.configure({
  adapter: new Adapter(),
});
const noop = () => {};

describe(`OfferCard works correct`, () => {
  it(`Should favorite button be pressed`, () => {
    const changeFavoriteStatusAction = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={offers[0]}
          authorizationStatus={`AUTH`}
          changeFavoriteStatusAction={changeFavoriteStatusAction}
          updateActiveOfferIdAction={noop}
        />
    );

    const favoriteButton = wrapper.find(`button.place-card__bookmark-button`);
    favoriteButton.simulate(`click`);
    expect(changeFavoriteStatusAction).toHaveBeenCalledTimes(1);
  });

  it(`Should title link be clicked`, () => {
    const updateActiveOfferIdAction = jest.fn();

    const wrapper = shallow(
        <OfferCard
          offer={offers[0]}
          authorizationStatus={`AUTH`}
          changeFavoriteStatusAction={noop}
          updateActiveOfferIdAction={updateActiveOfferIdAction}
        />
    );

    const offerLink = wrapper.find(`.place-card__name > a`);
    offerLink.simulate(`click`);
    expect(updateActiveOfferIdAction).toHaveBeenCalledTimes(1);
  });
});
