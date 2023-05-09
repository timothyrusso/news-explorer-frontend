import {
  FORM_VALIDITY_ACTION_TYPES,
  ERROR_MESSAGE_ACTION_TYPES,
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

export type ErrorsActionTypes =
  | SetIsFormValidityTrueAction
  | SetIsFormValidityFalseAction
  | SetErrorMessageAction
  | RemoveErrorMessageAction;

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
