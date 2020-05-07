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
  const [oponentTurn, setOponentTurn] = useState(false);
  const [combatData, setCombatData] = useState([]);
  const [isLoosingPoints, setIsLoosingPoints] = useState(false);
  const [opponentIsWating, setOpponentIsWating] = useState(false);
  const [playerIsWating, setPlayerIsWating] = useState(false);
  const [life, setLife] = useState([]);
  const [attack, setAttack] = useState([]);

  useEffect(() => setDidMount(true), []);
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

  /* Losing points one by one */
  useEffect(() => {
    const id = setInterval(() => {
      if (didMount && life[combatData[0]] > combatData[1]) {
        setIsLoosingPoints(true);
        const tempLife = [...life];
        tempLife[combatData[0]] -= 1;
        setLife(tempLife);
      } else {
        setIsLoosingPoints(false);
      }
    }, 500 / life[combatData[0]]);
    return () => {
      clearInterval(id);
    };
  }, [combatData, life]);

  /* Set pause moment between turns */
  useEffect(() => {
    setTimeout(() => {
      if (didMount && !isLoosingPoints && !playerTurn) {
        setOpponentIsWating(true);
      } else if (didMount && !isLoosingPoints && playerTurn) {
        setPlayerIsWating(true);
      }
    }, 500);
  }, [isLoosingPoints]);

  /* Set IA turn */
  useEffect(() => {
    setTimeout(() => {
      if (didMount && opponentIsWating) {
        setOponentTurn(!oponentTurn);
        setOpponentIsWating(false);
      } else if (didMount && playerIsWating) {
        setPlayerIsWating(false);
      }
    }, 2000);
  }, [opponentIsWating, playerIsWating]);

  /* IA turn */
  useEffect(() => {
    if (didMount) {
      /* Random IA choice */
      const aliveSort = [...life].map((card, i) => (card > 0 ? i : 'dead'));
      const oponentSort = [...aliveSort].splice(3).filter(card => card !== 'dead');
      const playerSort = [...aliveSort].splice(0, 3).filter(card => card !== 'dead');
      const randomOponent = oponentSort[Math.floor(Math.random() * oponentSort.length)];
      const randomPlayer = playerSort[Math.floor(Math.random() * playerSort.length)];
      /* Apply attack */
      const newLife =
        life[randomPlayer] - attack[randomOponent] > 0
          ? life[randomPlayer] - attack[randomOponent]
          : 0;
      setCombatData([randomPlayer, newLife, randomOponent]);
      setPlayerTurn(true);
      console.log(`IA n°${randomOponent} attack player n°${randomPlayer}`);
    }
  }, [oponentTurn]);

  /* User Turn */
  const handleClick = e => {
    const index = Number(e.currentTarget.getAttribute('index'));
    if (index < 3 && life[index] > 0 && playerTurn && !isLoosingPoints) {
      setSelectedCard(index);
    } else if (index >= 3 && life[index] > 0 && selectedCard !== undefined) {
      setPlayerTurn(false);
      const newLife =
        life[index] - attack[selectedCard] > 0 ? life[index] - attack[selectedCard] : 0;
      setCombatData(index, newLife, selectedCard);
      setSelectedCard();
      console.log(`Player n°${selectedCard} attack IA n°${index}`);
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
      combatData={combatData}
      isLoosingPoints={isLoosingPoints}
      opponentIsWating={opponentIsWating}
      indexToDisplay={indexToDisplay}
      playerIsWating={playerIsWating}
    />
  );
};
Board.propTypes = {
  deckOp: PropTypes.instanceOf(Array).isRequired,
  deck: PropTypes.instanceOf(Array).isRequired
};
export default Board;
