import { legacy_createStore as createStore } from 'redux';
import { User } from '../types/generic-types';
import { UserActionTypes } from './user/user.actions';

export type RootState = {
  user: User | {};
};

const initialState: RootState = {
  user: {},
};

const reducer = (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
