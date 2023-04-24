import { legacy_createStore as createStore } from 'redux';
import { User } from '../types/generic-types';

export type RootState = {
  user: User | {};
};

const initialState: RootState = {
  user: {},
};

const reducer = () => {};

const store = createStore(reducer);

export default store;
