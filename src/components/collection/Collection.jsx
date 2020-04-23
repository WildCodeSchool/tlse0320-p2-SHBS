import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import cards from '../../datas/newCards.json';
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
      charsDatas: cards,
      characters: [],
      indexToDisplay: 0,
      search: '',
      deckSelect: [],
      numberOfCardsRequired: 'You need 3 more cards before fighting',
      charToDisplay: {
        name: 'Poison Ivy',
        images: {
          md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
        },
        powerstats: {
          combat: 40,
          durability: 40
        }
      }
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleHover = index => {
    this.setState({ indexToDisplay: index });
  };

  componentDidMount() {
    const { charsDatas } = this.state;
    axios
      .all(
        Object.keys(charsDatas).map(card =>
          axios.get(`https://akabab.github.io/superhero-api/api/id/${charsDatas[card].id}.json`)
        )
      )
      .then(
        axios.spread(
          function(...res) {
            const allChars = res.map(result => result.data);
            this.setState({ characters: allChars });
          }.bind(this)
        )
      );
  }

  componentDidUpdate() {
    if (this.state.charToDisplay !== this.state.characters[this.state.indexToDisplay]) {
      this.setState({ charToDisplay: this.state.characters[this.state.indexToDisplay] });
    }
  }

  handleClick = () => {
    const { deckSelect, characters, indexToDisplay } = this.state;
    if (deckSelect.length < 3 && !deckSelect.includes(characters[indexToDisplay])) {
      this.setState({
        deckSelect: deckSelect.concat(characters[indexToDisplay])
      });
      switch (deckSelect.length) {
        case 0:
          this.setState({ numberOfCardsRequired: 'You need 2 more cards before fighting' });
          break;
        case 1:
          this.setState({ numberOfCardsRequired: 'You need 1 more card before fighting' });
          break;
        case 2:
          this.setState({ numberOfCardsRequired: 'You can fight !' });
          break;
        default:
          break;
      }
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
        this.setState({ numberOfCardsRequired: 'You need 2 more cards before fighting' });
        break;
      case 1:
        this.setState({ numberOfCardsRequired: 'You need 3 more cards before fighting' });
        break;
      default:
        break;
    }
  };

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const {
      characters,
      numberOfCardsRequired,
      search,
      deckSelect,
      charToDisplay,
      indexToDisplay
    } = this.state;
    let NewSearch = search.toUpperCase();
    return (
      <div className="darkcity-bg flex-column">
        <img className="page-title" src={titleCollection} alt="Collection" />
        <div className="collection-top flex-row">
          <h2 className="collection-deck-title">My Deck</h2>
          <CollectionDeck
            handleClick={this.handleDeckClick}
            handleHover={this.handleHover}
            deckSelect={deckSelect}
            index={indexToDisplay}
            cardClass="container-card-text"
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
                .map((character, i) => {
                  return (
                    <StandardCard
                      handleHover={this.handleHover}
                      handleClick={this.handleClick}
                      combat={character.powerstats.combat}
                      durability={character.powerstats.durability}
                      image={character.images.md}
                      index={parseInt(i)}
                      key={character.id}
                      cardClass={
                        deckSelect.includes(character)
                          ? 'collection-card-is-chosen container-card-text'
                          : 'container-card-text'
                      }
                    />
                  );
                })}
            </div>
          </div>
          <LargeCard
            name={charToDisplay.name}
            image={charToDisplay.images.md}
            intelligence={charToDisplay.powerstats.intelligence}
            strength={charToDisplay.powerstats.strength}
            speed={charToDisplay.powerstats.speed}
            durability={charToDisplay.powerstats.durability}
            power={charToDisplay.powerstats.power}
            combat={charToDisplay.powerstats.combat}
          />
        </div>
      </div>
    );
  }
}

export default Collection;
