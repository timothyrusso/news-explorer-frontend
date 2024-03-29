import { TogglesActionTypes } from './toggles.actions';
import {
  SIGNIN_POPUP_ACTION_TYPES,
  SIGNUP_POPUP_ACTION_TYPES,
  INFO_TOOLTIP_ACTION_TYPES,
  ISLOADING_ACTION_TYPES,
  ISLOADING_TEXT_ACTION_TYPES,
  ISLOGGEDIN_ACTION_TYPES,
  ISBLACK_NAVBAR_ACTION_TYPES,
  IS_MOBILE_NAVBAR_ACTION_TYPES,
  POPUP_REDIRECT_TEXT_ACTION_TYPES,
} from './toggles.action.types';

export type TogglesState = {
  isSigninPopupOpen: boolean;
  isSignupPopupOpen: boolean;
  isInfoTooltipOpen: boolean;
  isLoading: boolean;
  isLoadingText: boolean;
  isLoggedin: boolean;
  isBlackNavbar: boolean;
  isMobileNavbar: boolean;
  popupRedirectText: string;
};

const INITIAL_STATE: TogglesState = {
  isSigninPopupOpen: false,
  isSignupPopupOpen: false,
  isInfoTooltipOpen: false,
  isLoading: false,
  isLoadingText: false,
  isLoggedin: false,
  isBlackNavbar: false,
  isMobileNavbar: false,
  popupRedirectText: '',
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
    case INFO_TOOLTIP_ACTION_TYPES.SET_INFO_TOOLTIP_OPEN:
      return {
        ...state,
        isInfoTooltipOpen: action.payload,
      };
    case INFO_TOOLTIP_ACTION_TYPES.SET_INFO_TOOLTIP_CLOSED:
      return {
        ...state,
        isInfoTooltipOpen: action.payload,
      };
    case ISLOADING_ACTION_TYPES.SET_ISLOADING_TRUE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ISLOADING_ACTION_TYPES.SET_ISLOADING_FALSE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ISLOADING_TEXT_ACTION_TYPES.SET_ISLOADING_TEXT_TRUE:
      return {
        ...state,
        isLoadingText: action.payload,
      };
    case ISLOADING_TEXT_ACTION_TYPES.SET_ISLOADING_TEXT_FALSE:
      return {
        ...state,
        isLoadingText: action.payload,
      };
    case ISLOGGEDIN_ACTION_TYPES.SET_ISLOGGEDIN_TRUE:
      return {
        ...state,
        isLoggedin: action.payload,
      };
    case ISLOGGEDIN_ACTION_TYPES.SET_ISLOGGEDIN_FALSE:
      return {
        ...state,
        isLoggedin: action.payload,
      };
    case ISBLACK_NAVBAR_ACTION_TYPES.SET_ISBLACK_NAVBAR_TRUE:
      return {
        ...state,
        isBlackNavbar: action.payload,
      };
    case ISBLACK_NAVBAR_ACTION_TYPES.SET_ISBLACK_NAVBAR_FALSE:
      return {
        ...state,
        isBlackNavbar: action.payload,
      };
    case IS_MOBILE_NAVBAR_ACTION_TYPES.SET_IS_MOBILE_NAVBAR_OPPOSITE:
      return {
        ...state,
        isMobileNavbar: action.payload,
      };
    case IS_MOBILE_NAVBAR_ACTION_TYPES.SET_IS_MOBILE_NAVBAR_FALSE:
      return {
        ...state,
        isMobileNavbar: action.payload,
      };
    case POPUP_REDIRECT_TEXT_ACTION_TYPES.SET_POPUP_REDIRECT_TEXT_SIGNIN:
      return {
        ...state,
        popupRedirectText: action.payload,
      };
    case POPUP_REDIRECT_TEXT_ACTION_TYPES.SET_POPUP_REDIRECT_TEXT_SIGNUP:
      return {
        ...state,
        popupRedirectText: action.payload,
      };
    default:
      return state;
  }
};
