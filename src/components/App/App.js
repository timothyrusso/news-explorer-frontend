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
import { useState, useEffect, useLayoutEffect } from 'react';
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
} from '../../store/user/user.actions';
import {
  fetchArticlesAction,
  setShowMoreArticlesAction,
} from '../../store/article/article.actions';
import {
  setIsSigninPopupOpenAction,
  setIsSigninPopupClosedAction,
  setIsSignupPopupOpenAction,
  setIsSignupPopupClosedAction,
  setInfoTooltipOpenAction,
  setInfoTooltipClosedAction,
  setIsLoadingTrueAction,
  setIsLoadingFalseAction,
  setIsLoadingTextTrueAction,
  setIsLoadingTextFalseAction,
  setIsLoggedinTrueAction,
  setIsLoggedinFalseAction,
  setIsBlackNavbarTrueAction,
  setIsBlackNavbarFalseAction,
  setIsMobileNavbarOppositeAction,
  setIsMobileNavbarFalseAction,
} from '../../store/toggles/toggles.actions';
import {
  setIsFormValidityTrueAction,
  setIsFormValidityFalseAction,
} from '../../store/errors/errors.actions';

const App = () => {
  const [errorMessage, setErrorMessage] = useState({});
  const [popupRedirectText, setPopupRedirectText] = useState('');
  const [savedCard, setSavedCard] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [newsObject, setNewsObject] = useState([]);
  const [next, setNext] = useState(3);
  const [serverError, setServerError] = useState(false);
  const [popupServerError, setPopupServerError] = useState('');
  const [cards, setCards] = useState([]); // Saved articles from the user
  const [keyword, setKeyword] = useState('');
  const [keywordsList, setKeywordsList] = useState([]);
  const [cardToSave, setCardToSave] = useState([]);

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

  const jwt = localStorage.getItem('jwt');

  const showMoreButtonLogic = next < newsObject.length;
  let arrayForHoldingNews = [];

  const closeAllPopups = () => {
    dispatch(setIsSigninPopupClosedAction());
    dispatch(setIsSignupPopupClosedAction());
    dispatch(setInfoTooltipClosedAction());
    setPopupServerError('');
  };

  const startLoadingText = () => {
    dispatch(setIsLoadingTextTrueAction());
  };

  const startLoadingNews = () => {
    setShowNews(false);
    dispatch(setIsLoadingTrueAction());
  };

  const onFormUpdate = (data) => {
    data
      ? dispatch(setIsFormValidityTrueAction())
      : dispatch(setIsFormValidityFalseAction());
  };

  const checkValidity = (evt) => {
    const name = evt.target.name;
    setErrorMessage({ ...errorMessage, [name]: evt.target.validationMessage });
  };

  const handleSigninPopupClick = () => {
    dispatch(setIsFormValidityTrueAction());
    setErrorMessage({});
    closeAllPopups();
    setPopupRedirectText('Sign up');
    dispatch(setIsSigninPopupOpenAction());
  };

  const handleSwitchPopup = () => {
    if (isSigninPopupOpen) {
      dispatch(setIsSigninPopupClosedAction());
      dispatch(setIsSignupPopupOpenAction());
      setPopupRedirectText('Sign in');
    } else if (isSignupPopupOpen) {
      dispatch(setIsSignupPopupClosedAction());
      dispatch(setIsSigninPopupOpenAction());
      setPopupRedirectText('Sign up');
    }
  };

  const handleLogout = () => {
    dispatch(setIsLoggedinFalseAction());
    history('/');
    localStorage.removeItem('jwt');
    dispatch(logoutUserAction({}));
    setCards([]);
  };

  const toggleNav = () => {
    dispatch(setIsMobileNavbarOppositeAction(!isMobileNavbar));
  };

  const showMoreResults = () => {
    loopArticlesWithSlice(next, next + newsPerPage);
    setNext(next + newsPerPage);
  };

  const loopArticlesWithSlice = (start, end) => {
    const slicedNews = newsObject.slice(start, end);
    arrayForHoldingNews = [...newsArticles, ...slicedNews];
    dispatch(setShowMoreArticlesAction(arrayForHoldingNews));
  };

  const activateSearch = (data, start = startpoint, end = newsPerPage) => {
    localStorage.removeItem('news');
    setNext(3);
    setServerError(false);
    setKeyword(data.search);

    getNewsInfo({ search: data.search })
      .then((data) => {
        localStorage.setItem('news', JSON.stringify(data.articles));
        dispatch(
          fetchArticlesAction(
            JSON.parse(localStorage.getItem('news')).slice(start, end)
          )
        );
        setNewsObject(JSON.parse(localStorage.getItem('news')));
      })
      .catch((err) => {
        console.log(err);
        setServerError(true);
      })
      .finally(() => {
        dispatch(setIsLoadingFalseAction());
        setShowNews(true);
      });
  };

  const handleRegisterSubmit = (email, password, name) => {
    register(email, password, name)
      .then((res) => {
        if (res.data._id) {
          console.log('res OK');
          closeAllPopups(true);
          dispatch(setInfoTooltipOpenAction());
        } else {
          console.log('Something went wrong.');
        }
      })
      .catch((err) => {
        setPopupServerError(err.message);
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
          closeAllPopups(true);
          dispatch(setIsLoadingTextFalseAction());
        }
      })
      .then(() => {
        if (cardToSave.length !== 0) {
          handleBookmarkClick(cardToSave);
        }
      })
      .catch((err) => {
        setPopupServerError(err.message);
        dispatch(setIsLoadingTextFalseAction());
        console.log(err);
      })
      .finally(() => {
        setCardToSave([]);
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
      keyword,
      title: article.title,
      text: article.content,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    })
      .then((newArticle) => {
        setCards([newArticle, ...cards]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteArticles = (article) => {
    deleteArticles({ articleId: article._id })
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== article._id));
      })
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
    setCardToSave(card);
  };

  const checkSavedArticle = (article) => {
    const savedArticle = cards.find((data) => data.link === article.url);
    return savedArticle;
  };

  const checkKeywords = () => {
    const keywords = cards.map((x) => x.keyword);
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
    setKeywordsList(keywordsOrdered);
  };

  const openPopupIfNotLoggedin = () => {
    !jwt && handleSigninPopupClick();
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        dispatch(setIsBlackNavbarFalseAction());
        setSavedCard(false);
        dispatch(setIsMobileNavbarFalseAction());
        return;
      case '/saved-news':
        dispatch(setIsBlackNavbarTrueAction());
        setSavedCard(true);
        openPopupIfNotLoggedin();
        dispatch(setIsMobileNavbarFalseAction());
        return;
      default:
        return;
    } // eslint-disable-next-line
  }, [location, setSavedCard, dispatch]);

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
          setCards(data);
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
  }, [cards]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="content">
      <Navigation
        onSigninPopupClick={handleSigninPopupClick}
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
              <Header
                startLoadingNews={startLoadingNews}
                activateSearch={activateSearch}
              />
              {showNews && newsArticles.length !== 0 && (
                <NewsCardList
                  onSigninPopupClick={handleSigninPopupClick}
                  loggedIn={isLoggedIn}
                  newsArticles={newsArticles}
                  showMoreResults={showMoreResults}
                  showMoreButtonLogic={showMoreButtonLogic}
                  handleBookmarkClick={handleBookmarkClick}
                  checkSavedArticle={checkSavedArticle}
                  saveUnauthorizedUserCard={saveUnauthorizedUserCard}
                />
              )}
              {newsArticles.length === 0 &&
                !isLoading &&
                showNews &&
                !serverError && (
                  <NothingFound
                    title={'Nothing found'}
                    text={'Sorry, but nothing matched your search terms.'}
                    nothingFoundIcom={nothingFoundIcom}
                  />
                )}
              {serverError && (
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
                onClose={closeAllPopups}
                onSwitch={handleSwitchPopup}
                popupRedirectText={popupRedirectText}
                isLoadingText={isLoadingText}
                startLoadingText={startLoadingText}
                formValidity={formValidity}
                onFormUpdate={onFormUpdate}
                errorMessage={errorMessage}
                onInputUpdate={checkValidity}
                handleLoginSubmit={handleLoginSubmit}
                popupServerError={popupServerError}
              />
              <Register
                isOpen={isSignupPopupOpen}
                onClose={closeAllPopups}
                onSwitch={handleSwitchPopup}
                popupRedirectText={popupRedirectText}
                isLoadingText={isLoadingText}
                startLoadingText={startLoadingText}
                formValidity={formValidity}
                onFormUpdate={onFormUpdate}
                errorMessage={errorMessage}
                onInputUpdate={checkValidity}
                handleRegisterSubmit={handleRegisterSubmit}
                popupServerError={popupServerError}
              />
              <InfoTooltip
                isOpen={isInfoTooltipOpen}
                onClose={closeAllPopups}
                openSignin={handleSigninPopupClick}
              />
            </>
          }
        />
        <Route
          path="/saved-news"
          element={
            <ProtectedRoute loggedIn={jwt} path={'/'}>
              <>
                <SavedNewsHeader cards={cards} keywordsList={keywordsList} />
                <SavedNews
                  cards={cards}
                  savedCard={savedCard}
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
