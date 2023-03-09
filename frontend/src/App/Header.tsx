import React from 'react';
import { Link } from 'react-router-dom';

function Header(): JSX.Element {
  return (
    <header>
      <div>
        <Link to="#">Home</Link>
        <Link to="#">8 дней</Link>
        <Link to="#">10 дней</Link>
        <Link to="#">Свой тур</Link>
        <Link to="#">FAQ</Link>
      </div>
      <br />
      <br />
    </header>
  );
}

export default Header;
