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
  const [gameStatus, setGameStatus] = useState('onGoing');
  const selectAttackRef = React.createRef();

  // set a boolean state to true after mounting //
  useEffect(() => {
    const randomStart = Math.floor(Math.random() * 100);
    if (randomStart > 50) {
      setOpponentIsWating(true);
    } else {
      setPlayerIsWating(true);
    }
    setDidMount(true);
  }, []);

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
      if (didMount && isLoosingPoints) {
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
      }
    }, 10);
    return () => {
      clearInterval(oneByOne);
    };
  }, [isLoosingPoints, life]);

  // Set pause moment after the attack (depends on turn) //
  useEffect(() => {
    if (didMount && !isLoosingPoints) {
      setTimeout(() => {
        if (
          (life[0] <= 0 && life[1] <= 0 && life[2] <= 0) ||
          (life[3] <= 0 && life[4] <= 0 && life[5] <= 0)
        ) {
          if (
            life[0] <= 0 &&
            life[1] <= 0 &&
            life[2] <= 0 &&
            life[3] <= 0 &&
            life[4] <= 0 &&
            life[5] <= 0
          ) {
            setGameStatus('draw');
          } else if (life[0] <= 0 && life[1] <= 0 && life[2] <= 0) {
            setGameStatus('defeat');
          } else {
            setGameStatus('victory');
          }
        } else if (!playerTurn) {
          setOpponentIsWating(true);
        } else if (playerTurn) {
          setPlayerIsWating(true);
        }
      }, 300);
    }
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
      if (randomAttacker) {
        setLogConsole(
          `${deckOp[randomAttacker - 3].name} inflige ${attack[randomAttacker]} a ${
            deck[randomTarget].name
          }`
        );
      }
      setPlayerTurn(true);
    }
  }, [opponentTurn]);

  // User Turn //
  const handleClick = e => {
    const index = Number(e.currentTarget.getAttribute('index'));
    /* Select attacker */
    if (index < 3 && life[index] > 0 && playerTurn && !isLoosingPoints) {
      selectAttackRef.current.play();
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

      if (reqCards.length !== 0) {
        this.setState({ validButtonFight: false });
      } else {
        this.setState({ validButtonFight: true });
      }
    }
  };

  return (
    <>
      {didMount && (
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
          gameStatus={gameStatus}
          selectAttackRef={selectAttackRef}
        />
      )}
    </>
  );
};
Board.propTypes = {
  deckOp: PropTypes.instanceOf(Array).isRequired,
  deck: PropTypes.instanceOf(Array).isRequired
};
export default Board;
