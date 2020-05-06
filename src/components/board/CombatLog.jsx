import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CombatLog = ({ logConsole }) => {
  const [listToPrint, setListToPrint] = useState([]);

  useEffect(() => {
    if (logConsole && logConsole !== listToPrint[1]) {
      setListToPrint([...listToPrint, logConsole]);
    }
  }, [logConsole]);

  return (
    <div className="board-log-text flex-column">
      <h2>Combat log</h2>
      <div className="board-game-history">
        {listToPrint.map(phrase => {
          return <p>{phrase}</p>;
        })}
        <p>{logConsole}</p>
      </div>
    </div>
  );
};

CombatLog.propTypes = {
  logConsole: PropTypes.string.isRequired
};

export default CombatLog;
