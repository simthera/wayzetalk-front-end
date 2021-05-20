/**
 *
 * TopTrack
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledTopTrack from './styledComponents/styledTopTrack';

function TopTrack({ track: { title, duration }, rank }) {
  const convertDurationToMinutes = timeInSeconds =>
    `${Math.floor(timeInSeconds / 60)}:${Math.floor(timeInSeconds % 60)}`;
  return (
    <StyledTopTrack>
      <p>
        <span className="index-number">{rank}</span>
        {title}
        <span className="track-duration">
          {convertDurationToMinutes(duration)}
        </span>
      </p>
    </StyledTopTrack>
  );
}

TopTrack.propTypes = {
  track: PropTypes.object,
};

export default TopTrack;
