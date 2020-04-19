import React from 'react';
import cardskeleton from '../../img/cardskeleton.png';
import './StandardCard.css';

const StandardCard = ({ combat, durability, image, handleClick, index }) => {
  return (
    <div className="container-card-text" onMouseEnter={() => handleClick(index)}>
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
