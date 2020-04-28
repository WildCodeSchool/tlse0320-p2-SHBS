import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Collection from './components/collection/Collection';
import Contact from './components/contact/Contact';
import Board from './components/board/Board';
import Stats from './components/stats/Stats';
import NavBar from './components/nav/NavBar';
import './App.css';

function App() {
  const [deck, setDeck] = useState([]);
  const addDeck = deckSelect => {
    setDeck(deckSelect);
  };
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Collection" exact>
            <Collection addDeck={addDeck} />
          </Route>
          <Route path="/Board" exact>
            <Board deck={deck} />
          </Route>
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Stats" exact component={Stats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
