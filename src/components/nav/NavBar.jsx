import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/Logo SHBS.png';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Accueil SHBS" />
          </Link>
        </li>
        <li>The game</li>
        <li>
          <Link to="Collection">The cards</Link>
        </li>
        <li>
          <Link to="Stats">User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
