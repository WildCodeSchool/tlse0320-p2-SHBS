import React from 'react';
import boardplay from '../../img/boardplay.png';
import cardcol from '../../img/cardcol.png';

const SecondHomePage = () => {
  return (
    <section className="home-second-page darkcity-bg flex-column" id="home-bottom-encre">
      <article className="flex-row">
        <img src={cardcol} alt="Placeholder" />
        <p className="second-page-p">
          {`Did you ever argued with you friends to be able to state who's the strongest superhero ?
          Of course you did, we all did. But who's right ? 
          Well, SuperHeroes Battle Simulator is the answer ! Choose your dream team between heroes
          from multiple universes and fight your opponents in this turn-based card game.`}
        </p>
      </article>
      <article className="flex-row">
        <img src={boardplay} alt="Placeholder" />
        <p className="second-page-p">
          {`Rules are pretty simples: each turn, you can select a card among you three heroes and
          choose who youwant to attack. The number on the left is the total of damages you're gonna
          inflict to your opponent. On the right, it's the remaining health of the hero. If the life
          is down to "0", the hero is out for the game. Your goal is to keep your team alive
          while you get rid of your opponents. But be carefull when attacking, your opponent will
          fight back...`}
        </p>
      </article>
    </section>
  );
};

export default SecondHomePage;
