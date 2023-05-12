import { useDispatch } from 'react-redux';
import {
  setIsSigninPopupClosedAction,
  setIsSignupPopupClosedAction,
  setInfoTooltipClosedAction,
} from '../store/toggles/toggles.actions';
import { setPopupserverErrorMessageAction } from '../store/errors/errors.actions';

export const useCloseAllPopups = () => {
  const dispatch = useDispatch();

  const closeAllPopups = () => {
    dispatch(setIsSigninPopupClosedAction());
    dispatch(setIsSignupPopupClosedAction());
    dispatch(setInfoTooltipClosedAction());
    dispatch(setPopupserverErrorMessageAction(''));
  };

  return { closeAllPopups };
};
