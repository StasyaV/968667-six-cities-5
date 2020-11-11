import React from "react";
import {NewCommentForm} from './new-comment-form';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

const noop = () => {};

describe(`NewCommentForm testing`, () => {

  it(`Submitting form with all relevant data calls callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <NewCommentForm onSubmit={onSubmit}
          offerId={`1`} resetState={noop}
          rating={``} comment={``} onRatingChange={noop} onCommentInputChange={noop}
          isErrorToSubmit={false} updateErrorStatusAction={noop}
        />
    );

    wrapper.find(`input[type="radio"]`).forEach((input, index) => {
      if (index === 2) {
        expect(input.props().checked);
      }
    });
    wrapper.find(`textarea`).instance().value = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledWith({
      rating: `4`,
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it(`Submitting form with no data does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <NewCommentForm onSubmit={onSubmit}
          offerId={`1`} resetState={noop}
          rating={``} comment={``} onRatingChange={noop} onCommentInputChange={noop}
          isErrorToSubmit={false} updateErrorStatusAction={noop}
        />
    );


    wrapper.find(`input[type="radio"]`).forEach((input) => {
      expect(input.props());
    });
    wrapper.find(`textarea`).instance().value = ``;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with no comment does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <NewCommentForm onSubmit={onSubmit}
          offerId={`1`} resetState={noop}
          rating={``} comment={``} onRatingChange={noop} onCommentInputChange={noop}
          isErrorToSubmit={false} updateErrorStatusAction={noop}
        />
    );


    wrapper.find(`input[type="radio"]`).forEach((input, index) => {
      if (index === 2) {
        expect(input.props().checked);
      }
    });
    wrapper.find(`textarea`).instance().value = ``;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with no rating does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <NewCommentForm onSubmit={onSubmit}
          offerId={`1`} resetState={noop}
          rating={``} comment={``} onRatingChange={noop} onCommentInputChange={noop}
          isErrorToSubmit={false} updateErrorStatusAction={noop}
        />
    );


    wrapper.find(`input[type="radio"]`).forEach((input) => {
      expect(input.props());
    });
    wrapper.find(`textarea`).instance().value = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with irrelevant comment length does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <NewCommentForm onSubmit={onSubmit}
          offerId={`1`} resetState={noop}
          rating={``} comment={``} onRatingChange={noop} onCommentInputChange={noop}
          isErrorToSubmit={false} updateErrorStatusAction={noop}
        />
    );

    wrapper.find(`input[type="radio"]`).forEach((input, index) => {
      if (index === 2) {
        expect(input.props().checked);
      }
    });
    wrapper.find(`textarea`).instance().value = `A quiet cozy and picturesque that hides behind a a river.`;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
