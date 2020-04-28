import React, { useState, useEffect } from 'react';
//import StandardCard from '../Cards/StandardCard';
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
    if (indexToDisplay[1] === 'player') {
      setSelectedCard(playerDeck[indexToDisplay[0]]);
    } else if (indexToDisplay[1] === 'opponent' && selectedCard.length !== 0) {
      opponentDeck[indexToDisplay[0]].powerstats.durability =
        opponentDeck[indexToDisplay[0]].powerstats.durability -
        playerDeck[selectedCard.boardIndex].powerstats.combat;
      playerDeck[selectedCard.boardIndex].powerstats.durability =
        playerDeck[selectedCard.boardIndex].powerstats.durability -
        opponentDeck[indexToDisplay[0]].powerstats.combat;
      setPlayerTurn(!playerTurn);
    }
  };

  useEffect(() => {
    playerDeck.forEach((card, i) => {
      if (card.powerstats.durability <= 0) {
        playerDeck.splice(i, 1);
      }
    });
    opponentDeck.forEach((card, i) => {
      if (card.powerstats.durability <= 0) {
        opponentDeck.splice(i, 1);
      }
    });
  }, [playerDeck, opponentDeck]);

  // useEffect(() => {
  //   console.log('====================================');
  //   console.log(selectedCard);
  //   console.log('====================================');
  // }, [selectedCard]);

  // useEffect(() => {
  //   console.log('====================================');
  //   console.log(indexToDisplay);
  //   console.log('====================================');
  // }, [indexToDisplay]);

  return (
    <DisplayBoard
      opponentDeck={opponentDeck}
      playerDeck={playerDeck}
      handleClick={handleClick}
      handleHover={handleHover}
      clearIndex={clearIndex}
    />
    // <section className="darkcity-bg flex-row">
    //   <div className="board-cards flex-column">
    //     <div className="board-cards-top flex-row">
    //       {opponentDeck.map((character, i) => {
    //         character['boardIndex'] = i;
    //         return (
    //           <StandardCard
    //             handleHover={handleHover}
    //             handleClick={handleClick}
    //             combat={character.powerstats.combat}
    //             durability={character.powerstats.durability}
    //             image={character.images.md}
    //             index={character.boardIndex}
    //             category="opponent"
    //             key={character.id}
    //             cardClass="container-card-text"
    //           />
    //         );
    //       })}
    //     </div>
    //     <div className="board-cards-bottom flex-row">
    //       {playerDeck.map((character, i) => {
    //         character['boardIndex'] = i;
    //         return (
    //           <StandardCard
    //             handleHover={handleHover}
    //             handleClick={handleClick}
    //             clearIndex={clearIndex}
    //             combat={character.powerstats.combat}
    //             durability={character.powerstats.durability}
    //             image={character.images.md}
    //             index={character.boardIndex}
    //             category="player"
    //             key={character.id}
    //             cardClass="container-card-text"
    //           />
    //         );
    //       })}
    //     </div>
    //   </div>
    //   <div className="board-log-text flex-column">
    //     <h2>Combat log</h2>
    //     <div className="board-game-history" />
    //   </div>
    // </section>
  );
};

export default Board;
