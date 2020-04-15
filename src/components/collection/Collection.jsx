import React from 'react';
import { useHistory } from 'react-router-dom';
import image from '../../img/cardskeleton.png';
import SmallCard from '../../components/Cards/SmallCard';
import StandardCard from '../../components/Cards/StandardCard';
import './Collection.css';

const Collection = () => {
  const history = useHistory();
  return (
    <div>
      <div className="collection-top">
        <div className="collection-deck">
          <p className="collection-deck-title">My Deck</p>
          <StandardCard />
          <StandardCard />
          <StandardCard />
        </div>
        <div className="collection-valid">
          <p className="collection-valid-title">Create your deck</p>
          <p className="collection-valid-check">You need 1 more card before fighting</p>
          <button
            className="collection-valid-fight"
            type="button"
            onClick={() => history.push('/Board')}
          >
            Fight
          </button>
        </div>
      </div>

      <div className="collection-bottom">
        <div className="collection-bottom-left">
          <div className="collection-filter">Filtre</div>

          <div className="collection-cards">
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>

        <div className="collection-big-card">
          <img className="collection-big-card-img" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
