import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './Footer.scss';

function Footer(): JSX.Element {
  const date = new Date();

  return (
    <footer>
      <div className="container footer-content">
        <div className="contact footer-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="contact">
          <ul>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/tour/1">Туры на 8 дней</Link>
            </li>
            <li>
              <Link to="/tour/2">Туры на 10 дней</Link>
            </li>
            <li>
              <Link to="/tour/3">Индивидуальные туры</Link>
            </li>
            <li>
              <Link to="/faq">Информация для туристов</Link>
            </li>
            <li>
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul className="contact-list">
            <li>Email:</li>
            <li>
              <a href="mailto: mazdeyasna.tourism@gmail.com">
                mazdeyasna.tourism@gmail.com
              </a>
            </li>
            <li>WhatsApp</li>
            <li>
              <a href="tel: +00989353082974">+00989353082974</a>
            </li>
            <li>Telegram</li>
            <li>
              <a href="tel: +00989353082974">+00989353082974</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy">&copy; {date.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
