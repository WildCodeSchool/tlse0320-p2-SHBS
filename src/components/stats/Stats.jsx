import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StandardCard from '../Cards/StandardCard';
import statsTitle from '../../img/stats.png';
import cards from '../../datas/newCards.json';
import './Stats.css';

const Stats = () => {
  const victories = window.localStorage.getItem('myVictories')
    ? JSON.parse(window.localStorage.getItem('myVictories'))
    : 0;
  const defeats = window.localStorage.getItem('myDefeats')
    ? JSON.parse(window.localStorage.getItem('myDefeats'))
    : 0;
  const draws = window.localStorage.getItem('myDraws')
    ? JSON.parse(window.localStorage.getItem('myDraws'))
    : 0;
  const ratio = victories !== 0 ? Math.round((victories / (victories + defeats + draws)) * 100) : 0;
  const totalXp = victories * 300 + draws * 100;
  const lvl = Math.floor(totalXp / 1000) + 1;
  const currentXp = totalXp - (lvl - 1) * 1000;
  const visualCurrentXp = currentXp / 10;
  const playedCount = window.localStorage.getItem('myPlayedCount')
    ? JSON.parse(window.localStorage.getItem('myPlayedCount'))
    : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [characters, setCharacters] = useState([]);
  const [bestCards, setBestCards] = useState([]);

  useEffect(() => {
    if (characters.length < 1) {
      axios
        .all(
          Object.keys(cards).map(card =>
            axios.get(`https://akabab.github.io/superhero-api/api/id/${cards[card].id}.json`)
          )
        )
        .then(
          axios.spread(function(...res) {
            const allChars = res.map(result => result.data);
            allChars.forEach((chars, i) => (chars['index'] = i));
            setCharacters(allChars);
          })
        );
    }
  }, []);

  useEffect(() => {
    if (bestCards.length < 1 && characters.length > 1) {
      const tempPlayedCount = [...playedCount];
      const tempBestCards = [];
      characters.forEach((char, i) => (char['games'] = playedCount[i]));
      for (let x = 0; x < 3; x++) {
        const index = tempPlayedCount.reduce((a, b, i) => (tempPlayedCount[a] >= b ? a : i), 0);
        tempBestCards.push(characters[index]);
        tempPlayedCount[index] = -1;
      }
      setBestCards(tempBestCards);
    }
  }, [characters]);

  return (
    <div className="stats-page">
      <div className="stats-body darkcity-bg flex-column">
        <img className="page-title" src={statsTitle} alt="Statistics" />
        <section className="stats-games">
          <h2>Games</h2>
          <ul>
            <li className="bigger-P-Li">
              {'Played : '}
              {victories + defeats + draws}
            </li>
            <li className="bigger-P-Li">
              {'Victories : '}
              {victories}
            </li>
            <li className="bigger-P-Li">
              {'Defeats : '}
              {defeats}
            </li>
            <li className="bigger-P-Li">
              {'Draws : '}
              {draws}
            </li>
            <li className="bigger-P-Li">
              {'Ratio Victory : '}
              {ratio}
              {' %'}
            </li>
          </ul>
        </section>
        <section className="stats-level">
          <h2>Your level</h2>
          <div>
            <p className="bigger-P-Li">
              {'Lvl : '}
              {lvl}
            </p>
            <div className="stats-bar-wrapper">
              <p className="bigger-P-Li">
                {currentXp}
                {' xp'}
              </p>
              {/* <img className="stats-loading-bar" src={loadingbar} alt="xp-bar" /> */}
              <div className="container-xp-bar">
                <div className="xp-bar" style={{ width: `${visualCurrentXp}%` }} />
              </div>
              <p className="bigger-P-Li">1000 xp</p>
            </div>
          </div>
        </section>
        <section className="stats-played">
          <h2>Most played heroes</h2>
          <div>
            {bestCards &&
              bestCards.map(character => {
                return (
                  <div>
                    <p>{`${character.games} games`}</p>
                    <StandardCard
                      handleHover={() => {}}
                      combat={character.powerstats.combat}
                      durability={character.powerstats.durability}
                      image={character.images.md}
                      index={character.index}
                      key={character.id}
                      cardClass="container-card-text"
                    />
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stats;
