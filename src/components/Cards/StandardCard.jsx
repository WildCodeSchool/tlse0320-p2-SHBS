import React from 'react';
import cards from '../../datas/cards.json';
/* import image from '../../img/cardskeleton.png'; */
import './StandardCard.css';

const StandardCard = () => {
  return (
    <div className="standard-card">
      {/*  <img className="standard-card" src={image} alt="" /> */}
      <img className="image-card" src={cards[0].image.url} alt="" />
    </div>
  );
};

export default StandardCard;
