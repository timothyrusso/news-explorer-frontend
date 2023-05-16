import { ErrorsActionTypes } from './errors.actions';
import {
  FORM_VALIDITY_ACTION_TYPES,
  ERROR_MESSAGE_ACTION_TYPES,
  GENERIC_SERVER_ERROR_ACTION_TYPES,
  POPUP_SERVER_ERROR_MESSAGE_ACTION_TYPES,
} from './errors.action.types';
import { ErrorMessage } from './error.type';

export type ErrorsState = {
  formValidity: boolean;
  errorMessage: ErrorMessage | {};
  genericServerError: boolean;
  popupServerErrorMessage: string;
};

const INITIAL_STATE: ErrorsState = {
  formValidity: true,
  errorMessage: {},
  genericServerError: false,
  popupServerErrorMessage: '',
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
    case POPUP_SERVER_ERROR_MESSAGE_ACTION_TYPES.SET_POPUP_SERVER_ERROR_MESSAGE:
      return {
        ...state,
        popupServerErrorMessage: action.payload,
      };
    default:
      return state;
  }
};
