import React from 'react';
import { useHistory } from 'react-router-dom';
import StandardCard from '../Cards/StandardCard';
import './Board.css';

const Board = () => {
  const history = useHistory();
  return (
    <div className="board-page">
      <div className="board-menu">
        <button className="collection-valid-fight" type="button" onClick={() => history.push('/')}>
          Menu
        </button>
      </div>
      <div className="board-cards">
        <div className="board-cards-top">
          <StandardCard />
          <StandardCard />
          <StandardCard />
        </div>
        <div className="board-cards-bottom">
          <StandardCard />
          <StandardCard />
          <StandardCard />
        </div>
      </div>
      <div className="board-log-text">
        <form>
          <h2 className="combat-log-title">Combat log</h2>
          <textarea value="Combat log" cols={40} rows={30} />
        </form>
      </div>
    </div>
  );
};

export default Board;
