import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferList} from "../offer-list/offer-list";
import {offers} from "../../mocks/offers";

Enzyme.configure({
  adapter: new Adapter(),
});
const noop = () => {};

describe(`OfferList works correct`, () => {
  it(`Should be activeId of offer be apdate by hover on the card`, () => {
    const mouseOver = jest.fn();

    const wrapper = mount(
        <OfferList
          offers={[offers[0]]}
          updateActiveOfferIdAction={mouseOver}
          authorizationStatus={`AUTH`}
          changeFavoriteStatusAction={noop}
        />
    );

    const cardImg = wrapper.find(`article.place-card`);
    cardImg.simulate(`mouseover`);
    expect(mouseOver).toHaveBeenCalledTimes(1);
  });

  it(`Should be activeId of offer be apdate by mouse out from the card`, () => {
    const mouseOut = jest.fn();

    const wrapper = mount(
        <OfferList
          offers={[offers[0]]}
          updateActiveOfferIdAction={mouseOut}
          authorizationStatus={`AUTH`}
          changeFavoriteStatusAction={noop}
        />
    );

    const cardImg = wrapper.find(`article.place-card`);
    cardImg.simulate(`mouseout`);
    expect(mouseOut).toHaveBeenCalledTimes(1);
  });
});
