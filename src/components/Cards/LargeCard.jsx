import React from 'react';
import PropTypes from 'prop-types';
import './LargeCard.css';

const LargeCard = props => {
  const { name, image, intelligence, strength, speed, durability, power, combat } = props;
  return (
    <div className="collection-big-card">
      <img src={image} alt={name} />
      <div>
        <p className="bigger-P-Li">{name}</p>
        <ul>
          <li>{`intelligence : ${intelligence}`}</li>
          <li>{`strength : ${strength}`}</li>
          <li>{`speed : ${speed}`}</li>
          <li>{`Durability : ${durability}`}</li>
          <li>{`power : ${power}`}</li>
          <li>{`Combat : ${combat}`}</li>
        </ul>
      </div>
    </div>
  );
};

LargeCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  combat: PropTypes.number.isRequired,
  durability: PropTypes.number.isRequired,
  strength: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  power: PropTypes.number.isRequired,
  intelligence: PropTypes.number.isRequired
};

export default LargeCard;
