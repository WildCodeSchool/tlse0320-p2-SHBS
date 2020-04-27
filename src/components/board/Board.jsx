import React, { useState } from 'react';
import StandardCard from '../Cards/StandardCard';
import './Board.css';

const Board = () => {
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
      images: {
        md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/69-batman.jpg'
      }
    },
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
      images: {
        md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/69-batman.jpg'
      }
    },
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
      images: {
        md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/69-batman.jpg'
      }
    }
  ]);
  const [playerDeck, setPlayerDeck] = useState([
    {
      id: 522,
      name: 'Poison Ivy',
      powerstats: {
        intelligence: 81,
        strength: 14,
        speed: 21,
        durability: 250,
        power: 100,
        combat: 50
      },
      images: {
        md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
      }
    },
    {
      id: 522,
      name: 'Poison Ivy',
      powerstats: {
        intelligence: 81,
        strength: 14,
        speed: 21,
        durability: 250,
        power: 100,
        combat: 50
      },
      images: {
        md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
      }
    },
    {
      id: 522,
      name: 'Poison Ivy',
      powerstats: {
        intelligence: 81,
        strength: 14,
        speed: 21,
        durability: 250,
        power: 100,
        combat: 50
      },
      images: {
        md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
      }
    }
  ]);

  return (
    <section className="darkcity-bg flex-row">
      <div className="board-cards flex-column">
        <div className="board-cards-top container-card-text flex-row">
          {opponentDeck.map(character => {
            return (
              <StandardCard
                //handleHover={this.handleHover}
                //handleClick={this.handleClick}
                combat={character.powerstats.combat}
                durability={character.powerstats.durability}
                image={character.images.md}
                index={character.index}
                key={character.id}
              />
            );
          })}
        </div>
        <div className="board-cards-bottom container-card-text flex-row">
          {playerDeck.map(character => {
            return (
              <StandardCard
                //handleHover={this.handleHover}
                //handleClick={this.handleClick}
                combat={character.powerstats.combat}
                durability={character.powerstats.durability}
                image={character.images.md}
                index={character.index}
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
