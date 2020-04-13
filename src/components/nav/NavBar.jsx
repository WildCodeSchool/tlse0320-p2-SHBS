import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <ul>
      <Link to="/Home">
        <li>Home</li>
      </Link>
      <Link to="Collection">
        <li>Collection</li>
      </Link>
      <Link to="Contact">
        <li>Contact</li>
      </Link>
      <Link to="Stats">
        <li>Stats</li>
      </Link>
    </ul>
  );
}

export default NavBar;
