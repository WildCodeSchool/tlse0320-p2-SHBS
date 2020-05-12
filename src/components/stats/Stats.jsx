import React from 'react';
import StandardCard from '../Cards/StandardCard';
import statsTitle from '../../img/stats.png';
import './Stats.css';

const Stats = () => {
  const victories = JSON.parse(window.localStorage.getItem('myVictories'));
  const defeats = JSON.parse(window.localStorage.getItem('myDefeats'));
  const draws = window.localStorage.getItem('myDraws')
    ? JSON.parse(window.localStorage.getItem('myDraws'))
    : 0;
  const totalXp = victories * 300 + draws * 100;
  const lvl = Math.floor(totalXp / 1000) + 1;
  const currentXp = totalXp - (lvl - 1) * 1000;
  const visualCurrentXp = currentXp / 10;

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
              {Math.round((victories / (victories + defeats + draws)) * 100)}
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
            <div>
              <p className="bigger-P-Li">8 games</p>
              <StandardCard />
            </div>
            <div>
              <p className="bigger-P-Li">8 games</p>
              <StandardCard />
            </div>
            <div>
              <p className="bigger-P-Li">8 games</p>
              <StandardCard />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stats;
