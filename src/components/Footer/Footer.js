import "./Footer.css";
import linkedinIcon from "../../images/linkedin_icon.png";
import githubIcon from "../../images/github.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {year} NewsExplorer - Powered by News API
      </p>
      <div className="footer__wrapper">
        <Link to={"/"} className="footer__link">
          Home
        </Link>
        <a href="https://timothyrusso.tech/" target="_blank" className="footer__link">
          Visit my Portfolio
        </a>
        <img src={githubIcon} className="footer__icon"></img>
        <img src={linkedinIcon} className="footer__icon"></img>
      </div>
    </footer>
  );
};

export default Footer;
