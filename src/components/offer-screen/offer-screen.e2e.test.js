import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferScreen} from "../offer-screen/offer-screen";
import {offers} from "../../mocks/offers";

Enzyme.configure({
  adapter: new Adapter(),
});
const noop = () => {};

describe(`OfferScreen works correct`, () => {
  it(`Should be favorite button be pressed`, () => {
    const favoriteButtonClick = jest.fn();

    const wrapper = shallow(
        <OfferScreen
          offer={offers[0]}
          loadCommentsAction={noop}
          loadNearbyOffersAction={noop}
          authorizationStatus={`AUTH`}
          changeFavoriteStatusAction={favoriteButtonClick}
          nearbyOffers={offers}
          comments={[]}
          updateActiveOfferIdAction={noop}
        />
    );

    const favoriteButton = wrapper.find(`button.place-card__bookmark-button`);
    favoriteButton.simulate(`click`);
    expect(favoriteButtonClick).toHaveBeenCalledTimes(1);
  });
});
