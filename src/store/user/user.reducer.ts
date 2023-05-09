import { User } from './user.type';
import { UserActionTypes } from './user.actions';
import { USER_ACTION_TYPES } from './user.action.types';

export type userState = {
  currentUser: User | {};
};

const INITIAL_STATE: userState = {
  currentUser: {},
};

export const userReducer = (state = INITIAL_STATE, action: UserActionTypes) => {
  switch (action.type) {
    case USER_ACTION_TYPES.LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case USER_ACTION_TYPES.LOGOUT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
