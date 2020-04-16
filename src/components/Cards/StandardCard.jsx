import React from 'react';
import cardskeleton from '../../img/cardskeleton.png';
import './StandardCard.css';

const StandardCard = () => {
  return (
    <div>
      <img className="standard-card" src={cardskeleton} alt="" />
    </div>
  );
};

export default StandardCard;
