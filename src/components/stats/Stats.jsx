import React from 'react';
import StandardCard from '../Cards/StandardCard';
import './Stats.css';
import loadingbar from '../../img/loadingbar.png';
import statsTitle from '../../img/stats.png';
import NavBar from '../nav/NavBar';

const Stats = () => {
  return (
    <div className="stats-page">
      <NavBar />
      <div className="stats-body">
        <div className="stats-wrapper">
          <img className="stats-title" src={statsTitle} alt="Statistics" />
          <section className="stats-games">
            <h2>Games</h2>
            <ul>
              <li>Played : 18</li>
              <li>Victories : 9</li>
              <li>Ratio V/D : 50%</li>
            </ul>
          </section>
          <section className="stats-level">
            <h2>Your level</h2>
            <div>
              <p>Lvl 7</p>
              <div className="stats-bar-wrapper">
                <p>0 xp</p>
                <img className="stats-loading-bar" src={loadingbar} alt="xp-bar" />
                <p>1200 xp</p>
              </div>
            </div>
          </section>
          <section className="stats-played">
            <h2>Most played heroes</h2>
            <div>
              <div>
                <p>8 games</p>
                <StandardCard />
              </div>
              <div>
                <p>8 games</p>
                <StandardCard />
              </div>
              <div>
                <p>8 games</p>
                <StandardCard />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stats;
