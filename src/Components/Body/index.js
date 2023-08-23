import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import SongRow from '../SongRow';
import Header from '../Header';

import './body.styles.css';

function Body({ user, playlistInfo, trackList, onClickTrack }) {
  return (
    <div className="body">
      <Header user={user} />
      <div className="body_info">
        <img src={playlistInfo?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>{playlistInfo?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {trackList.map(({ track }) => (
          <SongRow key={track.id} track={track} onClick={onClickTrack} />
        ))}
      </div>
    </div>
  );
}

export default Body;
