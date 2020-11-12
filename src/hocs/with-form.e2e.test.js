import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withForm from './with-form';

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

const MockComponent = () => <div />;
const MockComponentWrapped = withForm(MockComponent);

describe(`withForm HOC`, () => {
  it(`Inputs should be empty`, () => {
    const wrapper = shallow(<MockComponentWrapped
      onSubmit={noop}
    />);

    expect(wrapper.props().rating).toEqual(``);
    expect(wrapper.props().comment).toEqual(``);
  });

  it(`Inputs should be with initial values`, () => {
    const wrapper = shallow(<MockComponentWrapped
      onSubmit={noop}
      rating={`4`}
      comment={`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`}
    />);

    expect(wrapper.props().rating).toEqual(`4`);
    expect(wrapper.props().comment).toEqual(`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`);
  });
});
