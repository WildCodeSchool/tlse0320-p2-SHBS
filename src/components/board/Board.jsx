import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DisplayBoard from './DisplayBoard';
import './Board.css';

const Board = props => {
  const { deck, deckOp } = props;
  const [didMount, setDidMount] = useState(false);
  const [indexToDisplay, setIndexToDisplay] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [playerTurn, setPlayerTurn] = useState(true);
  const [opponentTurn, setOpponentTurn] = useState(false);
  const [isLoosingPoints, setIsLoosingPoints] = useState(false);
  const [logConsole, setLogConsole] = useState();
  const [life, setLife] = useState([]);
  const [attack, setAttack] = useState([]);
  const [damages, setDamages] = useState([[0, 10], [0, 10], false]);
  const [opponentIsWating, setOpponentIsWating] = useState(false);
  const [playerIsWating, setPlayerIsWating] = useState(false);

  // set a boolean state to true after mounting //
  useEffect(() => setDidMount(true), []);

  // load the life & attack props in the state //
  useEffect(() => {
    if (deck[0]) {
      setLife([
        deck[0].powerstats.durability,
        deck[1].powerstats.durability,
        deck[2].powerstats.durability,
        deckOp[0].powerstats.durability,
        deckOp[1].powerstats.durability,
        deckOp[2].powerstats.durability
      ]);
      setAttack([
        deck[0].powerstats.combat,
        deck[1].powerstats.combat,
        deck[2].powerstats.combat,
        deckOp[0].powerstats.combat,
        deckOp[1].powerstats.combat,
        deckOp[2].powerstats.combat
      ]);
    }
  }, [deck, deckOp]);

  const handleHover = index => {
    setIndexToDisplay(index);
  };

  const clearIndex = () => {
    setIndexToDisplay();
  };

  // Losing points one by one //
  useEffect(() => {
    if (didMount && isLoosingPoints) {
      const oneByOne = setInterval(() => {
        /* Loses -1 while life is greater than calculated new life */
        const tempLife = [...life];
        if (life[damages[0][1]] > damages[0][2] && life[damages[1][1]] > damages[1][2]) {
          setIsLoosingPoints(true);
          tempLife[damages[0][1]] -= 1;
          tempLife[damages[1][1]] -= 1;
          setLife(tempLife);
        } else if (life[damages[0][1]] > damages[0][2]) {
          setIsLoosingPoints(true);
          tempLife[damages[0][1]] -= 1;
          setLife(tempLife);
        } else if (life[damages[1][1]] > damages[1][2]) {
          setIsLoosingPoints(true);
          tempLife[damages[1][1]] -= 1;
          setLife(tempLife);
        } else {
          setIsLoosingPoints(false);
          setDamages([[0, 10], [0, 10], false]);
        }
      }, 20);
      return () => {
        clearInterval(oneByOne);
      };
    }
  }, [isLoosingPoints, life]);

  // Set pause moment after the attack (depends on turn) //
  useEffect(() => {
    setTimeout(() => {
      if (didMount && !isLoosingPoints && !playerTurn) {
        setOpponentIsWating(true);
      } else if (didMount && !isLoosingPoints && playerTurn) {
        setPlayerIsWating(true);
      }
    }, 300);
  }, [isLoosingPoints]);

  // Set moment to pop-up the indication //
  useEffect(() => {
    setTimeout(() => {
      if (didMount && opponentIsWating) {
        setOpponentIsWating(false);
        /* Trigger the IA-turn use-effect */
        setOpponentTurn(!opponentTurn);
      } else if (didMount && playerIsWating) {
        setPlayerIsWating(false);
      }
    }, 2000);
  }, [opponentIsWating, playerIsWating]);

  // IA turn //
  useEffect(() => {
    if (didMount) {
      /* Random IA choice */
      const aliveSort = [...life].map((card, i) => (card > 0 ? i : 'dead'));
      const oponentSort = [...aliveSort].splice(3).filter(card => card !== 'dead');
      const playerSort = [...aliveSort].splice(0, 3).filter(card => card !== 'dead');
      const randomAttacker = oponentSort[Math.floor(Math.random() * oponentSort.length)];
      const randomTarget = playerSort[Math.floor(Math.random() * playerSort.length)];
      /* Apply attack */
      const newLife =
        life[randomTarget] - attack[randomAttacker] > 0
          ? life[randomTarget] - attack[randomAttacker]
          : 0;
      const newLifeReturn =
        life[randomAttacker] - attack[randomTarget] > 0
          ? life[randomAttacker] - attack[randomTarget]
          : 0;
      setDamages([
        [attack[randomAttacker], randomTarget, newLife],
        [attack[randomTarget], randomAttacker, newLifeReturn],
        false
      ]);
      // setLife(tempLife);
      setIsLoosingPoints(true);
      setLogConsole(
        `${deckOp[randomAttacker - 3].name} inflige ${attack[randomAttacker]} a ${
          deck[randomTarget].name
        }`
      );
      setPlayerTurn(true);
    }
  }, [opponentTurn]);

  // User Turn //
  const handleClick = e => {
    const index = Number(e.currentTarget.getAttribute('index'));
    /* Select attacker */
    if (index < 3 && life[index] > 0 && playerTurn && !isLoosingPoints) {
      setSelectedCard(index);
      /* Select target */
    } else if (index >= 3 && life[index] > 0 && selectedCard !== undefined) {
      /* Apply attack */
      const newLife =
        life[index] - attack[selectedCard] > 0 ? life[index] - attack[selectedCard] : 0;
      const newLifeReturn =
        life[selectedCard] - attack[index] > 0 ? life[selectedCard] - attack[index] : 0;
      setDamages([
        [attack[index], selectedCard, newLifeReturn],
        [attack[selectedCard], index, newLife],
        true
      ]);
      setSelectedCard();
      setIsLoosingPoints(true);
      setLogConsole(
        `${deck[selectedCard].name} inflige ${attack[selectedCard]} a ${deckOp[index - 3].name}`
      );
      setPlayerTurn(false);
    }
  };

  return (
    <DisplayBoard
      opponentDeck={deckOp}
      playerDeck={deck}
      handleClick={handleClick}
      handleHover={handleHover}
      clearIndex={clearIndex}
      life={life}
      attack={attack}
      selectedCard={selectedCard}
      opponentIsWating={opponentIsWating}
      indexToDisplay={indexToDisplay}
      logConsole={logConsole}
      playerIsWating={playerIsWating}
      damages={damages}
      opponentTurn={opponentTurn}
    />
  );
};
Board.propTypes = {
  deckOp: PropTypes.instanceOf(Array).isRequired,
  deck: PropTypes.instanceOf(Array).isRequired
};
export default Board;
