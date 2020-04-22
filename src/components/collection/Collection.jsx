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
      search: '',
      deckSelect: [],
      numberOfCardsRequired: 'You need 3 more card before fighting'
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleHover = index => {
    this.setState({ indexToDisplay: index });
  };

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleClick = () => {
    const { deckSelect, characters, indexToDisplay } = this.state;
    if (deckSelect.length < 3) {
      this.setState({
        deckSelect: deckSelect.concat(characters[indexToDisplay])
      });
    }
    switch (deckSelect.length) {
      case 0:
        this.setState({ numberOfCardsRequired: 'You need 2 more card before fighting' });
        break;
      case 1:
        this.setState({ numberOfCardsRequired: 'You need 1 more card before fighting' });
        break;
      case 2:
        this.setState({ numberOfCardsRequired: 'You can fight !' });
      default:
        break;
    }
  };

  handleDeckClick = () => {
    const { deckSelect, characters, indexToDisplay } = this.state;
    let tempDeck = [...deckSelect];
    let tempIndex = tempDeck.indexOf(characters[indexToDisplay]);
    tempDeck.splice(tempIndex, 1);
    this.setState({
      deckSelect: tempDeck
    });
    switch (deckSelect.length) {
      case 3:
        this.setState({ numberOfCardsRequired: 'You need 1 more card before fighting' });
        break;
      case 2:
        this.setState({ numberOfCardsRequired: 'You need 2 more card before fighting' });
        break;
      case 1:
        this.setState({ numberOfCardsRequired: 'You need 3 more card before fighting' });
      default:
        break;
    }
  };

  render() {
    const { characters, indexToDisplay, numberOfCardsRequired, search } = this.state;
    let NewSearch = search.toUpperCase();
    return (
      <div className="darkcity-bg flex-column">
        <img className="page-title" src={titleCollection} alt="Collection" />
        <div className="collection-top flex-row">
          <h2 className="collection-deck-title">My Deck</h2>
          <CollectionDeck
            handleClick={this.handleDeckClick}
            handleHover={this.handleHover}
            deckSelect={this.state.deckSelect}
          />
          <div className="collection-valid flex-column">
            <p className="collection-valid-title bigger-P-Li">Create your deck</p>
            <p className="bigger-P-Li">{numberOfCardsRequired}</p>
            <Link to="Board" className="collection-valid-fight button-splashbg">
              <img src={fightext} alt="Button to launch" />
            </Link>
          </div>
        </div>
        <div className="collection-bottom flex-row">
          <div className="collection-bottom-left flex-column">
            <div className="collection-filter">
              {/* Modify label and input */}
              <label htmlFor="research">`Search : `</label>
              <input
                id="research"
                type="text"
                value={this.state.search}
                onChange={this.handleSearch}
              />
            </div>
            <div className="collection-cards flex-row">
              {characters
                .filter(test => test.name.toUpperCase().startsWith(NewSearch, 0))
                .map(character => (
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
