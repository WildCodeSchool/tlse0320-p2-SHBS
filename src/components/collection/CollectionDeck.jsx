import React from 'react';
import PropTypes from 'prop-types';
import StandardCard from '../Cards/StandardCard';
import skeletonCard from '../../img/cardskeleton.png';

const CollectionDeck = props => {
  const { deckSelect, handleHover, handleClick, cardClass } = props;
  return (
    <div className="collection-deck">
      {deckSelect.map(character =>
        character === 'empty' ? (
          <img className="collection-empty-card" src={skeletonCard} alt="Empty place" />
        ) : (
          <StandardCard
            handleHover={handleHover}
            handleClick={handleClick}
            combat={character.powerstats.combat}
            durability={character.powerstats.durability}
            image={character.images.md}
            index={character.index}
            key={character.id}
            cardClass={cardClass}
          />
        )
      )}
    </div>
  );
};

CollectionDeck.propTypes = {
  deckSelect: PropTypes.arrayOf.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired
};

export default CollectionDeck;
