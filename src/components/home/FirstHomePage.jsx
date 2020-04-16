import React from 'react';
import { Link } from 'react-router-dom';
import SHBSLong from '../../img/SHBSLong.png';
import playnowtext from '../../img/playnowtext.png';
import arrowswhite from '../../img/arrowswhite.png';

const FirstHomePage = () => {
  return (
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
  );
};

export default FirstHomePage;
