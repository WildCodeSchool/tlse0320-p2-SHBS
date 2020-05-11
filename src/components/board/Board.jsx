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
  const [combatData, setCombatData] = useState({});
  const [isLoosingPoints, setIsLoosingPoints] = useState(false);
  const [opponentIsWating, setOpponentIsWating] = useState(false);
  const [playerIsWating, setPlayerIsWating] = useState(false);
  const [life, setLife] = useState([]);
  const [attack, setAttack] = useState([]);
  // Nico testing local storage //
  const [victory, setVictory] = useState(false);
  const [defeat, setDefeat] = useState(false);
  const [victoryCount, setVictoryCount] = useState(
    window.localStorage.getItem('myVictories')
      ? parseInt(window.localStorage.getItem('myVictories'))
      : 0
  );
  const [defeatCount, setDefeatCount] = useState(
    window.localStorage.getItem('myDefeats')
      ? parseInt(window.localStorage.getItem('myDefeats'))
      : 0
  );

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
    const oneByOne = setInterval(() => {
      /* Loses -1 while life is greater than calculated new life */
      if (didMount && life[combatData.cardToAttack] > combatData.newLife) {
        setIsLoosingPoints(true);
        const tempLife = [...life];
        tempLife[combatData.cardToAttack] -= 1;
        setLife(tempLife);
      } else {
        setIsLoosingPoints(false);
      }
      /* exponential slowdown */
    }, 400 / (life[combatData.cardToAttack] - combatData.newLife));
    return () => {
      clearInterval(oneByOne);
    };
  }, [combatData, life]);

  // Set pause moment after the attack (depends on turn) //
  useEffect(() => {
    setTimeout(() => {
      if (didMount && !isLoosingPoints && !playerTurn) {
        setOpponentIsWating(true);
        setCombatData({});
      } else if (didMount && !isLoosingPoints && playerTurn) {
        setPlayerIsWating(true);
        setCombatData({});
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
    if (didMount && victory === false) {
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
      /* Load combat data to trigger the use-effect */
      setCombatData({ cardToAttack: randomTarget, cardAttacker: randomAttacker, newLife });
      setPlayerTurn(true);
      console.log(`IA n°${randomAttacker} inflige ${attack[randomAttacker]} à n°${randomTarget}`);
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
      /* Load combat data to trigger the use effect */
      setCombatData({ cardToAttack: index, cardAttacker: selectedCard, newLife });
      setSelectedCard();
      setPlayerTurn(false);
      console.log(`Player n°${selectedCard} inflige ${attack[selectedCard]} IA n°${index}`);
    }
  };

  // Nico testing local storage //
  useEffect(() => {
    if (life[3] <= 0 && life[4] <= 0 && life[5] <= 0) {
      setVictory(true);
    }
  }, [life]);

  useEffect(() => {
    if (life[0] <= 0 && life[1] <= 0 && life[2] <= 0) {
      setDefeat(true);
    }
  }, [life]);

  useEffect(() => {
    setVictoryCount(victoryCount + 1);
    const result = JSON.stringify(victoryCount);
    window.localStorage.setItem('myVictories', result);
  }, [victory]);

  useEffect(() => {
    setDefeatCount(defeatCount + 1);
    const result = JSON.stringify(defeatCount);
    window.localStorage.setItem('myDefeats', result);
  }, [defeat]);

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
