import React, { useState } from 'react';
import music from '../../audio/music.mp3';
import musicOn from '../../img/musicOn.png';
import musicOff from '../../img/musicOff.png';

const MusicAndSounds = () => {
  const [soundActive, setSoundActive] = useState(true);

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
    </div>
  );
};

export default MusicAndSounds;
