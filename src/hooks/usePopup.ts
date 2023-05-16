import { useDispatch, useSelector } from 'react-redux';
import {
  setIsSigninPopupClosedAction,
  setIsSignupPopupClosedAction,
  setInfoTooltipClosedAction,
  setPopupRedirectTextSignupAction,
  setIsSigninPopupOpenAction,
  setIsSignupPopupOpenAction,
  setPopupRedirectTextSigninAction,
} from '../store/toggles/toggles.actions';
import {
  setPopupserverErrorMessageAction,
  setIsFormValidityTrueAction,
  removeErrorMessageAction,
} from '../store/errors/errors.actions';
import { RootState } from '../store/RootState';

export const usePopup = () => {
  const dispatch = useDispatch();
  const isSigninPopupOpen = useSelector(
    (state: RootState) => state.toggles.isSigninPopupOpen
  );
  const isSignupPopupOpen = useSelector(
    (state: RootState) => state.toggles.isSignupPopupOpen
  );

  const closeAllPopups = () => {
    dispatch(setIsSigninPopupClosedAction());
    dispatch(setIsSignupPopupClosedAction());
    dispatch(setInfoTooltipClosedAction());
    dispatch(setPopupserverErrorMessageAction(''));
  };

  const handleSigninPopupClick = () => {
    dispatch(setIsFormValidityTrueAction());
    dispatch(removeErrorMessageAction());
    closeAllPopups();
    dispatch(setPopupRedirectTextSignupAction('Sign up'));
    dispatch(setIsSigninPopupOpenAction());
  };

  const handleSwitchPopup = () => {
    if (isSigninPopupOpen) {
      dispatch(setIsSigninPopupClosedAction());
      dispatch(setIsSignupPopupOpenAction());
      dispatch(setPopupRedirectTextSigninAction('Sign in'));
    } else if (isSignupPopupOpen) {
      dispatch(setIsSignupPopupClosedAction());
      dispatch(setIsSigninPopupOpenAction());
      dispatch(setPopupRedirectTextSignupAction('Sign up'));
    }
  };

  return { closeAllPopups, handleSigninPopupClick, handleSwitchPopup };
};
