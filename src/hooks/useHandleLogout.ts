import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsLoggedinFalseAction } from '../store/toggles/toggles.actions';
import { logoutUserAction } from '../store/user/user.actions';
import { removeAllSavedArticlesAction } from '../store/article/article.actions';

export const useHandleLogout = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = () => {
    dispatch(setIsLoggedinFalseAction());
    history('/');
    localStorage.removeItem('jwt');
    dispatch(logoutUserAction({}));
    dispatch(removeAllSavedArticlesAction());
  };

  return { handleLogout };
};
