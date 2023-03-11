import React from 'react';
import './Contact.scss';

function Contact(): JSX.Element {
  return (
    <div className="container">
      <h1 className="main-title">Контакты</h1>
      <div className="contact-container">
        <div className="contact-left">
          <img
            src="https://skazki-na-noch.ru/wp-content/themes/skazki/voini/contact.png"
            alt="contact"
          />
        </div>
        <div className="contact-right">
          <div className="form-block">
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
      </div>
    </div>
  );
}

export default Contact;
