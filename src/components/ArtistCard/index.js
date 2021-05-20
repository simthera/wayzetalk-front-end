/**
 *
 * ArtistCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from '../../utils/helpers';

import {
  StyledArtistCard,
  WrapperArtistImage,
  ArtistContentWrapper,
} from './styledComponents/styledArtistCard';

function ArtistCard({
  artist: { name, picture_medium, nb_fan, id, releaseDate },
  selectedArtist,
}) {
  const handleArtistSelect = () => {
    if (selectedArtist && typeof selectedArtist === 'function') {
      selectedArtist({
        id,
        picture_medium,
        nb_fan,
        name,
      });
    }
  };
  return (
    <StyledArtistCard className="artist-card" onClick={handleArtistSelect}>
      <WrapperArtistImage className="artist-image">
        <img src={picture_medium} />
      </WrapperArtistImage>
      <ArtistContentWrapper>
        <h1>{name}</h1>
        <p>Fans: {formatNumber(nb_fan)}</p>
      </ArtistContentWrapper>
    </StyledArtistCard>
  );
}

ArtistCard.propTypes = {
  artist: PropTypes.object,
  selectedArtist: PropTypes.func,
};

export default ArtistCard;
