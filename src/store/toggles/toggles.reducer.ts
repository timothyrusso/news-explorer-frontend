import { TogglesActionTypes } from './toggles.actions';
import {
  SIGNIN_POPUP_ACTION_TYPES,
  SIGNUP_POPUP_ACTION_TYPES,
} from './toggles.action.types';

export type togglesState = {
  isSigninPopupOpen: boolean;
  isSignupPopupOpen: boolean;
};

const INITIAL_STATE: togglesState = {
  isSigninPopupOpen: false,
  isSignupPopupOpen: false,
};

export const togglesReducer = (
  state = INITIAL_STATE,
  action: TogglesActionTypes
) => {
  switch (action.type) {
    case SIGNIN_POPUP_ACTION_TYPES.SET_SIGNIN_POPUP_OPEN:
      return {
        ...state,
        isSigninPopupOpen: action.payload,
      };
    case SIGNIN_POPUP_ACTION_TYPES.SET_SIGNIN_POPUP_CLOSED:
      return {
        ...state,
        isSigninPopupOpen: action.payload,
      };
    case SIGNUP_POPUP_ACTION_TYPES.SET_SIGNUP_POPUP_OPEN:
      return {
        ...state,
        isSignupPopupOpen: action.payload,
      };
    case SIGNUP_POPUP_ACTION_TYPES.SET_SIGNUP_POPUP_CLOSED:
      return {
        ...state,
        isSignupPopupOpen: action.payload,
      };
    default:
      return state;
  }
};
