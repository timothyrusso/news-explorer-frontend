import { ErrorsActionTypes } from './errors.actions';
import {
  FORM_VALIDITY_ACTION_TYPES,
  ERROR_MESSAGE_ACTION_TYPES,
  GENERIC_SERVER_ERROR_ACTION_TYPES,
} from './errors.action.types';

export type errorsState = {
  formValidity: boolean;
  errorMessage: {};
  genericServerError: boolean;
};

const INITIAL_STATE: errorsState = {
  formValidity: true,
  errorMessage: {},
  genericServerError: false,
};

export const errorsReducer = (
  state = INITIAL_STATE,
  action: ErrorsActionTypes
) => {
  switch (action.type) {
    case FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_TRUE:
      return {
        ...state,
        formValidity: action.payload,
      };
    case FORM_VALIDITY_ACTION_TYPES.SET_FORM_VALIDITY_FALSE:
      return {
        ...state,
        formValidity: action.payload,
      };
    case ERROR_MESSAGE_ACTION_TYPES.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case ERROR_MESSAGE_ACTION_TYPES.REMOVE_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case GENERIC_SERVER_ERROR_ACTION_TYPES.SET_GENERIC_SERVER_ERROR_TRUE:
      return {
        ...state,
        genericServerError: action.payload,
      };
    case GENERIC_SERVER_ERROR_ACTION_TYPES.SET_GENERIC_SERVER_ERROR_FALSE:
      return {
        ...state,
        genericServerError: action.payload,
      };
    default:
      return state;
  }
};
