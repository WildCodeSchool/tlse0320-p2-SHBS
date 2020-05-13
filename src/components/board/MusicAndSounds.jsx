/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import music from '../../audio/music1.mp3';
import selectAttack from '../../audio/whip.mp3';
import attackTarget from '../../audio/punch.mp3';
import youLose from '../../audio/defeat.mp3';
import IAattack from '../../audio/whipPunch.mp3';
import youWin from '../../audio/victory.mp3';
import draw from '../../audio/draw.mp3';
import soundOn from '../../img/soundOn.png';
import soundOff from '../../img/soundOff.png';
import musicOn from '../../img/musicOn.png';
import musicOff from '../../img/musicOff.png';

const MusicAndSounds = props => {
  const {
    selectAttackRef,
    attackTargetRef,
    youLoseRef,
    opponentAttackRef,
    drawRef,
    youWinRef,
    stopMusic
  } = props;
  const [musicActive, setMusicActive] = useState(window.localStorage.getItem('musicActive'));
  const [soundActive, setSoundActive] = useState(window.localStorage.getItem('soundActive'));

  useEffect(() => {
    window.localStorage.setItem('musicActive', musicActive);
    window.localStorage.setItem('soundActive', soundActive);
  }, [musicActive, soundActive]);

  const handleMusic = () => {
    switch (musicActive) {
      case 'false':
        setMusicActive('true');
        break;
      case 'true':
        setMusicActive('false');
        break;
      default:
        setMusicActive('false');
        break;
    }
  };

  const handleSound = () => {
    switch (soundActive) {
      case 'false':
        setSoundActive('true');
        break;
      case 'true':
        setSoundActive('false');
        break;
      default:
        setSoundActive('false');
        break;
    }
  };

  return (
    <div className="flex-column">
      {(musicActive === 'true' || !musicActive) && !stopMusic ? (
        <>
          <img
            className="active-music"
            onClick={() => handleMusic()}
            src={musicOn}
            alt="music On"
          />
          <audio autoPlay loop src={music} />
        </>
      ) : (
        <>
          <img
            className="active-music"
            onClick={() => handleMusic()}
            src={musicOff}
            alt="music Off"
          />
          <audio autoPlay muted loop src={music} />
        </>
      )}
      {soundActive === 'true' || !soundActive ? (
        <>
          <img
            className="active-sound"
            onClick={() => handleSound()}
            src={soundOn}
            alt="sound On"
          />
          <audio ref={selectAttackRef} src={selectAttack} />
          <audio ref={attackTargetRef} src={attackTarget} />
          <audio ref={youLoseRef} src={youLose} />
          <audio ref={opponentAttackRef} src={IAattack} />
          <audio ref={youWinRef} src={youWin} />
          <audio ref={drawRef} src={draw} />
        </>
      ) : (
        <>
          <img
            className="active-sound"
            onClick={() => handleSound()}
            src={soundOff}
            alt="sound Off"
          />
          <audio muted ref={selectAttackRef} src={selectAttack} />
          <audio muted ref={attackTargetRef} src={attackTarget} />
          <audio muted ref={youLoseRef} src={youLose} />
          <audio muted ref={opponentAttackRef} src={IAattack} />
          <audio muted ref={youWinRef} src={youWin} />
          <audio muted ref={drawRef} src={draw} />
        </>
      )}
    </div>
  );
};

MusicAndSounds.propTypes = {
  stopMusic: PropTypes.bool.isRequired,
  selectAttackRef: PropTypes.instanceOf(Object).isRequired,
  attackTargetRef: PropTypes.instanceOf(Object).isRequired,
  youLoseRef: PropTypes.instanceOf(Object).isRequired,
  opponentAttackRef: PropTypes.instanceOf(Object).isRequired,
  drawRef: PropTypes.instanceOf(Object).isRequired,
  youWinRef: PropTypes.instanceOf(Object).isRequired
};

export default MusicAndSounds;
