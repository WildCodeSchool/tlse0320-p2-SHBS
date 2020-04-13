import React from 'react';
import { useHistory } from 'react-router-dom';
import './Collection.css';

function Collection() {
  const history = useHistory();
  return (
    <div>
      <h1>Page collection</h1>
      <button className="btnValid" type="button" onClick={() => history.push('/PlateauJeu')}>
        Figth
      </button>
    </div>
  );
}

export default Collection;
