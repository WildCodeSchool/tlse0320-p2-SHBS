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
    <div className="collection-page darkcity-bg flex-column">
      <NavBar />
      <img className="collection-title page-title" src={titleCollection} alt="Collection" />
      <div className="collection-top flex-row">
        <h2 className="collection-deck-title">My Deck</h2>
        <div className="collection-deck flex-row">
          <StandardCard />
          <StandardCard />
          <StandardCard />
        </div>
        <div className="collection-valid flex-column">
          <p className="collection-valid-title bigger-P-Li">Create your deck</p>
          <p className="collection-valid-check bigger-P-Li">You need 1 more card before fighting</p>
          <Link to="Board" className="collection-valid-fight button-splashbg">
            <img src={fightext} alt="Button to launch" />
          </Link>
        </div>
      </div>

      <div className="collection-bottom flex-row">
        <div className="collection-bottom-left flex-column">
          <div className="collection-filter">
            <input type="search" />
            <button type="button"> Filter </button>
          </div>

          <div className="collection-cards flex-row">
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
