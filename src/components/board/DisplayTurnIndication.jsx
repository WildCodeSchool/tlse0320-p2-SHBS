import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import yourTurn from '../../img/yourturn.png';
import opponentTurn from '../../img/opponentsturn.png';
import victory from '../../img/Victory.png';
import defeat from '../../img/Defeat.png';
import playagaintxt from '../../img/Playagaintxt.png';

const DisplayTurnIndication = props => {
  const { opponentIsWating, playerIsWating, gameStatus } = props;
  return (
    <>
      {opponentIsWating && (
        <div className="board-between-turns">
          <img src={opponentTurn} alt="Opponent's turn" className="opponents-turn" />
        </div>
      )}
      {playerIsWating && (
        <div className="board-between-turns">
          <img src={yourTurn} alt="Your turn" className="player-turn" />
        </div>
      )}

      {gameStatus === 'defeat' && (
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
      {gameStatus === 'victory' && (
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
      {gameStatus === 'draw' && (
        <div className="displayboard-end-game">
          {/* <img src={victory} alt="victory" className="displayboard-v-d-text" /> */}
          <Link to="Collection" className="button-splashbg">
            <img
              src={playagaintxt}
              alt="Button playagaintxt"
              className="displayboard-splash-play-again"
            />
            <h1>Drawn</h1>
          </Link>
        </div>
      )}
    </>
  );
};

DisplayTurnIndication.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  opponentIsWating: PropTypes.bool.isRequired,
  playerIsWating: PropTypes.bool.isRequired
};

export default DisplayTurnIndication;
