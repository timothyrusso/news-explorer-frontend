import { register, authorize } from '../utils/MainApi';
import { useDispatch, useSelector } from 'react-redux';
import { usePopup } from './usePopup';
import {
  setInfoTooltipOpenAction,
  setIsLoadingTextFalseAction,
  setIsLoggedinTrueAction,
} from '../store/toggles/toggles.actions';
import { setPopupserverErrorMessageAction } from '../store/errors/errors.actions';
import { removeTemporarySavedArticleAction } from '../store/article/article.actions';
import { RootState } from '../store/RootState';
import { useHandleBookmarkClick } from './useHandleBookmarkClick';

export const useAuthenticationApi = (
  email: string,
  password: string,
  username: string
) => {
  const dispatch = useDispatch();
  const { closeAllPopups } = usePopup();
  const { handleBookmarkClick } = useHandleBookmarkClick();

  const temporarySavedArticle = useSelector(
    (state: RootState) => state.article.temporarySavedArticle
  );

  const handleRegisterSubmit = () => {
    register(email, password, username)
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

  const handleLoginSubmit = () => {
    if (!password || !email) {
      console.log('Email or password are not correct');
      return;
    }
    authorize(password, email)
      .then((data) => {
        if (data.token) {
          dispatch(setIsLoggedinTrueAction());
          closeAllPopups();
          dispatch(setIsLoadingTextFalseAction());
        }
      })
      .then(() => {
        if ('url' in temporarySavedArticle) {
          handleBookmarkClick(temporarySavedArticle);
        }
      })
      .catch((err) => {
        dispatch(setPopupserverErrorMessageAction(err.message));
        dispatch(setIsLoadingTextFalseAction());
        console.log(err);
      })
      .finally(() => {
        dispatch(removeTemporarySavedArticleAction());
      });
  };

  return { handleRegisterSubmit, handleLoginSubmit };
};
