import React from 'react';
import StandardCard from '../Cards/StandardCard';
import NavBar from '../nav/NavBar';
import './Board.css';

const Board = () => {
  return (
    <section className="darkcity-bg flex-row">
      <NavBar />
      <div className="board-cards flex-column">
        <div className="board-cards-top flex-row">
          <StandardCard />
          <StandardCard />
          <StandardCard />
        </div>
        <div className="board-cards-bottom flex-row">
          <StandardCard />
          <StandardCard />
          <StandardCard />
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
