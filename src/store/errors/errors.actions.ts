import { FORM_VALIDITY_ACTION_TYPES } from './errors.action.types';

type SetIsFormValidityTrueAction = {
  type: typeof FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_TRUE;
  payload: boolean;
};

type SetIsFormValidityFalseAction = {
  type: typeof FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_FALSE;
  payload: boolean;
};

export type ErrorsActionTypes =
  | SetIsFormValidityTrueAction
  | SetIsFormValidityFalseAction;

export const setIsFormValidityTrueAction = (): SetIsFormValidityTrueAction => ({
  type: FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_TRUE,
  payload: true,
});

export const setIsFormValidityFalseAction =
  (): SetIsFormValidityFalseAction => ({
    type: FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_FALSE,
    payload: false,
  });
