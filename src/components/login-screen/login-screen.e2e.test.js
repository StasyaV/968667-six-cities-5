import React from "react";
import {LoginScreen} from './login-screen';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`LoginScreen testing`, () => {

  it(`Submitting form with all relevant data calls callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <LoginScreen onSubmit={onSubmit}
          authorizationStatus={`NO_AUTH`}
          city={`Amsterdam`} />
    );

    wrapper.find(`input[type="email"]`).instance().value = `email@mail.ru`;
    wrapper.find(`input[type="password"]`).instance().value = `qwe123`;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledWith({
      login: `email@mail.ru`,
      password: `qwe123`,
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it(`Submitting form with no data does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <LoginScreen onSubmit={onSubmit}
          authorizationStatus={`NO_AUTH`}
          city={`Amsterdam`} />
    );


    wrapper.find(`input[type="email"]`).instance().value = ``;
    wrapper.find(`input[type="password"]`).instance().value = ``;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with no pass does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <LoginScreen onSubmit={onSubmit}
          authorizationStatus={`NO_AUTH`}
          city={`Amsterdam`} />
    );


    wrapper.find(`input[type="email"]`).instance().value = `email@mail.ru`;
    wrapper.find(`input[type="password"]`).instance().value = ``;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with no email does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <LoginScreen onSubmit={onSubmit}
          authorizationStatus={`NO_AUTH`}
          city={`Amsterdam`} />
    );


    wrapper.find(`input[type="email"]`).instance().value = ``;
    wrapper.find(`input[type="password"]`).instance().value = `qwe123`;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });

  it(`Submitting form with irrelevant email does not call callback`, () => {
    const onSubmit = jest.fn();
    const wrapper = mount(
        <LoginScreen onSubmit={onSubmit}
          authorizationStatus={`NO_AUTH`}
          city={`Amsterdam`} />
    );

    wrapper.find(`input[type="email"]`).instance().value = `email`;
    wrapper.find(`input[type="password"]`).instance().value = `qwe123`;

    const form = wrapper.find(`form`);

    form.simulate(`submit`, {preventDefault: () => {}});
    expect(onSubmit).toHaveBeenCalledTimes(0);
  });
});
