/**
 *
 * Albums
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledAlbums,
  AlbumContentWrapper,
  WrapperAlbumImage,
} from './styledComponents/styledAlbums';
import AlbumCard from '../AlbumCard';

function Albums({ albums = [] }) {
  return (
    <StyledAlbums>
      {albums.map(album => (
        <AlbumCard album={album} key={album.id.toString()} />
      ))}
    </StyledAlbums>
  );
}

Albums.propTypes = {
  albums: PropTypes.array,
};

export default Albums;
