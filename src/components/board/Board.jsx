import React, { useState } from 'react';
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
      combat: 50
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
      combat: 50
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
      combat: 50
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
      combat: 50
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
      combat: 50
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
      combat: 50
    },
    index: 6,
    images: {
      md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
    }
  }
];

const Board = () => {
  const [indexToDisplay, setIndexToDisplay] = useState();
  const [selectedCard, setSelectedCard] = useState([]);
  const [isAlive, setIsAlive] = useState([true, true, true, true, true, true]);
  const [life, setLife] = useState([
    playerDeck[0].powerstats.durability,
    playerDeck[1].powerstats.durability,
    playerDeck[2].powerstats.durability,
    opponentDeck[0].powerstats.durability,
    opponentDeck[1].powerstats.durability,
    opponentDeck[2].powerstats.durability
  ]);
  const [playerTurn, setPlayerTurn] = useState(true);

  const handleHover = index => {
    setIndexToDisplay(index);
  };

  const clearIndex = () => {
    setIndexToDisplay();
  };

  // const losePoints = () => {
  //   const nbToDecrement =
  //     opponentDeck[indexToDisplay[0]].powerstats.durability -
  //     playerDeck[selectedCard.boardIndex].powerstats.combat;
  //   if (opponentDeck[indexToDisplay[0]].powerstats.durability > nbToDecrement) {
  //     opponentDeck[indexToDisplay[0]].powerstats.durability -= 1;
  //   }
  // };

  const handleClick = () => {
    if (indexToDisplay < 3 && isAlive[indexToDisplay]) {
      setSelectedCard(playerDeck[indexToDisplay]);
    } else if (indexToDisplay >= 3 && selectedCard.length !== 0 && isAlive[indexToDisplay]) {
      // opponentDeck[indexToDisplay[0]].powerstats.durability -=
      //   playerDeck[selectedCard.boardIndex].powerstats.combat;
      // playerDeck[selectedCard.boardIndex].powerstats.durability -=
      //   opponentDeck[indexToDisplay[0]].powerstats.combat;

      // setInterval(losePoints, 1000);
      // losePoints();
      const tempLife = [...life];
      tempLife[indexToDisplay] -= 200;
      setLife(tempLife);

      setSelectedCard([]);
      setPlayerTurn(!playerTurn);
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
      isAlive={isAlive}
    />
  );
};

export default Board;
