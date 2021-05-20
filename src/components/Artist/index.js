/**
 *
 * Artist
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ArtistCard from '../ArtistCard';
import StyledArtist from './styledComponents/styledArtist';

function Artist({ artists = [], selectedArtist }) {
  return (
    <StyledArtist>
      {artists &&
        artists.length > 0 &&
        artists.map(artist => (
          <ArtistCard
            artist={artist}
            key={artist.id.toString()}
            selectedArtist={selectedArtist}
          />
        ))}
    </StyledArtist>
  );
}

Artist.propTypes = {
  artist: PropTypes.array,
  selectedArtist: PropTypes.func,
};

export default Artist;
