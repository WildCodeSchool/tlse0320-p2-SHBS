import React, { useState } from 'react';
import './Board.css';
import DisplayBoard from './DisplayBoard';

const Board = () => {
  const [indexToDisplay, setIndexToDisplay] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [opponentDeck] = useState([
    {
      id: 522,
      name: 'Batman',
      powerstats: {
        intelligence: 81,
        strength: 14,
        speed: 21,
        durability: 250,
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
        durability: 250,
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
        durability: 250,
        power: 100,
        combat: 50
      },
      index: 3,
      images: {
        md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/69-batman.jpg'
      }
    }
  ]);
  const [playerDeck] = useState([
    {
      id: 525,
      name: 'Poison Ivy',
      powerstats: {
        intelligence: 81,
        strength: 14,
        speed: 21,
        durability: 250,
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
        durability: 250,
        power: 100,
        combat: 50
      },
      index: 6,
      images: {
        md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
      }
    }
  ]);
  const [playerTurn, setPlayerTurn] = useState(true);

  const handleHover = index => {
    setIndexToDisplay(index);
  };

  const clearIndex = () => {
    setIndexToDisplay([]);
  };

  const handleClick = () => {
    if (indexToDisplay[1] === 'player' && indexToDisplay[2] === 'alive') {
      setSelectedCard(playerDeck[indexToDisplay[0]]);
    } else if (
      indexToDisplay[1] === 'opponent' &&
      selectedCard.length !== 0 &&
      indexToDisplay[2] === 'alive'
    ) {
      opponentDeck[indexToDisplay[0]].powerstats.durability =
        opponentDeck[indexToDisplay[0]].powerstats.durability -
        playerDeck[selectedCard.boardIndex].powerstats.combat;
      playerDeck[selectedCard.boardIndex].powerstats.durability =
        playerDeck[selectedCard.boardIndex].powerstats.durability -
        opponentDeck[indexToDisplay[0]].powerstats.combat;
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
    />
  );
};

export default Board;
