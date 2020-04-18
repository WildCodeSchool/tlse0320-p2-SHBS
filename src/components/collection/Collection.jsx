import React, { Component } from 'react';
/* import axios from 'axios'; */
import { Link } from 'react-router-dom';
/* import cards from '../../datas/cards.json'; */
import LargeCard from '../Cards/LargeCard';
import StandardCard from '../Cards/StandardCard';
import titleCollection from '../../img/cardscollection.png';
import fightext from '../../img/Fightext.png';
import NavBar from '../nav/NavBar';
import './Collection.css';

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [
        {
          id: '522',
          name: 'Poison Ivy',
          image: 'https://www.superherodb.com/pictures2/portraits/10/100/757.jpg'
        }
      ],
      idToDisplay: 0
    };
  }
  //https://www.superherodb.com/pictures2/portraits/10/100/757.jpg
  /*   componentDidMount() {
    this.getCharacters();
  } */

  /*   getCharacters = () => {
    axios
      .get('https://melroune.github.io/starwars-api/api/all.json')
      .then(res => this.setState({ cards: res.data }))
      .then(res => console.log(res));
  }; */
  handleClick = id => {
    this.setState({ idToDisplay: id });
  };
  render() {
    const { characters, idToDisplay } = this.state;
    return (
      <div className="collection-page">
        <NavBar />
        <img className="collection-title" src={titleCollection} alt="Collection" />
        <div className="collection-top">
          <p className="collection-deck-title">My Deck</p>
          <div className="collection-deck">
            <StandardCard />
            <StandardCard />
            <StandardCard />
          </div>
          <div className="collection-valid">
            <p className="collection-valid-title">Create your deck</p>
            <p className="collection-valid-check">You need 1 more card before fighting</p>
            <Link to="Board" className="collection-valid-fight">
              <img src={fightext} alt="Button to launch" />
            </Link>
          </div>
        </div>

        <div className="collection-bottom">
          <div className="collection-bottom-left">
            <div className="collection-filter">
              <input type="search" />
              <button type="button"> Filter </button>
            </div>
            <div className="collection-deck">
              {characters.map(character => (
                <StandardCard
                  handleClick={this.handleClick}
                  charactername={character.name}
                  characterimg={character.image}
                  key={character.id}
                />
              ))}
            </div>
          </div>

          <div className="collection-big-card">
            <LargeCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Collection;
