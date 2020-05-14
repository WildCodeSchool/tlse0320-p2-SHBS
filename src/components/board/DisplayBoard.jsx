import React from 'react';
import PropTypes from 'prop-types';
import CombatLog from './CombatLog';
import MusicAndSounds from './MusicAndSounds';
import DisplayTurnIndication from './DisplayTurnIndication';
import StandardCard from '../Cards/StandardCard';
import ModalCard from './ModalCard';
import lineRed from '../../img/lineRed.PNG';

const DisplayBoard = props => {
  const {
    opponentDeck,
    playerDeck,
    handleHover,
    handleClick,
    clearIndex,
    life,
    attack,
    opponentIsWating,
    indexToDisplay,
    playerIsWating,
    selectedCard,
    damages,
    logConsole,
    gameStatus,
    selectAttackRef,
    attackTargetRef,
    youLoseRef,
    opponentAttackRef,
    drawRef,
    youWinRef,
    stopMusic
  } = props;

  return (
    <section className="darkcity-bg">
      <DisplayTurnIndication
        gameStatus={gameStatus}
        playerIsWating={playerIsWating}
        opponentIsWating={opponentIsWating}
      />
      <div className="flex-row board-page">
        <MusicAndSounds
          selectAttackRef={selectAttackRef}
          attackTargetRef={attackTargetRef}
          youLoseRef={youLoseRef}
          opponentAttackRef={opponentAttackRef}
          drawRef={drawRef}
          youWinRef={youWinRef}
          stopMusic={stopMusic}
        />
        <div className="board-cards flex-column">
          <div className="board-cards-top flex-row">
            <h2 className="opponent-indicator">Opponent</h2>
            {opponentDeck.map((character, i) => {
              return (
                <div className="flex-row">
                  <ModalCard indexToDisplay={indexToDisplay} character={character} id={i + 3} />
                  <StandardCard
                    handleHover={handleHover}
                    handleClick={handleClick}
                    clearIndex={clearIndex}
                    combat={attack[i + 3]}
                    durability={life[i + 3]}
                    image={character.images.md}
                    index={i + 3}
                    key={character.id}
                    damages={damages[1]}
                    cardClass={
                      life[i + 3] > 0
                        ? `container-card-text ${
                            damages[1][1] === i + 3 && !damages[2]
                              ? ' isAttacking'
                              : ' isNotAttacking'
                          }
                      ${damages[1][1] === i + 3 && damages[2] ? ' isShaking' : ''}`
                        : 'container-card-text dead isNotAttacking'
                    }
                  />
                </div>
              );
            })}
          </div>
          <img src={lineRed} alt="red line" className="red-line" />
          <div className="board-cards-bottom flex-row">
            <h2 className="player-indicator">Player</h2>
            {playerDeck.map((character, i) => {
              return (
                <div>
                  <ModalCard indexToDisplay={indexToDisplay} character={character} id={i} />
                  <StandardCard
                    handleHover={handleHover}
                    handleClick={handleClick}
                    clearIndex={clearIndex}
                    combat={attack[i]}
                    durability={life[i]}
                    image={character.images.md}
                    index={i}
                    key={character.id}
                    damages={damages[0]}
                    cardClass={
                      life[i] > 0
                        ? `container-card-text${
                            selectedCard === i || damages[0][1] === i
                              ? ' isAttacking'
                              : ' isNotAttacking'
                          }${damages[0][1] === i && !damages[2] ? ' isShaking' : ''}`
                        : 'container-card-text dead isNotAttacking'
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
        <CombatLog logConsole={logConsole} />
      </div>
    </section>
  );
};

DisplayBoard.propTypes = {
  opponentDeck: PropTypes.instanceOf(Array).isRequired,
  playerDeck: PropTypes.instanceOf(Array).isRequired,
  life: PropTypes.instanceOf(Array).isRequired,
  attack: PropTypes.instanceOf(Array).isRequired,
  damages: PropTypes.instanceOf(Array).isRequired,
  handleHover: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  clearIndex: PropTypes.func.isRequired,
  opponentIsWating: PropTypes.bool.isRequired,
  indexToDisplay: PropTypes.number,
  playerIsWating: PropTypes.bool.isRequired,
  selectedCard: PropTypes.number,
  logConsole: PropTypes.string,
  gameStatus: PropTypes.string.isRequired,
  stopMusic: PropTypes.bool.isRequired,
  selectAttackRef: PropTypes.instanceOf(Object).isRequired,
  attackTargetRef: PropTypes.instanceOf(Object).isRequired,
  youLoseRef: PropTypes.instanceOf(Object).isRequired,
  opponentAttackRef: PropTypes.instanceOf(Object).isRequired,
  drawRef: PropTypes.instanceOf(Object).isRequired,
  youWinRef: PropTypes.instanceOf(Object).isRequired
};

DisplayBoard.defaultProps = {
  logConsole: ''
};
export default DisplayBoard;
