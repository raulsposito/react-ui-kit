import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { BASIC_INPUT_TYPES } from '@components/inputs/utils/constants'
import { validateField } from '../utils/validation'
import { StyledInputWrapper } from '../style'

import { handleTextColorState } from '../utils/handlers'

import InputLabel from '../components/inputLabel'
import InputContainer from '../components/inputContainer'
import InputHelperText from '../components/inputHelperText'
import InputAdornment from '../components/inputAdornment'

const TextField = ({ name, color, label, helperText, onChange, placeholder, type, value, endAdornment, startAdornment,
  disabled, error, required }) => {
  const [focused, setFocused] = useState(false)
  const [fieldError, setFieldError] = useState(error)
  const errorAdornment = <InputAdornment position='end' icon='error' color='error' />

  const handleError = () => {
    const inputError = validateField({ type, value, required })

    if (!inputError.isValid) {
      setFieldError(inputError.message)
    } else {
      setFieldError(error)
    }
  }

  const handleFocus = () => {
    setFocused(true)
  }

  const handleBlur = () => {
    setFocused(false)
    handleError()
  }

  const handleChange = e => onChange(name, e.target.value)

  return (
    <StyledInputWrapper>
      <InputLabel
        text={label}
        color={handleTextColorState(fieldError, focused, color)}
        name={name}
        disabled={disabled}
        error={fieldError}
        focused={focused}
        required={required}
      />
      <InputContainer
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        startAdornment={startAdornment}
        endAdornment={fieldError ? errorAdornment : endAdornment}
        disabled={disabled}
        error={fieldError}
        focused={focused}
        required={required}
        color={color}
      />
      <InputHelperText
        text={fieldError || helperText}
        color={handleTextColorState(fieldError, focused, color)}
        disabled={disabled}
        error={fieldError}
        focused={focused}
      />
    </StyledInputWrapper>
  )
}

TextField.propTypes = {
  name: PropTypes.string,
  color: MyPropTyes.color,
  label: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(Object.values(BASIC_INPUT_TYPES)),
  value: PropTypes.any,
  endAdornment: PropTypes.node,
  startAdornment: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool
}

export default TextField
