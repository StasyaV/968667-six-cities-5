import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainContentWithOffers from "./main-content-with-offers";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import history from "../../browser-history";
import {offers} from "../../mocks/offers";
import {cities} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockStore = configureStore([]);
const noop = () => {};

describe(`MainContent with offers works correct`, () => {
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
    }
  };
  const store = mockStore(initialState);
  it(`Should sortList button be pressed`, () => {
    const onSortListClick = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
          <Router history={history}>
            <MainContentWithOffers
              city={`Amsterdam`}
              cities={cities}
              offers={offers}
              sort={`Popular`}
              updateActiveOfferIdAction={noop}
              openSort={false}
              openSortListAction={onSortListClick}
              authorizationStatus={`AUTH`}
              changeFavoriteStatusAction={noop}
            />
          </Router>
        </Provider>
    );

    const sortingButton = wrapper.find(`span.places__sorting-type`);
    sortingButton.simulate(`click`);
    expect(onSortListClick).toHaveBeenCalledTimes(1);
  });
});
