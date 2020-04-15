import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Collection from './components/collection/Collection';
import Contact from './components/contact/Contact';
import Board from './components/board/Board';
import Stats from './components/stats/Stats';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Collection" exact component={Collection} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Board" exact component={Board} />
          <Route path="/Stats" exact component={Stats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
