import { User } from './user.type';
import { UserActionTypes } from './user.actions';
import {
  USER_ACTION_TYPES,
  SEARCH_KEYWORD_ACTION_TYPES,
  SEARCH_KEYWORDS_LIST_ACTION_TYPES,
} from './user.action.types';

export type userState = {
  currentUser: User | {};
  searchKeyword: string;
  searchKeywordsList: string[];
};

const INITIAL_STATE: userState = {
  currentUser: {},
  searchKeyword: '',
  searchKeywordsList: [],
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
    case SEARCH_KEYWORD_ACTION_TYPES.SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload,
      };
    case SEARCH_KEYWORDS_LIST_ACTION_TYPES.SET_SEARCH_KEYWORDS_LIST:
      return {
        ...state,
        searchKeywordsList: action.payload,
      };
    default:
      return state;
  }
};
