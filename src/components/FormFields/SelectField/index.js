/**
 *
 * SelectField
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import FormFieldError from '../FormFieldError';
import {
  StyledSelectField,
  StyledMenuItem,
} from './styledComponents/styledSelectField';

const SelectField = props => {
  const { options = [], input, meta } = props;

  return (
    <>
      <StyledSelectField {...input} fullWidth variant="outlined">
        {options.map(option => (
          <StyledMenuItem key={option.id} value={option.title}>
            {option.title}
          </StyledMenuItem>
        ))}
      </StyledSelectField>
      {meta && meta.touched && meta.error && (
        <FormFieldError error={meta.error} />
      )}
    </>
  );
};

SelectField.propTypes = {
  options: PropTypes.array,
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default memo(SelectField);
