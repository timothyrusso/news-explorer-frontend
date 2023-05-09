import { ErrorsActionTypes } from './errors.actions';
import {
  FORM_VALIDITY_ACTION_TYPES,
  ERROR_MESSAGE_ACTION_TYPES,
} from './errors.action.types';

export type errorsState = {
  formValidity: boolean;
  errorMessage: {};
};

const INITIAL_STATE: errorsState = {
  formValidity: true,
  errorMessage: {},
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
    default:
      return state;
  }
};
