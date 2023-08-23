import React from 'react';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

import './footer.styles.css';

function Footer({
  track,
  shuffled,
  onClickShuffle,
  onClickNext,
  onClickPrevious,
}) {
  return (
    <div className="footer">
      <div className="footer_body">
        <div className="footer_left">
          <img
            className="footer_albumLogo"
            src={track.track.album.images[0]?.url}
            alt="Album Cover"
          />
          <div className="footer_songInfo">
            <h1>{track.track.name}</h1>
            <p>{track.track.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        </div>
        <div className="footer_center">
          <ShuffleIcon
            className={`footer_icon ${shuffled ? 'footer_green' : ''}`}
            onClick={onClickShuffle}
          />
          <SkipPreviousIcon className="footer_icon" onClick={onClickPrevious} />
          <PlayCircleOutlineIcon fontSize="large" className="footer_icon" />
          <SkipNextIcon className="footer_icon" onClick={onClickNext} />
          <RepeatIcon className="footer_green" />
        </div>
        <div className="footer_right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Footer;
