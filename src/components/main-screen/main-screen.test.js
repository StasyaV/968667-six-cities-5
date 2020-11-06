import React from "react";
import renderer from "react-test-renderer";
import {MainScreen} from "./main-screen";
import {cities} from "../../const";
import {offers} from "../app/app.test";

const noop = () => {};

describe(`MainScreen render`, () => {
  it(`Should MainScreen render correctly`, () => {
    const tree = renderer
    .create(<MainScreen
      city={`Amsterdam`}
      cities={cities}
      offers={offers}
      currentSort={`Popular`}
      updateActiveOfferIdAction={noop}
      openSort={false}
      openSortListAction={noop}
      authorizationStatus={`AUTH`}
      changeFavoriteStatusAction={noop}
      email={`Oliver.conner@gmail.com`}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }
    )
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should MainScreen without offers render correctly`, () => {
    const tree = renderer
    .create(<MainScreen
      city={`Amsterdam`}
      cities={cities}
      offers={offers}
      currentSort={`Popular`}
      updateActiveOfferIdAction={noop}
      openSort={false}
      openSortListAction={noop}
      authorizationStatus={`AUTH`}
      changeFavoriteStatusAction={noop}
      email={`Oliver.conner@gmail.com`}
    />,
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
