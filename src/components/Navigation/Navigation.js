import './Navigation.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import logo from '../../images/NewsExplorer.svg'
import logout from '../../images/logout.svg'
import blackLogo from '../../images/NewsExplorerlogo-black.svg'
import blackLogout from '../../images/logout-black.svg'

const Navigation = ({ onSigninPopupClick, loggedIn, switchColor, blackNavigator, handleLogout }) => {

  const [navbarColor, setNavbarColor] = useState(false);

  let textColor = blackNavigator ? { color: 'black' } : { color: 'white' };
  let buttonColor = blackNavigator ? { color: 'black', borderColor: 'black' } : { color: 'white', borderColor: 'white' };

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarColor(true)
    } else {
      setNavbarColor(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <div className={`navigation ${navbarColor ? "navigation_type_scroll" : ""}`}>
      <Link to={'/'} className='logo'><img src={blackNavigator ? blackLogo : logo} alt=''></img></Link>
      <div className='navigation__wrapper'>
        <Link to={'/'} className='navigation__link' style={textColor} onClick={switchColor()}>Home</Link>
        <Link to={'/saved-news'} className={`navigation__link navigation__link_type_saved ${!loggedIn ? "navigation__disabled" : ""}`} style={textColor} onClick={switchColor()}>Saved articles</Link>
        <button aria-label="signin" type="button" className={`navigation__button ${loggedIn ? "navigation__disabled" : ""}`} onClick={onSigninPopupClick} style={buttonColor}>Sign in</button>
        <button aria-label="signout" type="button" className={`navigation__button navigation__button_type_logout ${!loggedIn ? "navigation__disabled" : ""}`} onClick={handleLogout} style={buttonColor}>TimothyTimothyffffff<img src={blackNavigator ? blackLogout : logout} alt='' className='navigation__logout-icon'></img></button>
      </div>
    </div>
  );
}

export default Navigation;
