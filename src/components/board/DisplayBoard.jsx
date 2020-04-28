import React from 'react';
import StandardCard from '../Cards/StandardCard';

const DisplayBoard = props => {
  const { opponentDeck, playerDeck, handleHover, handleClick, clearIndex, life, isAlive } = props;
  return (
    <section className="darkcity-bg flex-row">
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          {opponentDeck.map((character, i) => {
            // character.boardIndex = i + 3;
            return (
              <StandardCard
                handleHover={handleHover}
                handleClick={handleClick}
                combat={character.powerstats.combat}
                durability={life[i + 3]}
                image={character.images.md}
                index={i + 3}
                // category="opponent"
                key={character.id}
                // alive={character.alive}
                cardClass={
                  isAlive[i + 3] ? 'container-card-text alive' : 'container-card-text dead'
                }
              />
            );
          })}
        </div>
        <div className="board-cards-bottom flex-row">
          {playerDeck.map((character, i) => {
            // character.boardIndex = i;
            return (
              <StandardCard
                handleHover={handleHover}
                handleClick={handleClick}
                clearIndex={clearIndex}
                combat={character.powerstats.combat}
                durability={life[i]}
                image={character.images.md}
                index={i}
                // category="player"
                key={character.id}
                // alive={character.alive}
                cardClass={isAlive[i] ? 'container-card-text alive' : 'container-card-text dead'}
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
