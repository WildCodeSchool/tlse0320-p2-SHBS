import React from 'react';
import cardskeleton from '../../img/cardskeleton.png';
import './StandardCard.css';

const StandardCard = props => {
  const { combat, durability, image, handleHover, index, handleClick } = props;

  return (
    <div
      role="button"
      tabIndex={0}
      className="container-card-text"
      onClick={() => handleClick()}
      onMouseEnter={() => handleHover(index)}
      onKeyPress={() => {}}
    >
      <img
        className="standard-card"
        style={{ backgroundImage: `url('${image}')` }}
        src={cardskeleton}
        alt="border of the card"
      />
      <div className="attack">
        <p>{combat}</p>
      </div>
      <div className="life">
        <p>{durability}</p>
      </div>
    </div>
  );
};

export default StandardCard;
