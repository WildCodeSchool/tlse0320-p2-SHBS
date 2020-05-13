import React from 'react';
import PropTypes from 'prop-types';
import bgmodalblue from '../../img/bgmodalblue.PNG';
import bgmodalred from '../../img/bgmodalred.PNG';

const ModalCard = props => {
  const { indexToDisplay, character, id } = props;
  return (
    <div className={indexToDisplay === id ? `info-show` : 'info-hide'}>
      <img src={id > 2 ? bgmodalred : bgmodalblue} alt="modal infos" />
      <div className="modal-content flex-column">
        <h4>{character.name}</h4>
        <h5>{character.biography.fullName}</h5>
        <div>
          <h5>
            {'Life : '}
            {character.powerstats.durability}
          </h5>
          <h5>
            {'Attack : '}
            {character.powerstats.combat}
          </h5>
        </div>
      </div>
    </div>
  );
};

ModalCard.propTypes = {
  indexToDisplay: PropTypes.number,
  id: PropTypes.number.isRequired,
  character: PropTypes.instanceOf(Object).isRequired
};

export default ModalCard;
