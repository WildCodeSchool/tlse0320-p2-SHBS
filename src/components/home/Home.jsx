import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav/NavBar';
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
      <div className="home-main" onScroll={this.handleScroll}>
        <NavBar />
        <div className="home-first-bg">
          <div className="home-assets">
            <img
              src={SHBSLong}
              alt="SuperHeroes Battle Simulator's title"
              className="home-shbs-title"
            />
            <Link to="Collection" className="home-playnow-button">
              <img src={playnowtext} alt="Play now button text" />
            </Link>
            <a href="#bottom-encre" ref={this.scrollRef}>
              <img src={arrowswhite} alt="Arrows to scroll down" className="home-arrows" />
            </a>
          </div>
        </div>
        <div id="bottom-encre" className="home-second-page">
          <div>
            <img
              src="https://via.placeholder.com/720x480.png?text=Board Presentation"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
