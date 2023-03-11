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
            <form>
              <input type="text" placeholder="Выберите тур" />
              <input type="text" placeholder="Выберите тур" />
              <input type="text" placeholder="Выберите тур" />
              <button type="button">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
