import './Navigation.css';
import logo from '../../images/NewsExplorer.svg'

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt='' className='logo'></img>
      <div className='navigation__wrapper'>
        <a href='' className='navigation__link'>Home</a>
        <button aria-label="signin" type="button" className='navigation__button'>Sign in</button>
      </div>
    </div>
  );
}

export default Navigation;
