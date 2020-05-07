import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import yourTurn from '../../img/yourturn.png';
import opponentTurn from '../../img/opponentsturn.png';
import victory from '../../img/Victory.png';
import defeat from '../../img/Defeat.png';
import playagaintxt from '../../img/Playagaintxt.png';

const DisplayTurnIndication = props => {
  const { turnInterval, playerTurnInterval, life } = props;
  return (
    <>
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
    </>
  );
};

DisplayTurnIndication.propTypes = {
  life: PropTypes.instanceOf(Array).isRequired,
  turnInterval: PropTypes.bool.isRequired,
  playerTurnInterval: PropTypes.bool.isRequired
};

export default DisplayTurnIndication;
