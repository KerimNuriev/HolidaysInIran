import React from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App/App';
import store from './store';

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
          Главная: 'Main',
          'Туры в Иран': 'Tours to Iran',
          'Индивидуальные туры': 'individual tours',
          'Информация для туристов': 'tourist information',
          Контакты: 'Contacts',
        },
      },
      ru: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
          Главная: 'Главная',
          'Туры в Иран': 'Туры в Иран',
          'Индивидуальные туры': 'Индивидуальные туры',
          'Информация для туристов': 'Информация для туристов',
          Контакты: 'Контакты',
        },
      },
    },

    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
