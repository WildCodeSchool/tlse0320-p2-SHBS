import React, { useState } from 'react';
import StandardCard from '../Cards/StandardCard';
import './DisplayBoard.css';

const DisplayBoard = props => {
  const {
    opponentDeck,
    playerDeck,
    handleHover,
    handleClick,
    clearIndex,
    life,
    attack,
    selectedCard,
    isLoosingPoints,
    areFighting,
    turnInterval,
    indexToDisplay
  } = props;

  return (
    <section className="darkcity-bg flex-row">
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          {opponentDeck.map((character, i) => {
            return (
              <div className="flex-row">
                <div className={indexToDisplay === i + 3 ? 'info-show flex-column' : 'info-hide'}>
                  <h5>{character.name}</h5>
                  <h5>Life : {character.powerstats.durability}</h5>
                  <h5>Attack : {character.powerstats.combat}</h5>
                </div>
                <StandardCard
                  handleHover={handleHover}
                  handleClick={handleClick}
                  clearIndex={clearIndex}
                  combat={attack[i + 3]}
                  durability={life[i + 3]}
                  image={character.images.md}
                  index={i + 3}
                  key={character.id}
                  cardClass={
                    life[i + 3] > 0
                      ? `container-card-text${areFighting[0] === i + 3 ? ' isShaking' : ''}${
                          areFighting[2] === i + 3 && isLoosingPoints && !turnInterval
                            ? ' isAttacking'
                            : ' isNotAttacking'
                        }`
                      : 'container-card-text dead'
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="board-cards-bottom flex-row">
          {playerDeck.map((character, i) => {
            return (
              <div>
                <div className={indexToDisplay === i ? 'info-show flex-column' : 'info-hide'}>
                  <h5>{character.name}</h5>
                  <h5>Life : {character.powerstats.durability}</h5>
                  <h5>Attack : {character.powerstats.combat}</h5>
                </div>
                <StandardCard
                  handleHover={handleHover}
                  handleClick={handleClick}
                  clearIndex={clearIndex}
                  combat={attack[i]}
                  durability={life[i]}
                  image={character.images.md}
                  index={i}
                  key={character.id}
                  cardClass={
                    life[i] > 0
                      ? `container-card-text${
                          selectedCard === i || (areFighting[2] === i && !turnInterval)
                            ? ' isAttacking'
                            : ' isNotAttacking'
                        }${areFighting[0] === i ? ' isShaking' : ''}`
                      : 'container-card-text dead'
                  }
                />
              </div>
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
