import React from 'react';
import gameslash from '../../img/gameslash.PNG';
import gamevict from '../../img/gamevict.png';

const RulesPage = () => {
  return (
    <section className="home-second-page darkcity-bg flex-column">
      <article className="flex-row">
        <img src={gameslash} alt="Damages exemple" />
        <p className="second-page-p">
          {`Select your hero then click on the opponent you want to destroy ! Be carefull, he should retaliate...`}
        </p>
      </article>
      <article className="flex-row">
        <img src={gamevict} alt="Victory" />
        <p className="second-page-p">{`Bring all your opponents to 0 HP to get the victory.`}</p>
      </article>
    </section>
  );
};

export default RulesPage;
