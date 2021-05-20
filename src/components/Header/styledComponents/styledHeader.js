import styled from 'styled-components';
// import { calculateRem } from '../../utils/helpers';
// import breakpoint from 'styled-components-breakpoint';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledHeader = styled.div`
  background-color: #4153af;
  width: 100%;
  min-height: 60px;
  padding: 11px 0;

  input {
    border: none;
    padding: 10px 31px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    color: #fff;
  }
`;
const SearchBoxWrapper = styled.div`
  position: relative;
  color: #ffffff;
  margin-left: 13px;

  .search-icon {
    position: absolute;
    top: 6px;
    left: 5px;
  }
`;
const NavWrapper = styled.div`
  width: 250px;
  max-width: 100%;
  display: flex;
  padding: 11px 20px;
  color: white;
`;

export { StyledHeader, NavWrapper, SearchBoxWrapper };
