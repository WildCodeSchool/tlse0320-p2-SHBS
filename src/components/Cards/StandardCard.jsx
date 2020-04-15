import React from 'react';
import image from '../../img/cardskeleton.png';
import './StandardCard.css';

const StandardCard = () => {
  return (
    <div>
      <img className="standard-card" src={image} alt="" />
    </div>
  );
};

export default StandardCard;
