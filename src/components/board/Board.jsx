import React from 'react';
import StandardCard from '../Cards/StandardCard';
import './Board.css';

const staticDeck = [
  {
    name: 'Poison Ivy',
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
    },
    powerstats: {
      combat: 40,
      durability: 40,
      strength: 14,
      speed: 21,
      power: 23,
      intelligence: 81
    },
    index: 0
  },
  {
    name: 'Poison Ivy',
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
    },
    powerstats: {
      combat: 40,
      durability: 40,
      strength: 14,
      speed: 21,
      power: 23,
      intelligence: 81
    },
    index: 0
  },
  {
    name: 'Poison Ivy',
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
    },
    powerstats: {
      combat: 40,
      durability: 40,
      strength: 14,
      speed: 21,
      power: 23,
      intelligence: 81
    },
    index: 0
  }
];

const Board = () => {
  return (
    <section className="darkcity-bg flex-row">
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          {staticDeck.map(card => {
            return (
              <StandardCard
                combat={card.powerstats.combat}
                durability={card.powerstats.durability}
                image={card.images.md}
                index={card.index}
                key={card.id}
                cardClass="container-card-text"
              />
            );
          })}
        </div>
        <div className="board-cards-bottom flex-row">
          {staticDeck.map(card => {
            return (
              <StandardCard
                combat={card.powerstats.combat}
                durability={card.powerstats.durability}
                image={card.images.md}
                index={card.index}
                key={card.id}
                cardClass="container-card-text"
              />
            );
          })}
        </div>
      </div>
      <div className="board-log-text flex-column">
        <h2>Combat log</h2>
        <div className="board-game-history" />
      </div>
    </section>
  );
};

export default Board;
