import React from 'react';
import PropTypes, { object } from 'prop-types';

const ModalCard = props => {
  const { indexToDisplay, character, id, background } = props;
  return (
    <div className={indexToDisplay === id ? `info-show${background}` : 'info-hide'}>
      <h4>{character.name}</h4>
      <h6>{character.biography.fullName}</h6>
      <h5>
        {'Life : '}
        {character.powerstats.durability}
      </h5>
      <h5>
        {'Attack : '}
        {character.powerstats.combat}
      </h5>
    </div>
  );
};

ModalCard.propTypes = {
  indexToDisplay: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  background: PropTypes.string.isRequired,
  character: PropTypes.instanceOf(object).isRequired
};

export default ModalCard;
