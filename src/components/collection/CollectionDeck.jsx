import React from 'react';
import PropTypes from 'prop-types';
import StandardCard from '../Cards/StandardCard';
import emptycard from '../../img/emptycard.png';
import deckSelect2 from '../../img/deckSelect2.png';
import deckSelect1 from '../../img/deckSelect1.png';

const CollectionDeck = props => {
  const { deckSelect, handleHover, handleClick, cardClass } = props;
  return (
    <div className="collection-deck">
      <img className="collection-empty-card" src={deckSelect2} alt="open deck" />
      {deckSelect.map(character =>
        character === 'empty' ? (
          <img className="collection-empty-card" src={emptycard} alt="Empty place" />
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
      <img className="collection-empty-card" src={deckSelect1} alt="close deck" />
    </div>
  );
};

CollectionDeck.propTypes = {
  deckSelect: PropTypes.instanceOf(Array).isRequired,
  handleHover: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  cardClass: PropTypes.string.isRequired
};

export default CollectionDeck;
