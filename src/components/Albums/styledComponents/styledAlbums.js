import styled from 'styled-components';
// import { calculateRem } from '../../utils/helpers';
// import breakpoint from 'styled-components-breakpoint';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledAlbums = styled.div`
  width: 100%;
  display: block;
`;
const WrapperAlbumImage = styled.div`
  height: 200px;
  width: 100%;
  display: block;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
const AlbumContentWrapper = styled.div`
  display: block;
  padding: 10px;
`;

export { StyledAlbums, WrapperAlbumImage, AlbumContentWrapper };
