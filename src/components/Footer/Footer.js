import './Footer.css';
import linkedinIcon from '../../images/linkedin_icon.png'
import githubIcon from '../../images/github.svg'

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className="footer">
      <p className="footer__copyright">© {year} NewsExplorer - Powered by News API</p>
      <div className='footer__wrapper'>
        <a className='footer__link'>Home</a>
        <a className='footer__link'>Visit my Portfolio</a>
        <img src={githubIcon} className='footer__icon'></img>
        <img src={linkedinIcon} className='footer__icon'></img>
      </div>
    </footer>
  )
}

export default Footer;
