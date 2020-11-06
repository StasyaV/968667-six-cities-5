import React from "react";
import renderer from "react-test-renderer";
import MainContentWithOffers from "./main-content-with-offers";
import {cities} from "../../const";

const noop = () => {};
const offers = [
  {
    id: 0,
    city: `Amsterdam`,
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    name: `Hotel - 0`,
    img: `img/apartment-small-03.jpg`,
    detailedImages: [`img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room-small.jpg`, `img/studio-photos.jpg`],
    price: 100,
    roomType: `hotel`,
    bedroomsCount: 1,
    guestsCount: 2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    isFavorite: false,
    isPopular: false,
    isPremium: true,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Own bathroom`, `Hair-dryer`, `AC`],
    rating: 4,
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSUper: true
    }
  },
  {
    id: 1,
    city: `Amsterdam`,
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    name: `Hotel - 1`,
    img: `img/apartment-small-03.jpg`,
    detailedImages: [`img/apartment-small-03.jpg`, `img/apartment-small-04.jpg`, `img/room-small.jpg`, `img/studio-photos.jpg`],
    price: 100,
    roomType: `hotel`,
    bedroomsCount: 1,
    guestsCount: 2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    isFavorite: false,
    isPopular: false,
    isPremium: true,
    rating: 4,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`, `Own bathroom`, `Hair-dryer`, `AC`],
    owner: {
      name: `Angelina`,
      avatar: `img/avatar-angelina.jpg`,
      isSUper: true
    }
  }
];

describe(`MainContentWithOffers render`, () => {
  it(`Should MainContentWithOffers render correctly`, () => {
    const tree = renderer
    .create(<MainContentWithOffers
      city={`Amsterdam`}
      cities={cities}
      offers={offers}
      sort={`Popular`}
      updateActiveOfferIdAction={noop}
      openSort={false}
      openSortListAction={noop}
      authorizationStatus={`AUTH`}
      changeFavoriteStatusAction={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should MainContentWithOffers witout offers render correctly`, () => {
    const tree = renderer
    .create(<MainContentWithOffers
      city={`Amsterdam`}
      cities={cities}
      offers={[]}
      sort={`Popular`}
      updateActiveOfferIdAction={noop}
      openSort={false}
      openSortListAction={noop}
      authorizationStatus={`AUTH`}
      changeFavoriteStatusAction={noop}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
