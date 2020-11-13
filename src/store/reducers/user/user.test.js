import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../../services/api";
import {user} from "./user";
import {ActionType} from "../../action";
import {userData, authInfo} from "../../../mocks/offers";
import {login} from "../../api-actions";
import {AuthorizationStatus} from "../../../const";

const api = createAPI(() => {});

describe(`User Reducer testing`, () => {
  it(`Reducer without additional parameters returns initial state`, () => {
    expect(user(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      email: ``,
      isErrorToSubmit: false
    });
  });

  it(`Reducer updates authorizationStatus`, () => {
    expect(user({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `AUTH`,
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH
    });
  });

  it(`Reducer updates email`, () => {
    expect(user({
      email: ``,
    }, {
      type: ActionType.SAVE_EMAIL,
      payload: `Oliver.conner@gmail.com`,
    })).toEqual({
      email: `Oliver.conner@gmail.com`
    });
  });

  it(`Reducer updates Error status`, () => {
    expect(user({
      isErrorToSubmit: false,
    }, {
      type: ActionType.UPDATE_ERROR_STATUS,
      payload: true,
    })).toEqual({
      isErrorToSubmit: true
    });
  });
});

describe(`Testing user async operations`, () => {

  it(`makes a correct API call for login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const authorization = login(userData);

    apiMock
      .onPost(`/login`)
      .reply(200, authInfo);

    return authorization(dispatch, () => {}, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.REQUIRED_AUTHORIZATION,
        payload: AuthorizationStatus.AUTH,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.SAVE_EMAIL,
        payload: authInfo.email,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.REDIRECT_TO_ROUTE,
        payload: `/`,
      });
    });
  });
});
