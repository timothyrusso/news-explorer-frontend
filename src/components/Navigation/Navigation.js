import './Navigation.css';
import logo from '../../images/NewsExplorer.svg'
import logout from '../../images/logout.svg'

const Navigation = ({ onSigninPopupClick, loggedIn }) => {
  return (
    <div className="navigation">
      <img src={logo} alt='' className='logo'></img>
      <div className='navigation__wrapper'>
        <a href='' className='navigation__link'>Home</a>
        <a href='' className={`navigation__link navigation__link_type_saved ${!loggedIn ? "navigation__disabled": ""}`}>Saved articles</a>
        <button aria-label="signin" type="button" className={`navigation__button ${loggedIn ? "navigation__disabled": ""}`} onClick={onSigninPopupClick}>Sign in</button>
        <button aria-label="signout" type="button" className={`navigation__button navigation__button_type_logout ${!loggedIn ? "navigation__disabled": ""}`} onClick={onSigninPopupClick}>Pippo<img src={logout} alt='' className='navigation__logout-icon'></img></button>
      </div>
    </div>
  );
}

export default Navigation;
