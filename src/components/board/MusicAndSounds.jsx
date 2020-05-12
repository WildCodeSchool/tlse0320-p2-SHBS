/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import music from '../../audio/music1.mp3';
import selectAttack from '../../audio/whip.mp3';
import attackTarget from '../../audio/punch.mp3';
import youLose from '../../audio/defeat.mp3';
import IAattack from '../../audio/whipPunch.mp3';
import youWin from '../../audio/victory.mp3';
import draw from '../../audio/draw.mp3';
import musicOn from '../../img/musicOn.png';
import musicOff from '../../img/musicOff.png';

const MusicAndSounds = props => {
  const { selectAttackRef, attackTargetRef, youLoseRef, IAattackRef, drawRef, youWinRef } = props;
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
      <audio ref={attackTargetRef} src={attackTarget} />
      <audio ref={youLoseRef} src={youLose} />
      <audio ref={IAattackRef} src={IAattack} />
      <audio ref={youWinRef} src={youWin} />
      <audio ref={drawRef} src={draw} />
    </div>
  );
};

export default MusicAndSounds;
