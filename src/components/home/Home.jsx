import React from 'react';
import NavBar from '../nav/NavBar';
import FirstHomePage from './FirstHomePage';
import SecondHomePage from './SecondHomePage';
import RulesPage from './RulesPage';
import './Home.css';

const Home = () => {
  return (
    <div className="home-main">
      <NavBar />
      <FirstHomePage />
      <SecondHomePage />
      <RulesPage />
    </div>
  );
};

export default Home;
