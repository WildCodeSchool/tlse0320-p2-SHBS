/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import music from '../../audio/music.mp3';
import selectAttack from '../../audio/Whip 01.wav';
import areFighting from '../../audio/Swirl 01.wav';
import youLose from '../../audio/Wild Laughs Male 01.wav';
import musicOn from '../../img/musicOn.png';
import musicOff from '../../img/musicOff.png';

const MusicAndSounds = props => {
  const { selectAttackRef, areFightingRef, youLoseRef } = props;
  const [soundActive, setSoundActive] = useState(false);

  return (
    <div>
      {soundActive ? (
        <>
          <img
            className="active-sound"
            onClick={() => setSoundActive(false)}
            src={musicOn}
            alt="Sound on"
          />
          <audio autoPlay loop src={music} />
        </>
      ) : (
        <>
          <img
            className="active-sound"
            onClick={() => setSoundActive(true)}
            src={musicOff}
            alt="Sound off"
          />
          <audio autoPlay muted loop src={music} />
        </>
      )}
      <audio ref={selectAttackRef} src={selectAttack} />
      <audio ref={areFightingRef} src={areFighting} />
      <audio ref={youLoseRef} src={youLose} />
    </div>
  );
};

export default MusicAndSounds;
