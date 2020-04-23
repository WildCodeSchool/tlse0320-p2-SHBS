import React from 'react';
import StandardCard from '../Cards/StandardCard';

const CollectionDeck = props => {
  const { deckSelect, handleHover, handleClick, cardClass } = props;
  return (
    <div className="collection-deck">
      {deckSelect.map(character => (
        <StandardCard
          handleHover={handleHover}
          handleClick={handleClick}
          combat={character.combat}
          durability={character.durability}
          image={character.image}
          index={character.index}
          key={character.id}
          cardClass={cardClass}
        />
      ))}
    </div>
  );
};

export default CollectionDeck;
