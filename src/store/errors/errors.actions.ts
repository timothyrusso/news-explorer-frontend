import {
  FORM_VALIDITY_ACTION_TYPES,
  ERROR_MESSAGE_ACTION_TYPES,
  GENERIC_SERVER_ERROR_ACTION_TYPES,
} from './errors.action.types';
import { ErrorMessage } from './error.type';

type SetIsFormValidityTrueAction = {
  type: typeof FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_TRUE;
  payload: boolean;
};

type SetIsFormValidityFalseAction = {
  type: typeof FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_FALSE;
  payload: boolean;
};

type SetErrorMessageAction = {
  type: typeof ERROR_MESSAGE_ACTION_TYPES.SET_ERROR_MESSAGE;
  payload: ErrorMessage;
};

type RemoveErrorMessageAction = {
  type: typeof ERROR_MESSAGE_ACTION_TYPES.REMOVE_ERROR_MESSAGE;
  payload: {};
};

type SetGenericServerErrorTrueAction = {
  type: typeof GENERIC_SERVER_ERROR_ACTION_TYPES.SET_GENERIC_SERVER_ERROR_TRUE;
  payload: boolean;
};

type SetGenericServerErrorFalseAction = {
  type: typeof GENERIC_SERVER_ERROR_ACTION_TYPES.SET_GENERIC_SERVER_ERROR_FALSE;
  payload: boolean;
};

export type ErrorsActionTypes =
  | SetIsFormValidityTrueAction
  | SetIsFormValidityFalseAction
  | SetErrorMessageAction
  | RemoveErrorMessageAction
  | SetGenericServerErrorTrueAction
  | SetGenericServerErrorFalseAction;

export const setIsFormValidityTrueAction = (): SetIsFormValidityTrueAction => ({
  type: FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_TRUE,
  payload: true,
});

export const setIsFormValidityFalseAction =
  (): SetIsFormValidityFalseAction => ({
    type: FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_FALSE,
    payload: false,
  });

export const setErrorMessageAction = (
  errorMessage: ErrorMessage
): SetErrorMessageAction => ({
  type: ERROR_MESSAGE_ACTION_TYPES.SET_ERROR_MESSAGE,
  payload: errorMessage,
});

export const removeErrorMessageAction = (): RemoveErrorMessageAction => ({
  type: ERROR_MESSAGE_ACTION_TYPES.REMOVE_ERROR_MESSAGE,
  payload: {},
});

export const setGenericServerErrorTrueAction =
  (): SetGenericServerErrorTrueAction => ({
    type: GENERIC_SERVER_ERROR_ACTION_TYPES.SET_GENERIC_SERVER_ERROR_TRUE,
    payload: true,
  });

export const setGenericServerErrorFalseAction =
  (): SetGenericServerErrorFalseAction => ({
    type: GENERIC_SERVER_ERROR_ACTION_TYPES.SET_GENERIC_SERVER_ERROR_FALSE,
    payload: false,
  });
