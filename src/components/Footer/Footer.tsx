import React from 'react';
import linkedinIcon from '../../images/linkedin_icon.png';
import githubIcon from '../../images/github.svg';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © {year} NewsExplorer - Powered by{' '}
        <a href="https://newsapi.org/" target="_blank" rel="noreferrer">
          News API
        </a>
      </p>
      <nav className="footer__wrapper">
        <Link to={'/'} className="footer__link">
          Home
        </Link>
        <a
          href="https://timothyrusso.dev/"
          target="_blank"
          rel="noreferrer"
          className="footer__link footer__link_type_mobile"
        >
          Portfolio
        </a>
        <ul className="footer__icon-wrapper">
          <a
            href="https://github.com/timothyrusso"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={githubIcon}
              className="footer__icon"
              alt="GitHub logo"
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/in/russotimothysoftwareengineer/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={linkedinIcon}
              className="footer__icon"
              alt="LinkedIn Logo"
            ></img>
          </a>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
