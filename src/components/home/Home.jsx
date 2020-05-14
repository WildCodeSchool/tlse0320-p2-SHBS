import React from 'react';
import { Link } from 'react-router-dom';
import SecondHomePage from './SecondHomePage';
import RulesPage from './RulesPage';
import SHBSLong from '../../img/SHBSLong.png';
import playnowtext from '../../img/playnowtext.png';
import arrowswhite from '../../img/arrowswhite.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-first-bg">
        <div className="home-assets flex-column">
          <img
            src={SHBSLong}
            alt="SuperHeroes Battle Simulator's title"
            className="home-shbs-title"
          />
          <Link to="Collection" className="home-playnow-button button-splashbg">
            <img src={playnowtext} alt="Play now button text" />
          </Link>
          <a className="home-arrow-link" href="#home-bottom-encre">
            <img src={arrowswhite} alt="Arrows to scroll down" className="home-arrows" />
          </a>
        </div>
      </div>
      <SecondHomePage />
      <RulesPage />
    </div>
  );
};

export default Home;
