import React, { useState, useEffect } from 'react';
import StandardCard from '../Cards/StandardCard';
import loadingbar from '../../img/loadingbar.png';
import statsTitle from '../../img/stats.png';
import './Stats.css';

const Stats = () => {
  const victory = JSON.parse(window.localStorage.getItem('myVictories'));
  const defeat = JSON.parse(window.localStorage.getItem('myDefeats'));

  return (
    <div className="stats-page">
      <div className="stats-body darkcity-bg flex-column">
        <img className="page-title" src={statsTitle} alt="Statistics" />
        <section className="stats-games">
          <h2>Games</h2>
          <ul>
            <li className="bigger-P-Li">
              {'Played : '}
              {victory + defeat}
            </li>
            <li className="bigger-P-Li">
              {'Victories : '}
              {victory}
            </li>
            <li className="bigger-P-Li">
              {'Ratio V/D : '}
              {Math.round((victory / (victory + defeat)) * 100)}
              {' %'}
            </li>
          </ul>
        </section>
        <section className="stats-level">
          <h2>Your level</h2>
          <div>
            <p className="bigger-P-Li">Lvl 7</p>
            <div className="stats-bar-wrapper">
              <p className="bigger-P-Li">
                {victory * 500}
                {' xp'}
              </p>
              <img className="stats-loading-bar" src={loadingbar} alt="xp-bar" />
              <p className="bigger-P-Li">1200 xp</p>
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
