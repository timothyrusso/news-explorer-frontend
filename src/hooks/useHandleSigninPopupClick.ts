import { useDispatch } from 'react-redux';
import { useCloseAllPopups } from './useCloseallPopups';
import {
  setIsFormValidityTrueAction,
  removeErrorMessageAction,
} from '../store/errors/errors.actions';
import {
  setPopupRedirectTextSignupAction,
  setIsSigninPopupOpenAction,
} from '../store/toggles/toggles.actions';

export const useHandleSigninPopupClick = () => {
  const dispatch = useDispatch();
  const { closeAllPopups } = useCloseAllPopups();

  const handleSigninPopupClick = () => {
    dispatch(setIsFormValidityTrueAction());
    dispatch(removeErrorMessageAction());
    closeAllPopups();
    dispatch(setPopupRedirectTextSignupAction('Sign up'));
    dispatch(setIsSigninPopupOpenAction());
  };

  return { handleSigninPopupClick };
};
