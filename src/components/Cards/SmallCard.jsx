import React from 'react';
import image from '../../img/cardskeleton.png';
import './SmallCard.css';

const SmallCard = () => {
  return (
    <div>
      <img className="small-card" src={image} alt="" />
    </div>
  );
};

export default SmallCard;
