import React from 'react';
import SHBSLong from '../../img/SHBSLong.png';
import playnowtext from '../../img/playnowtext.png';
import arrowswhite from '../../img/arrowswhite.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home-main">
      <div className="home-first-bg">
        <div className="home-assets">
          <img
            src={SHBSLong}
            alt="SuperHeroes Battle Simulator's title"
            className="home-shbs-title"
          />
          <div className="home-playnow-button">
            <img src={playnowtext} alt="Play now button text" />
          </div>
          <img src={arrowswhite} alt="Arrows to scroll down" className="home-arrows" />
        </div>
      </div>
    </div>
  );
};

export default Home;
