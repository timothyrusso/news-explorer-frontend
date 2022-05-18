import "./App.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import SigninPopup from "../SigninPopup/SigninPopup";
import SignupPopup from "../SignupPopup/SignupPopup";
import NothingFound from "../NothingFound/NothingFound";
import { useState, useEffect, useLayoutEffect } from "react";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Preloader from "../Preloader/Preloader";
import NewsCardList from "../NewsCardList/NewsCardList";
import { cards } from "../../utils/testCards";
import {
  Route,
  Routes,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNews from "../SavedNews/SavedNews";
import { getNewsInfo } from "../../utils/api";

const App = () => {
  const [isSigninPopupOpen, setIsSigninPopupOpen] = useState(false);
  const [isSignupPopupOpen, setIsSignupPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formValidity, setFormValidity] = useState(true);
  const [errorMessage, setErrorMessage] = useState({});
  const [popupRedirectText, setPopupRedirectText] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [blackNavigator, setBlackNavigator] = useState(false);
  const [savedCard, setSavedCard] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [newsArticles, setNewsArticles] = useState([]);
  const [newsObject, setNewsObject] = useState([]);
  const [next, setNext] = useState(3);

  const location = useLocation();
  const history = useNavigate();

  const showMoreButtonLogic = next < newsObject.length;
  const newsPerPage = 3;
  let arrayForHoldingNews = [];
  const startpoint = 0;

  const closeAllPopups = () => {
    setIsSigninPopupOpen(false);
    setIsSignupPopupOpen(false);
    setIsInfoTooltipOpen(false);
  };

  const startLoading = () => {
    setIsLoading(true);
  };

  const startLoadingNews = () => {
    setShowNews(false);
    setIsLoading(true);
  };

  const onFormUpdate = (data) => {
    data ? setFormValidity(true) : setFormValidity(false);
  };

  const checkValidity = (evt) => {
    const name = evt.target.name;
    setErrorMessage({ ...errorMessage, [name]: evt.target.validationMessage });
  };

  const handleSigninPopupClick = () => {
    setFormValidity(true);
    setErrorMessage({});
    closeAllPopups();
    setPopupRedirectText("Sign up");
    setIsSigninPopupOpen(true);
  };

  const handleSwitchPopup = () => {
    if (isSigninPopupOpen) {
      setIsSigninPopupOpen(false);
      setIsSignupPopupOpen(true);
      setPopupRedirectText("Sign in");
    } else if (isSignupPopupOpen) {
      setIsSignupPopupOpen(false);
      setIsSigninPopupOpen(true);
      setPopupRedirectText("Sign up");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    history("/");
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const showMoreResults = () => {
    loopArticlesWithSlice(next, next + newsPerPage);
    setNext(next + newsPerPage);
  };

  const loopArticlesWithSlice = (start, end) => {
    const slicedNews = newsObject.slice(start, end);
    arrayForHoldingNews = [...newsArticles, ...slicedNews];
    setNewsArticles(arrayForHoldingNews);
  };

  const activateSearch = (data, start = startpoint, end = newsPerPage) => {
    localStorage.removeItem("news");
    setNext(3);
    getNewsInfo({ search: data.search })
      .then((data) => {
        localStorage.setItem("news", JSON.stringify(data.articles));
        setNewsArticles(
          JSON.parse(localStorage.getItem("news")).slice(start, end)
        );
        setNewsObject(JSON.parse(localStorage.getItem("news")));
      })
      .finally(() => {
        setIsLoading(false);
        setShowNews(true);
      });
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBlackNavigator(false);
        setSavedCard(false);
        setToggleMenu(false);
        return;
      case "/saved-news":
        setBlackNavigator(true);
        setSavedCard(true);
        setToggleMenu(false);
        return;
    }
  }, [location, setBlackNavigator, setSavedCard, setToggleMenu]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="content">
      <Navigation
        onSigninPopupClick={handleSigninPopupClick}
        loggedIn={loggedIn}
        blackNavigator={blackNavigator}
        handleLogout={handleLogout}
        toggleMenu={toggleMenu}
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
                  cards={cards}
                  onSigninPopupClick={handleSigninPopupClick}
                  loggedIn={loggedIn}
                  newsArticles={newsArticles}
                  showMoreResults={showMoreResults}
                  showMoreButtonLogic={showMoreButtonLogic}
                />
              )}
              {newsArticles.length === 0 && !isLoading && showNews && (
                <NothingFound />
              )}
              {isLoading && <Preloader />}
              <Main />
              <SigninPopup
                isOpen={isSigninPopupOpen}
                onClose={closeAllPopups}
                onSwitch={handleSwitchPopup}
                popupRedirectText={popupRedirectText}
                isLoading={isLoading}
                startLoading={startLoading}
                formValidity={formValidity}
                onFormUpdate={onFormUpdate}
                errorMessage={errorMessage}
                onInputUpdate={checkValidity}
              />
              <SignupPopup
                isOpen={isSignupPopupOpen}
                onClose={closeAllPopups}
                onSwitch={handleSwitchPopup}
                popupRedirectText={popupRedirectText}
                isLoading={isLoading}
                startLoading={startLoading}
                formValidity={formValidity}
                onFormUpdate={onFormUpdate}
                errorMessage={errorMessage}
                onInputUpdate={checkValidity}
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
            <>
              <SavedNewsHeader />
              <SavedNews cards={cards} savedCard={savedCard} />
            </>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
