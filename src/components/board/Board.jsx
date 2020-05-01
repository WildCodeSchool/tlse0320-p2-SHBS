import React, { useState, useEffect } from 'react';
import './Board.css';
import DisplayBoard from './DisplayBoard';

const opponentDeck = [
  {
    id: 522,
    name: 'Batman',
    powerstats: {
      intelligence: 81,
      strength: 14,
      speed: 21,
      durability: 300,
      power: 100,
      combat: 30
    },
    index: 1,
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/69-batman.jpg'
    }
  },
  {
    id: 523,
    name: 'Batman',
    powerstats: {
      intelligence: 81,
      strength: 14,
      speed: 21,
      durability: 400,
      power: 100,
      combat: 80
    },
    index: 2,
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/69-batman.jpg'
    }
  },
  {
    id: 524,
    name: 'Batman',
    powerstats: {
      intelligence: 81,
      strength: 14,
      speed: 21,
      durability: 500,
      power: 100,
      combat: 200
    },
    index: 3,
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/69-batman.jpg'
    }
  }
];
const playerDeck = [
  {
    id: 525,
    name: 'Poison Ivy',
    powerstats: {
      intelligence: 81,
      strength: 14,
      speed: 21,
      durability: 200,
      power: 100,
      combat: 40
    },
    index: 4,
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
    }
  },
  {
    id: 526,
    name: 'Poison Ivy',
    powerstats: {
      intelligence: 81,
      strength: 14,
      speed: 21,
      durability: 250,
      power: 100,
      combat: 100
    },
    index: 5,
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
    }
  },
  {
    id: 527,
    name: 'Poison Ivy',
    powerstats: {
      intelligence: 81,
      strength: 14,
      speed: 21,
      durability: 300,
      power: 100,
      combat: 200
    },
    index: 6,
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
    }
  }
];

const Board = () => {
  const [didMount, setDidMount] = useState(false);
  const [indexToDisplay, setIndexToDisplay] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [playerTurn, setPlayerTurn] = useState(true);
  const [oponentTurn, setOponentTurn] = useState(false);
  const [areFighting, setAreFighting] = useState(['', '', false]);
  const [isLoosingPoints, setIsLoosingPoints] = useState(false);
  const [life, setLife] = useState([
    playerDeck[0].powerstats.durability,
    playerDeck[1].powerstats.durability,
    playerDeck[2].powerstats.durability,
    opponentDeck[0].powerstats.durability,
    opponentDeck[1].powerstats.durability,
    opponentDeck[2].powerstats.durability
  ]);
  const [attack, setAttack] = useState([
    playerDeck[0].powerstats.combat,
    playerDeck[1].powerstats.combat,
    playerDeck[2].powerstats.combat,
    opponentDeck[0].powerstats.combat,
    opponentDeck[1].powerstats.combat,
    opponentDeck[2].powerstats.combat
  ]);

  useEffect(() => setDidMount(true), []);

  const handleHover = index => {
    setIndexToDisplay(index);
  };

  const clearIndex = () => {
    setIndexToDisplay();
  };

  /* Losing points one by one */
  useEffect(() => {
    const id = setInterval(() => {
      if (didMount) {
        if (life[areFighting[0]] > areFighting[1] && life[areFighting[0]] > 0) {
          setIsLoosingPoints(true);
          const tempLife = [...life];
          tempLife[areFighting[0]] -= 1;
          setLife(tempLife);
          setAreFighting([areFighting[0], areFighting[1], !areFighting[2]]);
        } else {
          setIsLoosingPoints(false);
        }
      }
    }, 20);
    return () => {
      clearInterval(id);
    };
  }, [areFighting]);

  /* Set IA turn and timing */
  useEffect(() => {
    if (didMount) {
      if (!isLoosingPoints && !playerTurn) {
        setTimeout(() => setOponentTurn(!oponentTurn), 1300);
      }
    }
  }, [isLoosingPoints]);

  /* IA turn */
  useEffect(() => {
    if (didMount) {
      /* Random IA choice */
      const aliveSort = [...life].map((card, i) => (card > 0 ? i : 'dead'));
      const oponentSort = [...aliveSort].splice(3).filter(card => card !== 'dead');
      const playerSort = [...aliveSort].splice(0, 3).filter(card => card !== 'dead');
      const randomOponent = oponentSort[Math.floor(Math.random() * oponentSort.length)];
      const randomPlayer = playerSort[Math.floor(Math.random() * oponentSort.length)];
      /* Apply attack */
      const diffDamage = life[randomPlayer] - attack[randomOponent];
      setAreFighting([randomPlayer, diffDamage, !areFighting[2]]);
      setPlayerTurn(true);
      console.log(`IA n°${randomOponent} attack player n°${randomPlayer}`);
    }
  }, [oponentTurn]);

  /* User Turn */
  const handleClick = e => {
    const index = e.currentTarget.getAttribute('index');
    if (index < 3 && life[index] > 0 && playerTurn && !isLoosingPoints) {
      setSelectedCard(index);
    } else if (index >= 3 && life[index] > 0 && selectedCard) {
      const diffDamage = life[index] - attack[selectedCard];
      setAreFighting([index, diffDamage, !areFighting[2]]);
      setSelectedCard();
      setPlayerTurn(false);
      console.log(`Player n°${selectedCard} attack IA n°${index}`);
    }
  };

  return (
    <DisplayBoard
      opponentDeck={opponentDeck}
      playerDeck={playerDeck}
      handleClick={handleClick}
      handleHover={handleHover}
      clearIndex={clearIndex}
      life={life}
      attack={attack}
    />
  );
};

export default Board;
