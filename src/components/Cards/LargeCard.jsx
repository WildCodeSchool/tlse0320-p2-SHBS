import React from 'react';
import './LargeCard.css';

const LargeCard = ({ character }) => {
  return (
    <>
      <div className="large-card">
        <img src={character.image} alt={character.name} />
      </div>
      <div>
        <p>Name : {character.name}</p>
        <p>Combat : {character.combat}</p>
        <p>Durability : {character.durability}</p>
        <p>Special attack : {character.specialattack}</p>
      </div>
    </>
  );
};

export default LargeCard;
