import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StandardCard from '../Cards/StandardCard';
import yourTurn from '../../img/yourturn.png';
import opponentTurn from '../../img/opponentsturn.png';
import victory from '../../img/Victory.png';
import defeat from '../../img/Defeat.png';
import playagaintxt from '../../img/Playagaintxt.png';
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
    indexToDisplay,
    playerTurnInterval
  } = props;

  return (
    <section className="darkcity-bg flex-row">
      {turnInterval && (
        <div className="board-between-turns">
          <img src={opponentTurn} alt="Opponent's turn" className="opponents-turn" />
        </div>
      )}
      {playerTurnInterval && (
        <div className="board-between-turns">
          <img src={yourTurn} alt="Your turn" className="player-turn" />
        </div>
      )}

      {life[0] <= 0 && life[1] <= 0 && life[2] <= 0 && (
        <div className="displayboard-end-game">
          <img src={defeat} alt="defeat" className="displayboard-v-d-text" />
          <Link to="Collection" className="button-splashbg">
            <img
              src={playagaintxt}
              alt="Button playagaintxt"
              className="displayboard-splash-play-again"
            />
          </Link>
        </div>
      )}
      {life[3] <= 0 && life[4] <= 0 && life[5] <= 0 && (
        <div className="displayboard-end-game">
          <img src={victory} alt="victory" className="displayboard-v-d-text" />
          <Link to="Collection" className="button-splashbg">
            <img
              src={playagaintxt}
              alt="Button playagaintxt"
              className="displayboard-splash-play-again"
            />
          </Link>
        </div>
      )}
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          {opponentDeck.map((character, i) => {
            return (
              <div className="flex-row">
                <div className={indexToDisplay === i + 3 ? 'info-show bg-opponent' : 'info-hide'}>
                  <h4>{character.name}</h4>
                  <h6>{character.biography.fullName}</h6>
                  <h5>
                    {'Life : '}
                    {character.powerstats.durability}
                  </h5>
                  <h5>
                    {'Attack : '}
                    {character.powerstats.combat}
                  </h5>
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
                      ? `container-card-text${
                          areFighting[0] === i + 3 && isLoosingPoints ? ' isShaking' : ''
                        }${
                          areFighting[2] === i + 3 && isLoosingPoints && !turnInterval
                            ? ' isAttacking'
                            : ''
                        }${
                          !(areFighting[2] === i + 3 && isLoosingPoints && !turnInterval)
                            ? ' isNotAttacking'
                            : ''
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
                <div className={indexToDisplay === i ? 'info-show bg-player' : 'info-hide'}>
                  <h4>{character.name}</h4>
                  <h6>{character.biography.fullName}</h6>
                  <h5>
                    {'Life : '}
                    {character.powerstats.durability}
                  </h5>
                  <h5>
                    {'Attack : '}
                    {character.powerstats.combat}
                  </h5>
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
                            : ''
                        }
                            ${
                              areFighting[2] === i && turnInterval && !isLoosingPoints
                                ? ' isNotAttacking'
                                : ''
                            }${areFighting[0] === i && isLoosingPoints ? ' isShaking' : ''}`
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

DisplayBoard.propTypes = {
  opponentDeck: PropTypes.instanceOf(Array).isRequired,
  playerDeck: PropTypes.instanceOf(Array).isRequired,
  life: PropTypes.instanceOf(Array).isRequired,
  attack: PropTypes.instanceOf(Array).isRequired,
  handleHover: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  clearIndex: PropTypes.func.isRequired,
  selectedCard: PropTypes.number.isRequired,
  isLoosingPoints: PropTypes.bool.isRequired,
  areFighting: PropTypes.instanceOf(Array).isRequired,
  turnInterval: PropTypes.bool.isRequired,
  indexToDisplay: PropTypes.number.isRequired
};
export default DisplayBoard;
