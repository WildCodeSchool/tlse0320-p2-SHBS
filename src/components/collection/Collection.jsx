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
      deckSelect: ['empty', 'empty', 'empty'],
      numberOfCardsRequired: 'You need 3 more cards before fighting',
      validButtonFight: false,
      charToDisplay: {
        name: 'Poison Ivy',
        images: {
          md: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/md/522-poison-ivy.jpg'
        },
        biography: {
          fullName: 'Pamela Isley',
          alignment: 'bad'
        },
        appearance: {
          height: ['0', '168cm'],
          weight: ['0', '50kg']
        },
        index: 0
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
            allChars.forEach((chars, i) => (chars['index'] = i));
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

  componentWillUnmount() {
    let deckOpponent = [];
    let charactersAvailable = this.state.characters.filter(x => !this.state.deckSelect.includes(x));
    while (deckOpponent.length < 3) {
      deckOpponent.push(
        charactersAvailable.splice(Math.floor(Math.random() * charactersAvailable.length), 1)[0]
      );
    }
    this.props.addDeck(this.state.deckSelect);
    this.props.addDeckOp(deckOpponent);
  }

  handleClick = () => {
    const { deckSelect, characters, indexToDisplay } = this.state;
    if (!deckSelect.includes(characters[indexToDisplay])) {
      let tempDeck = [...deckSelect];
      if (deckSelect[0] === 'empty') {
        tempDeck[0] = characters[indexToDisplay];
        this.setState({
          deckSelect: tempDeck
        });
      } else if (deckSelect[1] === 'empty') {
        tempDeck[1] = characters[indexToDisplay];
        this.setState({
          deckSelect: tempDeck
        });
      } else if (deckSelect[2] === 'empty') {
        tempDeck[2] = characters[indexToDisplay];
        this.setState({
          deckSelect: tempDeck
        });
      }
      this.cardsRequired(tempDeck);
    }
  };

  handleDeckClick = () => {
    const { deckSelect, characters, indexToDisplay } = this.state;
    let tempDeck = [...deckSelect];
    let tempIndex = tempDeck.indexOf(characters[indexToDisplay]);
    tempDeck.splice(tempIndex, 1, 'empty');
    this.setState({
      deckSelect: tempDeck
    });
    this.cardsRequired(tempDeck);
  };

  cardsRequired = tempDeck => {
    const reqCards = tempDeck.filter(card => card === 'empty');
    const pluriel = reqCards.length > 1 ? 's' : '';
    const nbOfCardsRequiredMsg =
      reqCards.length !== 0
        ? `You need ${reqCards.length} more card${pluriel} before fighting`
        : 'You can fight !';
    this.setState({ numberOfCardsRequired: nbOfCardsRequiredMsg });
    if (reqCards.length !== 0) {
      this.setState({ validButtonFight: false });
    } else {
      this.setState({ validButtonFight: true });
    }
  };

  handleSearch(event) {
    this.setState({ search: event.target.value });
  }

  validFightButton = () => {
    const { validButtonFight } = this.state;
    return validButtonFight ? `Board` : `Collection`;
  };

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
            <Link
              to={{ pathname: this.validFightButton() }}
              className={
                deckSelect.includes('empty')
                  ? 'collection-valid-no-fight button-no-splashbg'
                  : 'collection-valid-fight button-splashbg'
              }
            >
              <img src={fightext} alt="Button to launch" />
            </Link>
          </div>
        </div>
        <div className="collection-bottom flex-row">
          <div className="collection-bottom-left flex-column">
            <div className="collection-filter">
              {/* Modify label and input */}
              <label htmlFor="research">Search :</label>
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
                .map(character => {
                  return (
                    <StandardCard
                      handleHover={this.handleHover}
                      handleClick={this.handleClick}
                      combat={character.powerstats.combat}
                      durability={character.powerstats.durability}
                      image={character.images.md}
                      index={character.index}
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
            fullName={charToDisplay.biography.fullName}
            alignment={charToDisplay.biography.alignment}
            height={charToDisplay.appearance.height[1]}
            weight={charToDisplay.appearance.weight[1]}
          />
        </div>
      </div>
    );
  }
}

export default Collection;
