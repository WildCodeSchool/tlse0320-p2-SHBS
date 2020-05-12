import React from 'react';
import PropTypes from 'prop-types';
import cardskeleton from '../../img/cardskeleton.png';
import './StandardCard.css';

const StandardCard = props => {
  const {
    combat,
    durability,
    image,
    handleHover,
    index,
    handleClick,
    cardClass,
    clearIndex,
    damages
  } = props;
  return (
    <div
      className={cardClass}
      onClick={handleClick}
      onMouseEnter={() => handleHover(index)}
      onMouseLeave={clearIndex}
      index={index}
    >
      <img
        className="standard-card"
        style={{ backgroundImage: `url('${image}')` }}
        src={cardskeleton}
        alt="border of the card"
      />
      <p className="attack">{combat}</p>
      <p className="life">{durability}</p>
      {damages ? (
        <div className={damages[1] === index ? 'damages-splash' : 'damages-splash-hidden'}>
          <p>{`-${damages[0]}`}</p>
        </div>
      ) : null}
    </div>
  );
};

StandardCard.propTypes = {
  damages: PropTypes.instanceOf(Array).isRequired,
  clearIndex: PropTypes.func.isRequired,
  combat: PropTypes.number,
  durability: PropTypes.number,
  image: PropTypes.string.isRequired,
  handleHover: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  cardClass: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

StandardCard.defaultProps = {
  combat: 0,
  durability: 0
};

export default StandardCard;
