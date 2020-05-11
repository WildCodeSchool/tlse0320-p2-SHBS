import React from 'react';
import music from '../../audio/music.mp3';

const MusicAndSounds = () => {
  return (
    <div>
      <audio autoPlay controls src={music}></audio>
    </div>
  );
};

export default MusicAndSounds;
