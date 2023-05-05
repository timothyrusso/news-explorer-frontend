import { User } from './user.type';
import { UserActionTypes } from './user.actions';

export type userState = {
  currentUser: User | {};
};

const INITIAL_STATE: userState = {
  currentUser: {},
};

export const userReducer = (state = INITIAL_STATE, action: UserActionTypes) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};