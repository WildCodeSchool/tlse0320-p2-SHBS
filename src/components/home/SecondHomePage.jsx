import React from 'react';
import carddetails from '../../img/carddetails.png';
import cardcol from '../../img/cardcol.png';

const SecondHomePage = () => {
  return (
    <section className="home-second-page darkcity-bg flex-column" id="home-bottom-encre">
      <article className="flex-row">
        <img src={cardcol} alt="Placeholder" />
        <p className="second-page-p">
          {`Choose among more than 20 heroes from multiple universes !`}
        </p>
      </article>
      <article className="flex-row">
        <img src={carddetails} alt="Placeholder" />
        <p className="second-page-p">
          {`Just two stats: Attack at the bottom left and health-points at the bottom right.`}
        </p>
      </article>
    </section>
  );
};

export default SecondHomePage;
