import {AuthorizationStatus} from "../../../const";
import {ActionType} from "../../action";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  email: ``,
  isErrorToSubmit: false
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SAVE_EMAIL:
      return Object.assign({}, state, {
        email: action.payload,
      });
    case ActionType.UPDATE_ERROR_STATUS:
      return Object.assign({}, state, {
        isErrorToSubmit: action.payload,
      });
  }

  return state;
};

export {user};
