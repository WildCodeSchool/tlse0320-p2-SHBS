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
      characters: cards,
      charsDatas: [],
      loadedDatas: false
    };
  }

  handleHover = index => {
    this.setState({ indexToDisplay: index });
  };

  componentDidMount() {
    const { characters } = this.state;
    axios
      .all(
        Object.keys(characters).map(card =>
          axios.get(
            `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2797197167065435/${characters[card].id}`
          )
        )
      )
      .then(
        axios.spread(function(...res) {
          res.forEach(char => console.log(char.data));
          this.setState(res);
        })
      );
  }

  // componentDidMount() {
  //   const { characters } = this.state;
  //   axios.all(
  //     .get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2797197167065435/${characters.batman.id}`)
  //     .get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2797197167065435/${characters.bane.id}`)

  //   )
  //     .then (res => {
  //       // all requests are now complete
  //       console.log(res.data);
  //     });
  // }

  render() {
    const { charsDatas, loadedDatas } = this.state;
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
            if ({loadedDatas}){' '}
            {
              <div className="collection-cards flex-row">
                {characters.map(character => {
                  return (
                    <StandardCard
                      handleHover={this.handleHover}
                      combat={this.state.combat}
                      durability={this.state.durability}
                      image={this.state.image}
                      index={this.state.index}
                      key={this.state.id}
                    />
                  );
                })}
              </div>
            }
          </div>

          <div className="collection-big-card">
            {/* <LargeCard character={characters[indexToDisplay]} /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Collection;
