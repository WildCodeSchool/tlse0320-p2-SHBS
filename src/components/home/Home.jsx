import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav/NavBar';
import SHBSLong from '../../img/SHBSLong.png';
import playnowtext from '../../img/playnowtext.png';
import arrowswhite from '../../img/arrowswhite.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-main">
      <NavBar />
      <div className="home-first-bg">
        <div className="home-assets">
          <img
            src={SHBSLong}
            alt="SuperHeroes Battle Simulator's title"
            className="home-shbs-title"
          />
          <Link to="Collection" className="home-playnow-button">
            <img src={playnowtext} alt="Play now button text" />
          </Link>
          <img src={arrowswhite} alt="Arrows to scroll down" className="home-arrows" />
        </div>
      </div>
      <div className="home-second-page">
        <div>
          <img
            src="https://via.placeholder.com/720x480.png?text=Board Presentation"
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
