/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import music from '../../audio/music.mp3';
import selectAttack from '../../audio/Whip 01.wav';
import musicOn from '../../img/musicOn.png';
import musicOff from '../../img/musicOff.png';

const MusicAndSounds = ({ selectAttackRef }) => {
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
    </div>
  );
};

export default MusicAndSounds;
