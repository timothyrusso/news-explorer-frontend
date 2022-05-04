import './Navigation.css';
import logo from '../../images/NewsExplorer.svg'
import logout from '../../images/logout.svg'
import blackLogo from '../../images/NewsExplorerlogo-black.svg'

const Navigation = ({ onSigninPopupClick, loggedIn, navigatorColor }) => {

  const setColorBlack = { color: 'black' };

  return (
    <div className="navigation">
      <img src={navigatorColor ? blackLogo : logo} alt='' className='logo'></img>
      <div className='navigation__wrapper'>
        <a href='' className='navigation__link' style={setColorBlack}>Home</a>
        <a href='' className={`navigation__link navigation__link_type_saved ${!loggedIn ? "navigation__disabled" : ""}`} style={setColorBlack}>Saved articles</a>
        <button aria-label="signin" type="button" className={`navigation__button ${loggedIn ? "navigation__disabled" : ""}`} onClick={onSigninPopupClick} style={setColorBlack}>Sign in</button>
        <button aria-label="signout" type="button" className={`navigation__button navigation__button_type_logout ${!loggedIn ? "navigation__disabled" : ""}`} onClick={onSigninPopupClick}>Pippo<img src={logout} alt='' className='navigation__logout-icon'></img></button>
      </div>
    </div>
  );
}

export default Navigation;
