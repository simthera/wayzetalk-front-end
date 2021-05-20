import styled from 'styled-components';
import { responsiveTheme } from '../../../../utils/responsiveTheme';
import { calculateRem } from '../../../../utils/helpers';
// NOTE: change yourElementType to your preferred type: e.g button
const StyledFormFieldError = styled.span`
  color: ${responsiveTheme.colors.errorRed};
  position: absolute;
  bottom: ${calculateRem(5)};
  left: 0;
  font-size: ${calculateRem(12)};
`;

export default StyledFormFieldError;
