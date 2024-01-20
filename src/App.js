// MusicSharingPage.js
import React, { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import SongList from './components/SongList';

import './styles.css';


const MusicSharingPage = () => {
  const [currentSong, setCurrentSong] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  const toggleDropdown = (playlist) => {
    setOpenDropdown(openDropdown === playlist ? null : playlist);
  };

  const songsFlowers = [
    {
      title: 'Jasmine',
      artist: 'Paweł Mendzik',
      src: '/songs/songsFlowers/Jasmine.mp3',
      cover: '/images/yozo.png',
    },
    {
      title: 'Peonies',
      artist: 'Paweł Mendzik',
      src: '/songs/songsFlowers/Peonies.mp3',
      cover: '/images/yozo.png',
    },
    {
      title: 'Queen of the Night',
      artist: 'Paweł Mendzik',
      src: '/songs/songsFlowers/Queen_of_the_Night.mp3',
      cover: '/images/yozo.png',
    },
  ];

  const songsWorld = [
    {
      title: 'Golden Sirocco',
      artist: 'Paweł Mendzik',
      src: '/songs/songsWorld/GoldenSirocco.mp3',
      cover: '/images/world.png',
    },
    {
      title: 'Whispers of Sands',
      artist: 'Paweł Mendzik',
      src: '/songs/songsWorld/WhispersOfSands.mp3',
      cover: '/images/world.png',
    },
  ];

  const songsHumanFall = [
    {
      title: 'Ode to Insomnia',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/Insomnia.mp3',
      cover: '/images/fall.png',
    },
    {
      title: 'Rubberhose',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/rubberhose.mp3',
      cover: '/images/rubberhose.png',
    },
    {
      title: 'Better of Us',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/BetterOfUs.mp3',
      cover: '/images/lofi.png',
    },
    {
      title: 'Stars Alignment',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/StarsAlignment.mp3',
      cover: '/images/lofi.png',
    },
    {
      title: 'Tides of Joy',
      artist: 'Paweł Mendzik',
      src: '/songs/songsHumanFall/TidesOfJoy.mp3',
      cover: '/images/lofi.png',
    },
  ];

  const songsMaestro = [
    {
      title: 'Digital Dance Maestro',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/DigitalDanceMaestro.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Stepping Sway Syndrome',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/SteppingSwaySyndrome.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Synthetic Swing Sequence',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/SyntheticSwingSequence.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Synthetic Sorrow Sounds',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/SyntheticSorrowSounds.mp3',
      cover: '/images/maestro.png',
    },
    {
      title: 'Funky Futuristic Frenzy',
      artist: 'Paweł Mendzik',
      src: '/songs/songsMaestro/FunkyFuturisticFrenzy.mp3',
      cover: '/images/maestro.png',
    },
  ];

  const songsOrchestral = [
    {
      title: 'Journey',
      artist: 'Paweł Mendzik',
      src: '/songs/songsOrchestral/Journey.mp3',
      cover: '/images/orchestral.png',
    },
    {
      title: 'Magical Forest',
      artist: 'Paweł Mendzik',
      src: '/songs/songsOrchestral/MagicalForest.mp3',
      cover: '/images/orchestral.png',
    },
  ];

  return (
    <div className="container mt-5">
      <div className="jumbotron bg-dark text-white">
        <div className="text-center">
          <h1 className="display-4" style={{ fontFamily: 'Press Start 2P' }}>Pablossky's showcase</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <MusicPlayer
            id="audio-player"
            src={currentSong ? currentSong.src : null}
            title={currentSong ? currentSong.title : ''}
            cover={currentSong ? currentSong.cover : null}
          />
        </div>

        <div className="col-lg-6">
          <h3 className="display-4">Albums:</h3>
          <div className="playlist-dropdown">
            <SongList title="Flowers Lo-Fi" songs={songsFlowers} onPlay={(song) => handlePlay(song, songsFlowers)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="World Sounds" songs={songsWorld} onPlay={(song) => handlePlay(song, songsWorld)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="Human Fall" songs={songsHumanFall} onPlay={(song) => handlePlay(song, songsHumanFall)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="Maestro" songs={songsMaestro} onPlay={(song) => handlePlay(song, songsMaestro)} />
          </div>

          <div className="playlist-dropdown">
            <SongList title="Orchestral" songs={songsOrchestral} onPlay={(song) => handlePlay(song, songsOrchestral)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicSharingPage;