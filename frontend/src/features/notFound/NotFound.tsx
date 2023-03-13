import React from 'react';
import './NotFound.scss';

function NotFound(): JSX.Element {
  return (
    <div className="error-container">
      <img
        src="/image/error.png"
        alt="error"
        className="error-img"
      />
      <p className="error-title">404 خطا</p>
      <p className="error-text">صفحه یافت نشد</p>
    </div>
  );
}

export default NotFound;
