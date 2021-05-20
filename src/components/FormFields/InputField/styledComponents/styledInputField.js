import styled from 'styled-components';
import { responsiveTheme } from '../../../../utils/responsiveTheme';
import { calculateRem } from '../../../../utils/helpers';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledInputField = styled.input`
  border-color: ${(props) =>
    props.hasError ? responsiveTheme.colors.errorRed : 'initial'};
  transition: 0.3s border-color ease-in-out;
`;

const StyledLabel = styled.label`
  &:focus-within {
    &::before {
      background-color: ${(props) =>
        props.hasError
          ? responsiveTheme.colors.errorRed
          : responsiveTheme.colors.black};
    }
  }
`;

const StyledDropdownListWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 999;
  background: white;
  border: 1px solid gray;
  border-bottom: none;
  overflow-y: auto;
  max-height: ${calculateRem(300)};
  a {
    display: block;
    padding: ${calculateRem(10)};
    border-bottom: 1px solid gray;
    text-decoration: none;
    color: inherit;

    &:hover {
      background: lightgray;
    }
  }
`;
const StyledDropdownListWrapperInner = styled.div``;

export {
  StyledInputField,
  StyledLabel,
  StyledDropdownListWrapper,
  StyledDropdownListWrapperInner,
};
