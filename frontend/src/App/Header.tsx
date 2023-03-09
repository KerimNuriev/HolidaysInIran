import React from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header>
      <div>
        <Link style={{margin: 10}} to="/">Home</Link>
        <Link style={{margin: 10}} to="/tour8">8 дней</Link>
        <Link style={{margin: 10}} to="/tour10">10 дней</Link>
        <Link style={{margin: 10}} to="/mytour">Свой тур</Link>
        <Link style={{margin: 10}} to="/faq">FAQ</Link>
      </div>
      <br />
      <br />
    </header>
  );
}

export default Header;
