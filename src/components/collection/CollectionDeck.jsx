import React from 'react';
import PropTypes from 'prop-types';
import StandardCard from '../Cards/StandardCard';

const CollectionDeck = props => {
  const { deckSelect, handleHover, handleClick, cardClass, index } = props;
  return (
    <div className="collection-deck">
      {deckSelect.map(character => (
        <StandardCard
          handleHover={handleHover}
          handleClick={handleClick}
          combat={character.powerstats.combat}
          durability={character.powerstats.durability}
          image={character.images.md}
          index={index}
          key={character.id}
          cardClass={cardClass}
        />
      ))}
    </div>
  );
};

CollectionDeck.propTypes = {
  deckSelect: PropTypes.arrayOf.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default CollectionDeck;
