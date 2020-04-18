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
      <div className="stats-body darkcity-bg flex-column">
        <img className="page-title" src={statsTitle} alt="Statistics" />
        <section className="stats-games">
          <h2>Games</h2>
          <ul>
            <li className="bigger-P-Li">Played : 18</li>
            <li className="bigger-P-Li">Victories : 9</li>
            <li className="bigger-P-Li">Ratio V/D : 50%</li>
          </ul>
        </section>
        <section className="stats-level">
          <h2>Your level</h2>
          <div>
            <p className="bigger-P-Li">Lvl 7</p>
            <div className="stats-bar-wrapper">
              <p className="bigger-P-Li">0 xp</p>
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
