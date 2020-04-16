import React from 'react';
import './Stats.css';
import loadingbar from '../../img/loadingbar.png';
import statsTitle from '../../img/stats.png';
import cardskeleton from '../../img/cardskeleton.png';
import NavBar from '../nav/NavBar';

const Stats = () => {
  return (
    <div className="stats-page">
      <NavBar />
      <div className="stats-body">
        <img className="stats-title" src={statsTitle} alt="Statistics"></img>
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
            <div>
              <p>0 xp</p>
              <img src={loadingbar} alt="xp-bar"></img>
              <p>1200 xp</p>
            </div>
          </div>
        </section>
        <section className="stats-played">
          <h2>Most played heroes</h2>
          <div>
            <div>
              <p>8 games</p>
              <img src={cardskeleton} alt="card name"></img>
            </div>
            <div>
              <p>8 games</p>
              <img src={cardskeleton} alt="card name"></img>
            </div>
            <div>
              <p>8 games</p>
              <img src={cardskeleton} alt="card name"></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stats;
