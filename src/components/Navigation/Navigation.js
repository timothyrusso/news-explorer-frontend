import "./Navigation.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../images/NewsExplorer.svg";
import logout from "../../images/logout.svg";
import blackLogo from "../../images/NewsExplorerlogo-black.svg";
import blackLogout from "../../images/logout-black.svg";

const Navigation = ({
  onSigninPopupClick,
  loggedIn,
  blackNavigator,
  handleLogout,
}) => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const location = useLocation();

  let textColor =
    blackNavigator && !toggleMenu ? { color: "black" } : { color: "white" };
  let buttonColor =
    blackNavigator && !toggleMenu
      ? { color: "black", borderColor: "black" }
      : { color: "white", borderColor: "white" };

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => window.removeEventListener("resize", changeWidth);
  }, []);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setToggleMenu(false);
        return;
      case "/saved-news":
        setToggleMenu(false);
        return;
    }
  }, [location, setToggleMenu]);

  return (
    <div className={toggleMenu && screenWidth < 600 ? "navigation" : ""}>
      <div
        className={`navigation__container ${
          navbarColor ? "navigation__container_type_scroll" : ""
        }`}
        style={
          toggleMenu && screenWidth < 600 ? { backgroundColor: "#1A1B22" } : {}
        }
      >
        <Link to={"/"} className="logo">
          <img
            src={blackNavigator && !toggleMenu ? blackLogo : logo}
            alt=""
          ></img>
        </Link>
        {(toggleMenu || screenWidth > 600) && (
          <div className="navigation__links-wrapper">
            <Link to={"/"} className="navigation__link" style={textColor}>
              Home
            </Link>
            <Link
              to={"/saved-news"}
              className={`navigation__link navigation__link_type_saved ${
                !loggedIn ? "navigation__disabled" : ""
              }`}
              style={textColor}
            >
              Saved articles
            </Link>
            <button
              aria-label="signin"
              type="button"
              className={`navigation__button navigation__button_type_signin ${
                loggedIn ? "navigation__disabled" : ""
              }`}
              onClick={onSigninPopupClick}
              style={buttonColor}
            >
              Sign in
            </button>
            <button
              aria-label="signout"
              type="button"
              className={`navigation__button navigation__button_type_logout ${
                !loggedIn ? "navigation__disabled" : ""
              }`}
              onClick={handleLogout}
              style={buttonColor}
            >
              TimothyTimothyffffff
              <img
                src={blackNavigator && !toggleMenu ? blackLogout : logout}
                alt=""
                className="navigation__logout-icon"
              ></img>
            </button>
          </div>
        )}
        <button
          onClick={toggleNav}
          className={`burgher-button
          ${blackNavigator && !toggleMenu && "burgher-button_type_black"}
          ${
            toggleMenu
              ? "burgher-button_type_open"
              : "burgher-button_type_white"
          }`}
        ></button>
      </div>
    </div>
  );
};

export default Navigation;
