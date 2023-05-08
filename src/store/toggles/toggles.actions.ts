import {
  SIGNIN_POPUP_ACTION_TYPES,
  SIGNUP_POPUP_ACTION_TYPES,
} from './toggles.action.types';

type SetIsSigninPopupOpenAction = {
  type: typeof SIGNIN_POPUP_ACTION_TYPES.SET_SIGNIN_POPUP_OPEN;
  payload: boolean;
};

type SetIsSigninPopupClosedAction = {
  type: typeof SIGNIN_POPUP_ACTION_TYPES.SET_SIGNIN_POPUP_CLOSED;
  payload: boolean;
};

type SetIsSignupPopupOpenAction = {
  type: typeof SIGNUP_POPUP_ACTION_TYPES.SET_SIGNUP_POPUP_OPEN;
  payload: boolean;
};

type SetIsSignupPopupClosedAction = {
  type: typeof SIGNUP_POPUP_ACTION_TYPES.SET_SIGNUP_POPUP_CLOSED;
  payload: boolean;
};

export type TogglesActionTypes =
  | SetIsSigninPopupOpenAction
  | SetIsSigninPopupClosedAction
  | SetIsSignupPopupOpenAction
  | SetIsSignupPopupClosedAction;

export const setIsSigninPopupOpenAction = (
  status: boolean
): SetIsSigninPopupOpenAction => ({
  type: SIGNIN_POPUP_ACTION_TYPES.SET_SIGNIN_POPUP_OPEN,
  payload: true,
});

export const setIsSigninPopupClosedAction = (
  status: boolean
): SetIsSigninPopupClosedAction => ({
  type: SIGNIN_POPUP_ACTION_TYPES.SET_SIGNIN_POPUP_CLOSED,
  payload: false,
});

export const setIsSignupPopupOpenAction = (
  status: boolean
): SetIsSignupPopupOpenAction => ({
  type: SIGNUP_POPUP_ACTION_TYPES.SET_SIGNUP_POPUP_OPEN,
  payload: true,
});

export const setIsSignupPopupClosedAction = (
  status: boolean
): SetIsSignupPopupClosedAction => ({
  type: SIGNUP_POPUP_ACTION_TYPES.SET_SIGNUP_POPUP_CLOSED,
  payload: false,
});
