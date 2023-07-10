import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../images/NewsExplorer.svg';
import logout from '../../images/logout.svg';
import blackLogo from '../../images/NewsExplorerlogo-black.svg';
import blackLogout from '../../images/logout-black.svg';
import { usePopup } from '../../hooks/usePopup';
import { useHandleLogout } from '../../hooks/useHandleLogout';
import { setIsMobileNavbarOppositeAction } from '../../store/toggles/toggles.actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useScrollBehavior } from '../../hooks/useScrollBehavior';
import { useWindowResize } from '../../hooks/useWindowResize';
import './Navigation.css';

const Navigation = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const isMobileNavbar = useAppSelector(
    (state) => state.toggles.isMobileNavbar
  );
  const isLoggedIn = useAppSelector((state) => state.toggles.isLoggedin);
  const isBlackNavbar = useAppSelector((state) => state.toggles.isBlackNavbar);
  const toggleMenu = useAppSelector((state) => state.toggles.isMobileNavbar);

  const { handleSigninPopupClick } = usePopup();
  const { handleLogout } = useHandleLogout();
  const { navbarColor } = useScrollBehavior();
  const { screenWidth } = useWindowResize();

  const dispatch = useDispatch();

  const toggleNav = () => {
    dispatch(setIsMobileNavbarOppositeAction(!isMobileNavbar));
  };

  const location = useLocation();

  const colorRuleDefiner =
    (isBlackNavbar && !toggleMenu) || (screenWidth > 700 && isBlackNavbar);

  const buttonColor = colorRuleDefiner
    ? { color: 'black', borderColor: 'black' }
    : { color: 'white', borderColor: 'white' };

  return (
    <section
      className={`navigation ${
        toggleMenu && screenWidth < 700 ? 'navigation_type_mobile' : ''
      }`}
    >
      <nav
        className={`navigation__bar ${
          navbarColor ? 'navigation__bar_type_scroll' : ''
        }`}
        style={
          toggleMenu && screenWidth < 700 ? { backgroundColor: '#1A1B22' } : {}
        }
      >
        <Link to={'/'} className="logo">
          <img
            src={colorRuleDefiner ? blackLogo : logo}
            alt="NewsExplorer logo"
          ></img>
        </Link>
        {(toggleMenu || screenWidth > 700) && (
          <ul className="navigation__links-wrapper">
            <Link
              to={'/'}
              className={`navigation__link               ${
                location.pathname === '/' ? 'navigation__link_type_focus' : ''
              }`}
              style={buttonColor}
            >
              Home
            </Link>
            <Link
              to={'/saved-news'}
              className={`navigation__link navigation__link_type_saved ${
                !isLoggedIn ? 'navigation__disabled' : ''
              }
              ${
                location.pathname === '/saved-news'
                  ? 'navigation__link_type_focus'
                  : ''
              }
              `}
              style={buttonColor}
            >
              Saved articles
            </Link>
            <button
              aria-label="signin"
              type="button"
              className={`navigation__button navigation__button_type_signin ${
                isLoggedIn ? 'navigation__disabled' : ''
              }`}
              onClick={handleSigninPopupClick}
              style={buttonColor}
            >
              Sign in
            </button>
            <button
              aria-label="signout"
              type="button"
              className={`navigation__button navigation__button_type_logout ${
                !isLoggedIn ? 'navigation__disabled' : ''
              }`}
              onClick={handleLogout}
              style={buttonColor}
            >
              {'__v' in currentUser && currentUser.name}
              <img
                src={isBlackNavbar && !toggleMenu ? blackLogout : logout}
                alt="Logout logo"
                className="navigation__logout-icon"
              ></img>
            </button>
          </ul>
        )}
        <button
          onClick={toggleNav}
          className={`burgher-button
          ${isBlackNavbar && !toggleMenu && 'burgher-button_type_black'}
          ${
            toggleMenu
              ? 'burgher-button_type_open'
              : 'burgher-button_type_white'
          }`}
        ></button>
      </nav>
    </section>
  );
};

export default Navigation;
