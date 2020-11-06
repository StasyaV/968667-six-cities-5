import React from "react";
import renderer from "react-test-renderer";
import MainContentNoOffers from "./main-content-no-offers";
import {cities} from "../../const";

describe(`MainContentNoOffers render`, () => {
  it(`Should MainContentNoOffers render correctly`, () => {
    const tree = renderer
    .create(<MainContentNoOffers
      city={`Amsterdam`}
      cities={cities}
    />)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
