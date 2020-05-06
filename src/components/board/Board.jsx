import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import DisplayBoard from './DisplayBoard';

const Board = props => {
  const { deck, deckOp } = props;
  const [didMount, setDidMount] = useState(false);
  const [indexToDisplay, setIndexToDisplay] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [playerTurn, setPlayerTurn] = useState(true);
  const [oponentTurn, setOponentTurn] = useState(false);
  const [areFighting, setAreFighting] = useState([null, null, false, null]);
  const [isLoosingPoints, setIsLoosingPoints] = useState(false);
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
      if (didMount && life[areFighting[0]] > areFighting[1] && life[areFighting[0]] > 0) {
        setIsLoosingPoints(true);
        const tempLife = [...life];
        tempLife[areFighting[0]] -= 1;
        setLife(tempLife);
        setAreFighting([areFighting[0], areFighting[1], !areFighting[2], areFighting[3]]);
      } else {
        setIsLoosingPoints(false);
      }
    }, 1000 / areFighting[3]);
    return () => {
      clearInterval(id);
    };
  }, [areFighting]);

  /* Set IA turn and timing */
  useEffect(() => {
    const id = setTimeout(() => {
      if (didMount && !isLoosingPoints && !playerTurn) {
        setOponentTurn(!oponentTurn);
      }
    }, 1400);
    return () => {
      clearTimeout(id);
    };
  }, [isLoosingPoints]);

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
      const newLife = life[randomPlayer] - attack[randomOponent];
      const diffDamage =
        attack[randomOponent] < life[randomPlayer] ? attack[randomOponent] : life[randomPlayer];
      setAreFighting([randomPlayer, newLife, !areFighting[2], diffDamage]);
      setPlayerTurn(true);
      console.log(`IA n°${randomOponent} attack player n°${randomPlayer} => loose ${diffDamage}`);
    }
  }, [oponentTurn]);

  /* User Turn */
  const handleClick = e => {
    const index = e.currentTarget.getAttribute('index');
    if (index < 3 && life[index] > 0 && playerTurn && !isLoosingPoints) {
      setSelectedCard(index);
    } else if (index >= 3 && life[index] > 0 && selectedCard) {
      setPlayerTurn(false);
      const newLife = life[index] - attack[selectedCard];
      const diffDamage = attack[selectedCard] < life[index] ? attack[selectedCard] : life[index];
      setAreFighting([index, newLife, !areFighting[2], diffDamage]);
      setSelectedCard();
      console.log(`Player n°${selectedCard} attack IA n°${index} => loose ${diffDamage}`);
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
      indexToDisplay={indexToDisplay}
    />
  );
};
Board.propTypes = {
  deckOp: PropTypes.instanceOf(Array).isRequired,
  deck: PropTypes.instanceOf(Array).isRequired
};
export default Board;
