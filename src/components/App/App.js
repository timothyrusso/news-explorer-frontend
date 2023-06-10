import './App.css';
import warningIcon from '../../images/warning.png';
import nothingFoundIcon from '../../images/not-found.svg';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NothingFound from '../NothingFound/NothingFound';
import { useEffect, useLayoutEffect } from 'react';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from '../Preloader/Preloader';
import NewsCardList from '../NewsCardList/NewsCardList';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getProfileInfo, getArticles } from '../../utils/MainApi';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../store/user/user.actions';
import {
  setIsSavedArticleTrueAction,
  setIsSavedArticleFalseAction,
  setSavedArticlesAction,
} from '../../store/article/article.actions';
import {
  setIsBlackNavbarTrueAction,
  setIsBlackNavbarFalseAction,
  setIsMobileNavbarFalseAction,
} from '../../store/toggles/toggles.actions';
import { usePopup } from '../../hooks/usePopup';
import { useAuthenticationApi } from '../../hooks/useAuthenticationApi';
import { useCheckKeywords } from '../../hooks/useCheckKeywords';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const newsArticles = useSelector((state) => state.article.articles);
  const isSigninPopupOpen = useSelector(
    (state) => state.toggles.isSigninPopupOpen
  );
  const isSignupPopupOpen = useSelector(
    (state) => state.toggles.isSignupPopupOpen
  );
  const isInfoTooltipOpen = useSelector(
    (state) => state.toggles.isInfoTooltipOpen
  );
  const isLoading = useSelector((state) => state.toggles.isLoading);
  const isLoadingText = useSelector((state) => state.toggles.isLoadingText);
  const isLoggedIn = useSelector((state) => state.toggles.isLoggedin);
  const showArticles = useSelector((state) => state.article.showArticles);
  const popupRedirectText = useSelector(
    (state) => state.toggles.popupRedirectText
  );
  const genericServerError = useSelector(
    (state) => state.errors.genericServerError
  );
  const popupServerErrorMessage = useSelector(
    (state) => state.errors.popupServerErrorMessage
  );
  const savedArticles = useSelector((state) => state.article.savedArticles);

  const { openPopupIfNotLoggedin } = usePopup();
  const { handleTokenCheck } = useAuthenticationApi();
  const { checkKeywords } = useCheckKeywords();

  const jwt = localStorage.getItem('jwt');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        dispatch(setIsBlackNavbarFalseAction());
        dispatch(setIsSavedArticleFalseAction());
        dispatch(setIsMobileNavbarFalseAction());
        return;
      case '/saved-news':
        dispatch(setIsBlackNavbarTrueAction());
        dispatch(setIsSavedArticleTrueAction());
        openPopupIfNotLoggedin();
        dispatch(setIsMobileNavbarFalseAction());
        return;
      default:
        return;
    } // eslint-disable-next-line
  }, [location, dispatch]);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt && isLoggedIn) {
      getProfileInfo()
        .then((info) => {
          dispatch(loginUserAction(info.data));
        })
        .catch((err) => {
          console.log(err);
        });
      getArticles()
        .then((data) => {
          dispatch(setSavedArticlesAction(data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    checkKeywords(); // eslint-disable-next-line
  }, [savedArticles]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="content">
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              {showArticles && newsArticles.length !== 0 && <NewsCardList />}
              {newsArticles.length === 0 &&
                !isLoading &&
                showArticles &&
                !genericServerError && (
                  <NothingFound
                    title={'Nothing found'}
                    text={'Sorry, but nothing matched your search terms.'}
                    nothingFoundIcon={nothingFoundIcon}
                  />
                )}
              {genericServerError && (
                <NothingFound
                  title={'Server error'}
                  text={
                    'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.'
                  }
                  nothingFoundIcon={warningIcon}
                />
              )}
              {isLoading && <Preloader />}
              <Main />
              <Login
                isOpen={isSigninPopupOpen}
                popupRedirectText={popupRedirectText}
                isLoadingText={isLoadingText}
                popupServerErrorMessage={popupServerErrorMessage}
              />
              <Register
                isOpen={isSignupPopupOpen}
                popupRedirectText={popupRedirectText}
                isLoadingText={isLoadingText}
                popupServerErrorMessage={popupServerErrorMessage}
              />
              <InfoTooltip isOpen={isInfoTooltipOpen} />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute loggedIn={jwt} path={'/'}>
              <>
                <SavedNewsHeader />
                <SavedNews />
              </>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
