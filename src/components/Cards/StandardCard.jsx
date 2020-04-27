import React from 'react';
import PropTypes from 'prop-types';
import cardskeleton from '../../img/cardskeleton.png';
import './StandardCard.css';

const StandardCard = props => {
  const { combat, durability, image, handleHover, index, handleClick, cardClass } = props;
  return (
    <div
      className={cardClass}
      onClick={handleClick}
      //onMouseEnter={() => handleHover(index)}
    >
      <img
        className="standard-card"
        style={{ backgroundImage: `url('${image}')` }}
        src={cardskeleton}
        alt="border of the card"
      />
      <p className="attack">{combat}</p>
      <p className="life">{durability}</p>
    </div>
  );
};

StandardCard.propTypes = {
  combat: PropTypes.number.isRequired,
  durability: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  handleHover: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  cardClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default StandardCard;
