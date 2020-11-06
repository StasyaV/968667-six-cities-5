import React from "react";
import renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";

const currentCity = `Amsterdam`;
const cities = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];

describe(`CitiesList render`, () => {
  it(`Should CitiesList render correctly`, () => {
    const tree = renderer
    .create(<CitiesList
      cities={cities}
      currentCity={currentCity}
      changeCityAction={() => {}}
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
