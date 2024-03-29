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

type SetIsLoggedinTrueAction = {
  type: typeof ISLOGGEDIN_ACTION_TYPES.SET_ISLOGGEDIN_TRUE;
  payload: boolean;
};

type SetIsLoggedinFalseAction = {
  type: typeof ISLOGGEDIN_ACTION_TYPES.SET_ISLOGGEDIN_FALSE;
  payload: boolean;
};

type SetIsBlackNavbarTrueAction = {
  type: typeof ISBLACK_NAVBAR_ACTION_TYPES.SET_ISBLACK_NAVBAR_TRUE;
  payload: boolean;
};

type SetIsBlackNavbarFalseAction = {
  type: typeof ISBLACK_NAVBAR_ACTION_TYPES.SET_ISBLACK_NAVBAR_FALSE;
  payload: boolean;
};

type SetIsMobileNavbarOppositeAction = {
  type: typeof IS_MOBILE_NAVBAR_ACTION_TYPES.SET_IS_MOBILE_NAVBAR_OPPOSITE;
  payload: boolean;
};

type SetIsMobileNavbarFalseAction = {
  type: typeof IS_MOBILE_NAVBAR_ACTION_TYPES.SET_IS_MOBILE_NAVBAR_FALSE;
  payload: boolean;
};

type SetPopupRedirectTextSigninAction = {
  type: typeof POPUP_REDIRECT_TEXT_ACTION_TYPES.SET_POPUP_REDIRECT_TEXT_SIGNIN;
  payload: string;
};

type SetPopupRedirectTextSignupAction = {
  type: typeof POPUP_REDIRECT_TEXT_ACTION_TYPES.SET_POPUP_REDIRECT_TEXT_SIGNUP;
  payload: string;
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
  | SetIsLoadingTextFalseAction
  | SetIsLoggedinTrueAction
  | SetIsLoggedinFalseAction
  | SetIsBlackNavbarTrueAction
  | SetIsBlackNavbarFalseAction
  | SetIsMobileNavbarOppositeAction
  | SetIsMobileNavbarFalseAction
  | SetPopupRedirectTextSigninAction
  | SetPopupRedirectTextSignupAction;

export const setIsSigninPopupOpenAction = (): SetIsSigninPopupOpenAction => ({
  type: SIGNIN_POPUP_ACTION_TYPES.SET_SIGNIN_POPUP_OPEN,
  payload: true,
});

export const setIsSigninPopupClosedAction =
  (): SetIsSigninPopupClosedAction => ({
    type: SIGNIN_POPUP_ACTION_TYPES.SET_SIGNIN_POPUP_CLOSED,
    payload: false,
  });

export const setIsSignupPopupOpenAction = (): SetIsSignupPopupOpenAction => ({
  type: SIGNUP_POPUP_ACTION_TYPES.SET_SIGNUP_POPUP_OPEN,
  payload: true,
});

export const setIsSignupPopupClosedAction =
  (): SetIsSignupPopupClosedAction => ({
    type: SIGNUP_POPUP_ACTION_TYPES.SET_SIGNUP_POPUP_CLOSED,
    payload: false,
  });

export const setInfoTooltipOpenAction = (): SetInfoTooltipOpenAction => ({
  type: INFO_TOOLTIP_ACTION_TYPES.SET_INFO_TOOLTIP_OPEN,
  payload: true,
});

export const setInfoTooltipClosedAction = (): SetInfoTooltipClosedAction => ({
  type: INFO_TOOLTIP_ACTION_TYPES.SET_INFO_TOOLTIP_CLOSED,
  payload: false,
});

export const setIsLoadingTrueAction = (): SetIsLoadingTrueAction => ({
  type: ISLOADING_ACTION_TYPES.SET_ISLOADING_TRUE,
  payload: true,
});

export const setIsLoadingFalseAction = (): SetIsLoadingFalseAction => ({
  type: ISLOADING_ACTION_TYPES.SET_ISLOADING_FALSE,
  payload: false,
});

export const setIsLoadingTextTrueAction = (): SetIsLoadingTextTrueAction => ({
  type: ISLOADING_TEXT_ACTION_TYPES.SET_ISLOADING_TEXT_TRUE,
  payload: true,
});

export const setIsLoadingTextFalseAction = (): SetIsLoadingTextFalseAction => ({
  type: ISLOADING_TEXT_ACTION_TYPES.SET_ISLOADING_TEXT_FALSE,
  payload: false,
});

export const setIsLoggedinTrueAction = (): SetIsLoggedinTrueAction => ({
  type: ISLOGGEDIN_ACTION_TYPES.SET_ISLOGGEDIN_TRUE,
  payload: true,
});

export const setIsLoggedinFalseAction = (): SetIsLoggedinFalseAction => ({
  type: ISLOGGEDIN_ACTION_TYPES.SET_ISLOGGEDIN_FALSE,
  payload: false,
});

export const setIsBlackNavbarTrueAction = (): SetIsBlackNavbarTrueAction => ({
  type: ISBLACK_NAVBAR_ACTION_TYPES.SET_ISBLACK_NAVBAR_TRUE,
  payload: true,
});

export const setIsBlackNavbarFalseAction = (): SetIsBlackNavbarFalseAction => ({
  type: ISBLACK_NAVBAR_ACTION_TYPES.SET_ISBLACK_NAVBAR_FALSE,
  payload: false,
});

export const setIsMobileNavbarOppositeAction = (
  status: boolean
): SetIsMobileNavbarOppositeAction => ({
  type: IS_MOBILE_NAVBAR_ACTION_TYPES.SET_IS_MOBILE_NAVBAR_OPPOSITE,
  payload: status,
});

export const setIsMobileNavbarFalseAction =
  (): SetIsMobileNavbarFalseAction => ({
    type: IS_MOBILE_NAVBAR_ACTION_TYPES.SET_IS_MOBILE_NAVBAR_FALSE,
    payload: false,
  });

export const setPopupRedirectTextSigninAction = (
  status: string
): SetPopupRedirectTextSigninAction => ({
  type: POPUP_REDIRECT_TEXT_ACTION_TYPES.SET_POPUP_REDIRECT_TEXT_SIGNIN,
  payload: status,
});

export const setPopupRedirectTextSignupAction = (
  status: string
): SetPopupRedirectTextSignupAction => ({
  type: POPUP_REDIRECT_TEXT_ACTION_TYPES.SET_POPUP_REDIRECT_TEXT_SIGNUP,
  payload: status,
});
