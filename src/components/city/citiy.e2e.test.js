import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import City from "../city/city";
import {cities} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`City link works correct`, () => {
  it(`Should city link be pressed`, () => {
    const handleCityClick = jest.fn();

    const wrapper = shallow(
        <City
          city={cities[0]} onCityClick={handleCityClick}
          isCurrent={true}
        />
    );

    const cityLink = wrapper.find(`a.locations__item-link`);
    cityLink.simulate(`click`);
    expect(handleCityClick).toHaveBeenCalledTimes(1);
  });
});
