import React from 'react';
import StandardCard from '../Cards/StandardCard';

const DisplayBoard = props => {
  const { opponentDeck, playerDeck, handleHover, handleClick, clearIndex } = props;
  return (
    <section className="darkcity-bg flex-row">
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          {opponentDeck.map((character, i) => {
            character.alive = character.powerstats.durability > 0 ? 'alive' : 'dead';
            character.boardIndex = i;
            return (
              <StandardCard
                handleHover={handleHover}
                handleClick={handleClick}
                combat={character.powerstats.combat}
                durability={character.powerstats.durability}
                image={character.images.md}
                index={character.boardIndex}
                category="opponent"
                key={character.id}
                alive={character.alive}
                cardClass={`container-card-text ${character.alive}`}
              />
            );
          })}
        </div>
        <div className="board-cards-bottom flex-row">
          {playerDeck.map((character, i) => {
            character.alive = character.powerstats.durability > 0 ? 'alive' : 'dead';
            character.boardIndex = i;
            return (
              <StandardCard
                handleHover={handleHover}
                handleClick={handleClick}
                clearIndex={clearIndex}
                combat={character.powerstats.combat}
                durability={character.powerstats.durability}
                image={character.images.md}
                index={character.boardIndex}
                category="player"
                key={character.id}
                alive={character.alive}
                cardClass={`container-card-text ${character.alive}`}
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

export default DisplayBoard;
