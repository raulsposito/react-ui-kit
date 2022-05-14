import React from 'react'
import PropTypes from 'prop-types'

import { StyledTextAreaContainer } from './style'

const DEFAULT_ROWS = 10

const InputAreaContainer = ({
  disabled,
  error,
  name,
  onChange,
  onFocus,
  onBlur,
  placeholder,
  required,
  value,
  maxLength,
  rows,
  resize
}) => (
  <StyledTextAreaContainer
    value={value}
    name={name}
    placeholder={placeholder}
    required={required}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    disabled={disabled}
    error={error}
    maxLength={maxLength}
    rows={rows || DEFAULT_ROWS}
    resize={resize}
  />
)

InputAreaContainer.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.any,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
  resize: PropTypes.bool
}

export default InputAreaContainer
