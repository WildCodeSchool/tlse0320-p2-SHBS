import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import cards from '../../datas/newCards.json';
import LargeCard from '../Cards/LargeCard';
import StandardCard from '../Cards/StandardCard';
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

  render() {
    const { characters, charToDisplay } = this.state;
    return (
      <div className="collection-page darkcity-bg flex-column">
        <img className="collection-title page-title" src={titleCollection} alt="Collection" />
        <div className="collection-top flex-row">
          <h2 className="collection-deck-title">My Deck</h2>
          <div className="collection-deck">
            {/*<StandardCard />
            <StandardCard />
            <StandardCard /> */}
          </div>
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
              {characters.map((character, i) => {
                return (
                  <StandardCard
                    handleHover={this.handleHover}
                    combat={character.powerstats.combat}
                    durability={character.powerstats.durability}
                    image={character.images.md}
                    index={parseInt(i)}
                    key={character.id}
                  />
                );
              })}
            </div>
          </div>

          <div className="collection-big-card">
            <LargeCard
              name={charToDisplay.name}
              image={charToDisplay.images.md}
              combat={charToDisplay.powerstats.combat}
              durability={charToDisplay.powerstats.durability}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Collection;
