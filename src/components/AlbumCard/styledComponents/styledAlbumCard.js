import styled from 'styled-components';
// import { calculateRem } from '../../utils/helpers';
import breakpoint from 'styled-components-breakpoint';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledAlbumCard = styled.div`
  background: #424242;
  float: left;
  color: #fff;
  width: 21%;
  margin-right: 37px;
  margin-bottom: 68px;

  :last-child {
    margin-right: 0;
  }
  h1 {
    font-size: 23px;
    font-weight: normal;
    padding: 10px 0 20px;
  }
  p {
    padding-bottom: 10px;
    font-size: 14px;
  }
  ${breakpoint('small')`
   width: 90%;
   margin-left: 24px;
  `}
  ${breakpoint('mobile')`
   width: 90%;
   margin-left: 24px;
  `}
`;
const WrapperAlbumImage = styled.div`
  min-height: 120px;
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
  min-height: 180px;
`;

export { StyledAlbumCard, WrapperAlbumImage, AlbumContentWrapper };
