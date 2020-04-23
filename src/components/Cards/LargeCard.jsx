import React from 'react';
import PropTypes from 'prop-types';
import './LargeCard.css';

const LargeCard = ({ combat, durability, image, name }) => {
  return (
    <>
      <div className="large-card">
        <img src={image} alt={name} />
      </div>
      <ul>
        <li>{`Name : ${name}`}</li>
        <li>{`Combat : ${combat}`}</li>
        <li>{`Durability : ${durability}`}</li>
      </ul>
    </>
  );
};

LargeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  combat: PropTypes.number.isRequired,
  durability: PropTypes.number.isRequired
};

export default LargeCard;
