import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Sort} from "./sort";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Sort works correct`, () => {
  it(`Should be sort update`, () => {
    const sortClick = jest.fn();

    const wrapper = mount(
        <Sort
          currentSort={`Popular`}
          openSort={true}
          updateSortAction={sortClick}
        />
    );

    const sortList = wrapper.find(`ul.places__options`);
    sortList.simulate(`click`, {preventDefault: () => {}});
    expect(sortClick).toHaveBeenCalledTimes(1);
  });
});
