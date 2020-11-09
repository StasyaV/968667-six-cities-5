import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import {cities} from "../../const";

const mockStore = configureStore([]);

export const offers = [
  {
    id: 0,
    city: `Amsterdam`,
    cityCoordinates: [52.3909553943508, 4.85309666406198],
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    detailsMapZoom: 8,
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
    cityCoordinates: [52.3909553943508, 4.85309666406198],
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    detailsMapZoom: 8,
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
  },
  {
    id: 2,
    city: `Amsterdam`,
    cityCoordinates: [52.3909553943508, 4.85309666406198],
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    detailsMapZoom: 8,
    name: `Hotel - 2`,
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
  },
  {
    id: 3,
    city: `Amsterdam`,
    cityCoordinates: [52.3909553943508, 4.85309666406198],
    coordinates: [52.3909553943508, 4.85309666406198],
    сityZoom: 10,
    detailsMapZoom: 8,
    name: `Hotel - 3`,
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
  },
];

describe(`App render`, () => {
  const initialState = {
    CITIES: {
      city: `Amsterdam`,
      cities
    },
    ACTIONS: {
      currentSort: `Popular`,
      openSort: false,
      activeOfferId: `0`
    },
    OFFERS: {
      offers
    },
    USER: {
      authorizationStatus: `NO_AUTH`,
      email: `Oliver.conner@gmail.com`
    }
  };
  const store = mockStore(initialState);
  it(`App render`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <App offers={offers} />
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
