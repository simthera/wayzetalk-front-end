import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { calculateRem } from '../../../../utils/helpers';
// import breakpoint from 'styled-components-breakpoint';

// NOTE: change yourElementType to your preferred type: e.g button
const StyledSelectField = styled(Select)`
  margin-bottom: ${calculateRem(20)};
`;

const StyledMenuItem = styled(MenuItem)``;

export { StyledSelectField, StyledMenuItem };
