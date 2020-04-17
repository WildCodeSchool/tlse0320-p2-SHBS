import React from 'react';
import { Link } from 'react-router-dom';
import LargeCard from '../Cards/LargeCard';
import StandardCard from '../Cards/StandardCard';
import titleCollection from '../../img/cardscollection.png';
import fightext from '../../img/Fightext.png';
import NavBar from '../nav/NavBar';
import './Collection.css';

const Collection = () => {
  return (
    <div className="collection-page">
      <NavBar />
      <img className="collection-title" src={titleCollection} alt="Collection" />
      <div className="collection-top">
        <p className="collection-deck-title">My Deck</p>
        <div className="collection-deck">
          <StandardCard />
          <StandardCard />
          <StandardCard />
        </div>
        <div className="collection-valid">
          <p className="collection-valid-title">Create your deck</p>
          <p className="collection-valid-check">You need 1 more card before fighting</p>
          <Link to="Board" className="collection-valid-fight">
            <img src={fightext} alt="Button to launch" />
          </Link>
        </div>
      </div>

      <div className="collection-bottom">
        <div className="collection-bottom-left">
          <div className="collection-filter">
            <input type="search" />
            <button type="button"> Filter </button>
          </div>

          <div className="collection-cards">
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
            <StandardCard />
          </div>
        </div>

        <div className="collection-big-card">
          <LargeCard />
        </div>
      </div>
    </div>
  );
};

export default Collection;
