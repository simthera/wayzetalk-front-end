import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { calculateRem } from '../utils/helpers';

const StyledAppWrapper = styled.div`
  padding-top: ${calculateRem(70)};
  background: #303030;
  background-size: cover;
  min-height: 100vh;
`;

const StyledAppWrapperInner = styled.div`
  margin: auto;

  ${breakpoint('tablet')`
    max-width: ${calculateRem(1200)};
  `}
`;

const Styled404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${calculateRem(20)};
  height: 300px;
  background: white;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`;

export { StyledAppWrapper, StyledAppWrapperInner, Styled404 };
