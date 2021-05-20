/**
 *
 * AlbumCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from '../../utils/helpers';

import {
  StyledAlbumCard,
  AlbumContentWrapper,
  WrapperAlbumImage,
} from './styledComponents/styledAlbumCard';

function AlbumCard({
  album: { cover_medium: mediumCover, cover, title, fans, release_date },
}) {
  return (
    <StyledAlbumCard>
      <WrapperAlbumImage>
        <img src={cover} />
      </WrapperAlbumImage>
      <AlbumContentWrapper>
        <h1>{title}</h1>
        <p>Fans: {formatNumber(fans)}</p>
        <p>Released: {release_date}</p>
      </AlbumContentWrapper>
    </StyledAlbumCard>
  );
}

AlbumCard.propTypes = {
  album: PropTypes.object,
};

export default AlbumCard;
