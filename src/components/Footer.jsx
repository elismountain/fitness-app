
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
          <ul className="contacts__media-list">
            <li className="copywrite contacts__media-item">
              <p> <b> HappyFiit </b> workout project &copy; <b>2024</b></p>
            </li>
            <li className="contacts__media-item">
              <a className="contacts__media-button button" href="https://github.com/elismountain/fitness-app" aria-label="GitHub">
                <span className="iconify" data-icon="simple-icons:github" data-inline="false"></span>
              </a>
            </li>
          </ul>
    </footer>
  );
}

export default Footer;


