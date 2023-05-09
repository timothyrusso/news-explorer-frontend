import {
  SIGNIN_POPUP_ACTION_TYPES,
  SIGNUP_POPUP_ACTION_TYPES,
  INFO_TOOLTIP_ACTION_TYPES,
  ISLOADING_ACTION_TYPES,
  ISLOADING_TEXT_ACTION_TYPES,
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

type SetInfoTooltipOpenAction = {
  type: typeof INFO_TOOLTIP_ACTION_TYPES.SET_INFO_TOOLTIP_OPEN;
  payload: boolean;
};

type SetInfoTooltipClosedAction = {
  type: typeof INFO_TOOLTIP_ACTION_TYPES.SET_INFO_TOOLTIP_CLOSED;
  payload: boolean;
};

type SetIsLoadingTrueAction = {
  type: typeof ISLOADING_ACTION_TYPES.SET_ISLOADING_TRUE;
  payload: boolean;
};

type SetIsLoadingFalseAction = {
  type: typeof ISLOADING_ACTION_TYPES.SET_ISLOADING_FALSE;
  payload: boolean;
};

type SetIsLoadingTextTrueAction = {
  type: typeof ISLOADING_TEXT_ACTION_TYPES.SET_ISLOADING_TEXT_TRUE;
  payload: boolean;
};

type SetIsLoadingTextFalseAction = {
  type: typeof ISLOADING_TEXT_ACTION_TYPES.SET_ISLOADING_TEXT_FALSE;
  payload: boolean;
};

export type TogglesActionTypes =
  | SetIsSigninPopupOpenAction
  | SetIsSigninPopupClosedAction
  | SetIsSignupPopupOpenAction
  | SetIsSignupPopupClosedAction
  | SetInfoTooltipOpenAction
  | SetInfoTooltipClosedAction
  | SetIsLoadingTrueAction
  | SetIsLoadingFalseAction
  | SetIsLoadingTextTrueAction
  | SetIsLoadingTextFalseAction;

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

export const setInfoTooltipOpenAction = (
  status: boolean
): SetInfoTooltipOpenAction => ({
  type: INFO_TOOLTIP_ACTION_TYPES.SET_INFO_TOOLTIP_OPEN,
  payload: true,
});

export const setInfoTooltipClosedAction = (
  status: boolean
): SetInfoTooltipClosedAction => ({
  type: INFO_TOOLTIP_ACTION_TYPES.SET_INFO_TOOLTIP_CLOSED,
  payload: false,
});

export const setIsLoadingTrueAction = (
  status: boolean
): SetIsLoadingTrueAction => ({
  type: ISLOADING_ACTION_TYPES.SET_ISLOADING_TRUE,
  payload: true,
});

export const setIsLoadingFalseAction = (
  status: boolean
): SetIsLoadingFalseAction => ({
  type: ISLOADING_ACTION_TYPES.SET_ISLOADING_FALSE,
  payload: false,
});

export const setIsLoadingTextTrueAction = (
  status: boolean
): SetIsLoadingTextTrueAction => ({
  type: ISLOADING_TEXT_ACTION_TYPES.SET_ISLOADING_TEXT_TRUE,
  payload: true,
});

export const setIsLoadingTextFalseAction = (
  status: boolean
): SetIsLoadingTextFalseAction => ({
  type: ISLOADING_TEXT_ACTION_TYPES.SET_ISLOADING_TEXT_FALSE,
  payload: false,
});
