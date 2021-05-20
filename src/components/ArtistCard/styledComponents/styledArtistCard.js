import styled from 'styled-components';
// import { calculateRem } from '../../utils/helpers';
import breakpoint from 'styled-components-breakpoint';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledArtistCard = styled.div`
  background: #424242;
  float: left;
  color: #fff;
  width: 30%;
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
    padding-bottom: 80px;
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
const WrapperArtistImage = styled.div`
  height: 200px;
  width: 100%;
  display: block;
  overflow: hidden;

  img {
    width: 100%;
  }
`;
const ArtistContentWrapper = styled.div`
  display: block;
  padding: 10px;
`;

export { StyledArtistCard, WrapperArtistImage, ArtistContentWrapper };
