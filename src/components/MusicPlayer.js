// MusicPlayer.js
import React, { useEffect, useRef } from 'react';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css'; // Import the custom styling
import AudioPlayer from 'react-h5-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer = ({ src, title, autoplay, cover }) => {
  const audioPlayer = useRef(null);

  useEffect(() => {
    if (autoplay && audioPlayer.current) {
      audioPlayer.current.audio.current.addEventListener('ended', handleSongEnd);
    }

    return () => {
      if (audioPlayer.current) {
        audioPlayer.current.audio.current.removeEventListener('ended', handleSongEnd);
      }
    };
  }, [autoplay]);

  const handleSongEnd = () => {
    // To do autoplay
  };

  return (
    <div className="music-player-container">
      <div className="audio-controls">
        <div className="player-info">
          <h4 style={{ fontFamily: 'Press Start 2P' }}>{title}</h4>
          {cover && <img src={cover} alt={`${title} Cover`} className="album-cover" />}
        </div>
        <AudioPlayer
          ref={audioPlayer}
          src={src}
          autoPlayAfterSrcChange={autoplay}
          customIcons={{
            play: <FontAwesomeIcon icon={faPlay} />,
            pause: <FontAwesomeIcon icon={faPause} />,
            volume: <FontAwesomeIcon icon={faVolumeUp} />,
          }}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;