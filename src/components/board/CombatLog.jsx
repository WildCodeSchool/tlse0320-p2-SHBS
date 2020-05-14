import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CombatLog = ({ logConsole }) => {
  const [phrasesToPrint, setPhrasesToPrint] = useState([]);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [tempPhrase, setTempPhrase] = useState([]);
  const [isConcat, setIsConcat] = useState(false);

  useEffect(() => {
    const letterByletter = setInterval(() => {
      if (logConsole && tempPhrase.length <= logConsole.length) {
        setIsConcat(true);
        setTempPhrase(tempPhrase.concat(logConsole[i]));
        const tmpArr = [...phrasesToPrint];
        tmpArr[j] = tempPhrase;
        setPhrasesToPrint(tmpArr);
        setI(i + 1);
      } else if (logConsole) {
        setI(0);
        setJ(j + 1);
        setTempPhrase('');
        setIsConcat(false);
      }
    }, 35);
    return () => {
      clearInterval(letterByletter);
    };
  }, [logConsole, i]);

  return (
    <div className="board-log-text flex-column">
      <h2>Combat log</h2>
      <div className="board-game-history">
        {phrasesToPrint.map(phrase => {
          return <p className="bigger-P-Li">{phrase}</p>;
        })}
        {!isConcat && <p className="console-cursor bigger-P-Li">-</p>}
      </div>
    </div>
  );
};

CombatLog.propTypes = {
  logConsole: PropTypes.string.isRequired
};

export default CombatLog;
