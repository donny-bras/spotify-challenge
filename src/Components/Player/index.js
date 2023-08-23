import React, { useState } from 'react';

import Sidebar from '../Sidebar';
import Body from '../Body';
import Footer from '../Footer';
import mockData from '../../mocks/data.json';
import { shuffle } from '../../utils/general';

import './player.styles.css';

const discoverWeeklyTracks = mockData.discover_weekly.tracks.items.filter(
  item => !!item.track.id
);

function Player() {
  const [trackList, setTrackList] = useState(discoverWeeklyTracks);
  const [selectedTackIndex, setSelectedTrackIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);

  const selectedTrack = trackList[selectedTackIndex];

  const handleClickShuffle = () => {
    const shuffled = !isShuffled;
    const newTrackList = shuffled ? shuffle(trackList) : discoverWeeklyTracks;

    setTrackList(newTrackList);
    setIsShuffled(shuffled);
  };

  const handleClickTrack = trackId => {
    const trackIndex = trackList.findIndex(item => item.track.id === trackId);

    if (trackIndex !== -1) setSelectedTrackIndex(trackIndex);
  };

  const handleClickNext = () => {
    let nextTrackIndex = selectedTackIndex + 1;
    if (nextTrackIndex > trackList.length - 1) {
      nextTrackIndex = 0;
    }
    setSelectedTrackIndex(nextTrackIndex);
  };

  const handleClickPrevious = () => {
    let prevTrackIndex = selectedTackIndex - 1;
    if (prevTrackIndex < 0) {
      prevTrackIndex = trackList.length - 1;
    }
    setSelectedTrackIndex(prevTrackIndex);
  };

  return (
    <div className="player">
      <div className="player_body">
        {/* Sidebar */}
        <Sidebar playlists={mockData.playlists} />
        {/* Body */}
        <Body
          user={mockData.user}
          playlistInfo={mockData.discover_weekly}
          trackList={trackList}
          onClickTrack={handleClickTrack}
        />
      </div>
      {/* Footer */}
      <Footer
        track={selectedTrack}
        shuffled={isShuffled}
        onClickShuffle={handleClickShuffle}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrevious}
      />
    </div>
  );
}

export default Player;
