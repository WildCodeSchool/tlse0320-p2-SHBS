import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cards from '../../datas/cards.json';
import LargeCard from '../Cards/LargeCard';
import StandardCard from '../Cards/StandardCard';
import CollectionDeck from './CollectionDeck';
import titleCollection from '../../img/cardscollection.png';
import fightext from '../../img/Fightext.png';
import './Collection.css';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: cards,
      indexToDisplay: 0,
      deckSelect: []
    };
  }

  handleHover = index => {
    this.setState({ indexToDisplay: index });
  };

  handleClick = () => {
    const { deckSelect, characters, indexToDisplay } = this.state;
    if (deckSelect.length < 3) {
      this.setState({
        deckSelect: deckSelect.concat(characters[indexToDisplay])
      });
    }
  };

  handleDeckClick = () => {
    const { deckSelect, characters, indexToDisplay } = this.state;
    this.setState({
      deckSelect: deckSelect.splice(characters[indexToDisplay], indexToDisplay + 1)
    });
  };

  render() {
    const { characters, indexToDisplay } = this.state;
    return (
      <div className="collection-page darkcity-bg flex-column">
        <img className="collection-title page-title" src={titleCollection} alt="Collection" />
        <div className="collection-top flex-row">
          <h2 className="collection-deck-title">My Deck</h2>
          <CollectionDeck
            handleClick={this.handleDeckClick}
            handleHover={this.handleHover}
            deckSelect={this.state.deckSelect}
          />
          <div className="collection-valid flex-column">
            <p className="collection-valid-title bigger-P-Li">Create your deck</p>
            <p className="collection-valid-check bigger-P-Li">
              You need 1 more card before fighting
            </p>
            <Link to="Board" className="collection-valid-fight button-splashbg">
              <img src={fightext} alt="Button to launch" />
            </Link>
          </div>
        </div>
        <div className="collection-bottom flex-row">
          <div className="collection-bottom-left flex-column">
            <div className="collection-filter">
              <input type="search" />
              <button type="button"> Filter </button>
            </div>
            <div className="collection-cards flex-row">
              {characters.map(character => (
                <StandardCard
                  handleHover={this.handleHover}
                  handleClick={this.handleClick}
                  combat={character.combat}
                  durability={character.durability}
                  image={character.image}
                  index={character.index}
                  key={character.id}
                />
              ))}
            </div>
          </div>
          <div className="collection-big-card">
            <LargeCard character={characters[indexToDisplay]} />
          </div>
        </div>
      </div>
    );
  }
}

export default Collection;
