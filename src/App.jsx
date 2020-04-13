import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Accueil from './accueil/Accueil';
import Collection from './collection/Collection';
import Contact from './contact/Contact';
import PlateauJeu from './plateauJeu/PlateauJeu';
import Statistique from './statistique/Statistique';
import './App.css';
import NavBar from './navigation/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Accueil" exact component={Accueil} />
          <Route path="/Collection" exact component={Collection} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/PlateauJeu" exact component={PlateauJeu} />
          <Route path="/Statistique" exact component={Statistique} />
          <Route path="/" component={() => <div>ERREUR 404 !!!</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
