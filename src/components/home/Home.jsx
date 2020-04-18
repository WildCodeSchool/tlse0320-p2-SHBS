import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav/NavBar';
import SecondHomePage from './SecondHomePage';
import RulesPage from './RulesPage';
import SHBSLong from '../../img/SHBSLong.png';
import playnowtext from '../../img/playnowtext.png';
import arrowswhite from '../../img/arrowswhite.png';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theposition: window.pageYOffset };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { theposition } = this.state;
    if (theposition < window.pageYOffset && theposition < 700) {
      this.scrollRef.current.click();
    }
    this.setState({ theposition: window.pageYOffset });
  }

  render() {
    return (
      <div className="home-main">
        <NavBar />
        <div className="home-first-bg">
          <div className="home-assets">
            <img
              src={SHBSLong}
              alt="SuperHeroes Battle Simulator's title"
              className="home-shbs-title"
            />
            <Link to="Collection" className="home-playnow-button button-splashbg">
              <img src={playnowtext} alt="Play now button text" />
            </Link>
            <a className="home-arrow-link" href="#home-bottom-encre" ref={this.scrollRef}>
              <img src={arrowswhite} alt="Arrows to scroll down" className="home-arrows" />
            </a>
          </div>
        </div>
        <SecondHomePage />
        <RulesPage />
      </div>
    );
  }
}

export default Home;
