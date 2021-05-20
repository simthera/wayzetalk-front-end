/**
 *
 * InputField
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FormFieldError from '../FormFieldError';
import {
  StyledInputField,
  StyledLabel,
  StyledDropdownListWrapper,
  StyledDropdownListWrapperInner,
} from './styledComponents/styledInputField';

function InputField(props) {
  const {
    input,
    type,
    placeholder,
    value,
    disabled = false,
    multiline = false,
    autoComplete = 'on',
    rows = 1,
    rowsMax = 1,
    meta,
    onFocus,
    onBlur,
    isDropDownVisible = false,
    options,
    name,
    onChange,
    handleSettingOfFields,
    hasDropDownOptions = false,
    fieldType = 'input',
  } = props;

  const handleFocus = () => {
    if (onFocus && typeof onFocus === 'function') {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (onBlur && typeof onBlur === 'function') {
      onBlur();
    }
  };
  const handleChange = event => {
    if (onChange && typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };

  return (
    <>
      <StyledLabel
        htmlFor={input && input.name}
        hasError={meta && meta.touched && meta.error}
      >
        <StyledInputField
          {...input}
          as={fieldType}
          type={type}
          placeholder={placeholder}
          label={placeholder}
          rows={rows}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          rowsMax={rowsMax}
          multiline={multiline}
          autoComplete={autoComplete}
          disabled={disabled}
          hasError={meta && meta.touched && meta.error}
        />

        {isDropDownVisible && hasDropDownOptions && options.length > 0 && (
          <StyledDropdownListWrapper>
            <StyledDropdownListWrapperInner>
              {options.map((option, idx) => (
                <a
                  href="/"
                  key={idx}
                  onClick={e => {
                    e.preventDefault();
                    handleSettingOfFields(option);
                  }}
                >
                  {option.formattedAddress}
                </a>
              ))}
            </StyledDropdownListWrapperInner>
          </StyledDropdownListWrapper>
        )}
      </StyledLabel>
      {meta && meta.touched && meta.error && (
        <FormFieldError error={meta.error} />
      )}
    </>
  );
}

InputField.propTypes = {
  input: PropTypes.object,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  disabled: PropTypes.bool,
  meta: PropTypes.object,
  rows: PropTypes.string,
  rowsMax: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  handleSettingOfFields: PropTypes.func,
};

export default InputField;
