import { register } from '../utils/MainApi';
import { useDispatch } from 'react-redux';
import { usePopup } from './usePopup';
import {
  setInfoTooltipOpenAction,
  setIsLoadingTextFalseAction,
} from '../store/toggles/toggles.actions';
import { setPopupserverErrorMessageAction } from '../store/errors/errors.actions';

export const useAuthenticationApi = (
  email: string,
  password: string,
  name: string
) => {
  const dispatch = useDispatch();
  const { closeAllPopups } = usePopup();

  const handleRegisterSubmit = () => {
    register(email, password, name)
      .then((res) => {
        if (res.data._id) {
          console.log('res OK');
          closeAllPopups();
          dispatch(setInfoTooltipOpenAction());
        } else {
          console.log('Something went wrong.');
        }
      })
      .catch((err) => {
        dispatch(setPopupserverErrorMessageAction(err.message));
        console.log(err);
      })
      .finally(() => {
        dispatch(setIsLoadingTextFalseAction());
      });
  };

  return { handleRegisterSubmit };
};
