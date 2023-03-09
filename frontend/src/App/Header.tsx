import React from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
        <Link to="/tour8">8 дней</Link>
        <Link to="/tour10">10 дней</Link>
        <Link to="/mytour">Свой тур</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <br />
      <br />
    </header>
  );
}

export default Header;
