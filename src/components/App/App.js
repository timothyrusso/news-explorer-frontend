import './App.css';
import nothingFoundIcom from '../../images/not-found.svg';
import warningIcon from '../../images/warning.png';
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
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { getNewsInfo } from '../../utils/api';
import { newsPerPage, startpoint } from '../../utils/constants';
import {
  register,
  authorize,
  checkToken,
  getProfileInfo,
  getArticles,
  saveArticles,
  deleteArticles,
} from '../../utils/MainApi';
import { useDispatch, useSelector } from 'react-redux';
import {
  loginUserAction,
  logoutUserAction,
  setSearchKeywordAction,
  setSearchKeywordsListAction,
} from '../../store/user/user.actions';
import {
  fetchArticlesAction,
  setShowMoreArticlesAction,
  setIsSavedArticleTrueAction,
  setIsSavedArticleFalseAction,
  setShowArticleTrueAction,
  fetchAllArticlesAction,
  setNextThreeArticlesToThreeAction,
  setNextThreeArticlesToPayloadAction,
  setSavedArticlesAction,
  removeSingleSavedArticleAction,
  removeAllSavedArticlesAction,
  setTemporarySavedArticleAction,
  removeTemporarySavedArticleAction,
} from '../../store/article/article.actions';
import {
  setIsSigninPopupOpenAction,
  setIsSigninPopupClosedAction,
  setIsSignupPopupOpenAction,
  setIsSignupPopupClosedAction,
  setInfoTooltipOpenAction,
  setIsLoadingFalseAction,
  setIsLoadingTextFalseAction,
  setIsLoggedinTrueAction,
  setIsLoggedinFalseAction,
  setIsBlackNavbarTrueAction,
  setIsBlackNavbarFalseAction,
  setIsMobileNavbarOppositeAction,
  setIsMobileNavbarFalseAction,
  setPopupRedirectTextSigninAction,
  setPopupRedirectTextSignupAction,
} from '../../store/toggles/toggles.actions';
import {
  setGenericServerErrorTrueAction,
  setGenericServerErrorFalseAction,
  setPopupserverErrorMessageAction,
} from '../../store/errors/errors.actions';
import { useCloseAllPopups } from '../../hooks/useCloseallPopups';
import { useHandleSigninPopupClick } from '../../hooks/useHandleSigninPopupClick';

const App = () => {
  const location = useLocation();
  const history = useNavigate();
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
  const isBlackNavbar = useSelector((state) => state.toggles.isBlackNavbar);
  const isMobileNavbar = useSelector((state) => state.toggles.isMobileNavbar);
  const formValidity = useSelector((state) => state.errors.formValidity);
  const isSavedArticle = useSelector((state) => state.article.isSavedArticle);
  const showArticles = useSelector((state) => state.article.showArticles);
  const popupRedirectText = useSelector(
    (state) => state.toggles.popupRedirectText
  );
  const allArticles = useSelector((state) => state.article.allArticles);
  const nextThreeArticles = useSelector(
    (state) => state.article.nextThreeArticles
  );
  const genericServerError = useSelector(
    (state) => state.errors.genericServerError
  );
  const popupServerErrorMessage = useSelector(
    (state) => state.errors.popupServerErrorMessage
  );
  const savedArticles = useSelector((state) => state.article.savedArticles);
  const searchKeyword = useSelector((state) => state.user.searchKeyword);
  const searchKeywordsList = useSelector(
    (state) => state.user.searchKeywordsList
  );
  const temporarySavedArticle = useSelector(
    (state) => state.article.temporarySavedArticle
  );

  const { closeAllPopups } = useCloseAllPopups();
  const { handleSigninPopupClick } = useHandleSigninPopupClick();

  const jwt = localStorage.getItem('jwt');

  let arrayForHoldingNews = [];

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

  const handleLogout = () => {
    dispatch(setIsLoggedinFalseAction());
    history('/');
    localStorage.removeItem('jwt');
    dispatch(logoutUserAction({}));
    dispatch(removeAllSavedArticlesAction());
  };

  const toggleNav = () => {
    dispatch(setIsMobileNavbarOppositeAction(!isMobileNavbar));
  };

  const showMoreResults = () => {
    loopArticlesWithSlice(nextThreeArticles, nextThreeArticles + newsPerPage);
    dispatch(
      setNextThreeArticlesToPayloadAction(nextThreeArticles + newsPerPage)
    );
  };

  const loopArticlesWithSlice = (start, end) => {
    const slicedNews = allArticles.slice(start, end);
    arrayForHoldingNews = [...newsArticles, ...slicedNews];
    dispatch(setShowMoreArticlesAction(arrayForHoldingNews));
  };

  const activateSearch = (data, start = startpoint, end = newsPerPage) => {
    localStorage.removeItem('news');
    dispatch(setNextThreeArticlesToThreeAction());
    dispatch(setGenericServerErrorFalseAction());
    dispatch(setSearchKeywordAction(data.search));

    getNewsInfo({ search: data.search })
      .then((data) => {
        localStorage.setItem('news', JSON.stringify(data.articles));
        dispatch(
          fetchArticlesAction(
            JSON.parse(localStorage.getItem('news')).slice(start, end)
          )
        );
        dispatch(
          fetchAllArticlesAction(JSON.parse(localStorage.getItem('news')))
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(setGenericServerErrorTrueAction());
      })
      .finally(() => {
        dispatch(setIsLoadingFalseAction());
        dispatch(setShowArticleTrueAction());
      });
  };

  const handleRegisterSubmit = (email, password, name) => {
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

  const handleLoginSubmit = (password, email) => {
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
        if (temporarySavedArticle.length !== 0) {
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

  const handleTokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      checkToken(jwt)
        .then((res) => {
          if (res) {
            dispatch(setIsLoggedinTrueAction());
          } else {
            localStorage.removeItem('jwt');
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSaveArticles = (article) => {
    saveArticles({
      keyword: searchKeyword,
      title: article.title,
      text: article.content,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    })
      .then((newArticle) => {
        dispatch(setSavedArticlesAction([newArticle, ...savedArticles]));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteArticles = (article) => {
    deleteArticles({ articleId: article._id })
      .then(() => dispatch(removeSingleSavedArticleAction(article._id)))
      .catch((err) => {
        console.log(err);
      });
  };

  const handleBookmarkClick = (article) => {
    if (!checkSavedArticle(article)) {
      handleSaveArticles(article);
    } else {
      handleDeleteArticles(checkSavedArticle(article));
    }
  };

  const saveUnauthorizedUserCard = (card) => {
    dispatch(setTemporarySavedArticleAction(card));
  };

  const checkSavedArticle = (article) => {
    const savedArticle = savedArticles.find(
      (data) => data.link === article.url
    );
    return savedArticle;
  };

  const checkKeywords = () => {
    const keywords = savedArticles.map((x) => x.keyword);
    const count = {};

    for (let index = 0; index < keywords.length; index++) {
      const element = keywords[index];

      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
    }

    const keywordsOrdered = Object.entries(count)
      .sort((a, b) => b[1] - a[1])
      .map((element) => element[0]);
    dispatch(setSearchKeywordsListAction(keywordsOrdered));
  };

  const openPopupIfNotLoggedin = () => {
    !jwt && handleSigninPopupClick();
  };

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
      <Navigation
        loggedIn={isLoggedIn}
        isBlackNavbar={isBlackNavbar}
        handleLogout={handleLogout}
        toggleMenu={isMobileNavbar}
        toggleNav={toggleNav}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header activateSearch={activateSearch} />
              {showArticles && newsArticles.length !== 0 && (
                <NewsCardList
                  loggedIn={isLoggedIn}
                  newsArticles={newsArticles}
                  showMoreResults={showMoreResults}
                  handleBookmarkClick={handleBookmarkClick}
                  checkSavedArticle={checkSavedArticle}
                  saveUnauthorizedUserCard={saveUnauthorizedUserCard}
                />
              )}
              {newsArticles.length === 0 &&
                !isLoading &&
                showArticles &&
                !genericServerError && (
                  <NothingFound
                    title={'Nothing found'}
                    text={'Sorry, but nothing matched your search terms.'}
                    nothingFoundIcom={nothingFoundIcom}
                  />
                )}
              {genericServerError && (
                <NothingFound
                  title={'Server error'}
                  text={
                    'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later.'
                  }
                  nothingFoundIcom={warningIcon}
                />
              )}
              {isLoading && <Preloader />}
              <Main />
              <Login
                isOpen={isSigninPopupOpen}
                onSwitch={handleSwitchPopup}
                popupRedirectText={popupRedirectText}
                isLoadingText={isLoadingText}
                formValidity={formValidity}
                handleLoginSubmit={handleLoginSubmit}
                popupServerErrorMessage={popupServerErrorMessage}
              />
              <Register
                isOpen={isSignupPopupOpen}
                onSwitch={handleSwitchPopup}
                popupRedirectText={popupRedirectText}
                isLoadingText={isLoadingText}
                handleRegisterSubmit={handleRegisterSubmit}
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
                <SavedNewsHeader
                  savedArticles={savedArticles}
                  searchKeywordsList={searchKeywordsList}
                />
                <SavedNews
                  savedArticles={savedArticles}
                  isSavedArticle={isSavedArticle}
                  handleDeleteArticles={handleDeleteArticles}
                  checkSavedArticle={checkSavedArticle}
                  saveUnauthorizedUserCard={saveUnauthorizedUserCard}
                />
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
