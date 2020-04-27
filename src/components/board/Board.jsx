import React, { useState, useEffect } from 'react';
import StandardCard from '../Cards/StandardCard';
import './Board.css';

const Board = () => {
  const [indexToDisplay, setIndexToDisplay] = useState(0);
  const [selectedCard, setSelectedCard] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([
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
  const [playerDeck, setPlayerDeck] = useState([
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

  const handleHover = index => {
    setIndexToDisplay(index);
  };

  const handleClick = () => {
    if (playerDeck[indexToDisplay].cat === 'player') {
      setSelectedCard(playerDeck[indexToDisplay]);
    }
  };

  useEffect(() => {
    console.log('====================================');
    console.log(selectedCard);
    console.log('====================================');
  }, [selectedCard]);

  return (
    <section className="darkcity-bg flex-row">
      <div className="board-cards flex-column">
        <div className="board-cards-top container-card-text flex-row">
          {opponentDeck.map((character, i) => {
            character['cat'] = 'opponent';
            character['boardIndex'] = i;
            return (
              <StandardCard
                handleHover={handleHover}
                handleClick={handleClick}
                combat={character.powerstats.combat}
                durability={character.powerstats.durability}
                image={character.images.md}
                index={character.boardIndex}
                key={character.id}
              />
            );
          })}
        </div>
        <div className="board-cards-bottom container-card-text flex-row">
          {playerDeck.map((character, i) => {
            character['cat'] = 'player';
            character['boardIndex'] = i;
            return (
              <StandardCard
                handleHover={handleHover}
                handleClick={handleClick}
                combat={character.powerstats.combat}
                durability={character.powerstats.durability}
                image={character.images.md}
                index={character.boardIndex}
                key={character.id}
              />
            );
          })}
        </div>
      </div>
      <div className="board-log-text flex-column">
        <h2>Combat log</h2>
        <div className="board-game-history" />
      </div>
    </section>
  );
};

export default Board;
