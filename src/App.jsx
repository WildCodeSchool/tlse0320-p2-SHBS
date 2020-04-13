import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Collection from './components/collection/Collection';
import Contact from './components/contact/Contact';
import Board from './components/board/Board';
import Stats from './components/stats/Stats';
import NavBar from './components/nav/NavBar';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/Collection" exact component={Collection} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/Board" exact component={Board} />
          <Route path="/Stats" exact component={Stats} />
          <Route path="/" component={() => <div>ERREUR 404 !!!</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
