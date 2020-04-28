import React from 'react';
import PropTypes from 'prop-types';
import StandardCard from '../Cards/StandardCard';
import './Board.css';

const Board = ({ deckOp, deck }) => {
  return (
    <section className="darkcity-bg flex-row">
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          {deckOp.map(card => {
            return (
              <StandardCard
                handleHover={() => {}}
                handleClick={() => {}}
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
          {deck.map(card => {
            return (
              <StandardCard
                handleHover={() => {}}
                handleClick={() => {}}
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
Board.propTypes = {
  deckOp: PropTypes.instanceOf(Array).isRequired,
  deck: PropTypes.instanceOf(Array).isRequired
};
export default Board;
