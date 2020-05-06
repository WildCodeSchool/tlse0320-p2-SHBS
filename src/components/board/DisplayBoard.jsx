import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import StandardCard from '../Cards/StandardCard';
import victory from '../../img/Victory.png';
import defeat from '../../img/Defeat.png';
import playagaintxt from '../../img/Playagaintxt.png';

const DisplayBoard = props => {
  const { opponentDeck, playerDeck, handleHover, handleClick, clearIndex, life, attack } = props;
  return (
    <section className="darkcity-bg flex-row">
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          {opponentDeck.map((character, i) => {
            return (
              <StandardCard
                handleHover={handleHover}
                handleClick={handleClick}
                combat={attack[i + 3]}
                durability={life[i + 3]}
                image={character.images.md}
                index={i + 3}
                key={character.id}
                cardClass={
                  life[i + 3] > 0 ? 'container-card-text alive' : 'container-card-text dead'
                }
              />
            );
          })}
        </div>
        {life[0] <= 0 && life[1] <= 0 && life[2] <= 0 && (
          <div className="end-game">
            <img src={defeat} alt="defeat" />
            <Link to="Collection">
              <img src={playagaintxt} alt="Button playagaintxt" />
            </Link>
          </div>
        )}
        {life[3] <= 0 && life[4] <= 0 && life[5] <= 0 && (
          <div className="end-game">
            <img src={victory} alt="victory" />
            <Link to="Collection">
              <img src={playagaintxt} alt="Button playagaintxt" />
            </Link>
          </div>
        )}
        <div className="board-cards-bottom flex-row">
          {playerDeck.map((character, i) => {
            return (
              <StandardCard
                handleHover={handleHover}
                handleClick={handleClick}
                clearIndex={clearIndex}
                combat={attack[i]}
                durability={life[i]}
                image={character.images.md}
                index={i}
                key={character.id}
                cardClass={life[i] > 0 ? 'container-card-text alive' : 'container-card-text dead'}
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

DisplayBoard.propTypes = {
  opponentDeck: PropTypes.instanceOf(Array).isRequired,
  playerDeck: PropTypes.instanceOf(Array).isRequired,
  life: PropTypes.instanceOf(Array).isRequired,
  attack: PropTypes.instanceOf(Array).isRequired,
  handleHover: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  clearIndex: PropTypes.func.isRequired
};
export default DisplayBoard;
