import React, { useState } from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { INPUT_TYPES } from '../utils/constants'
import { validateField } from '../utils/validation'
import { StyledInputWrapper } from '../style'

import { handleTextColorState } from '../utils/handlers'

import InputLabel from '../components/inputLabel'
import InputContainer from '../components/inputContainer'
import InputHelperText from '../components/inputHelperText'
import InputAdornment from '../components/inputAdornment'

const NumberField = ({
  name,
  color,
  label,
  helperText,
  onChange,
  placeholder,
  value,
  disabled,
  error,
  required
}) => {
  const [focused, setFocused] = useState(false)
  const [fieldError, setFieldError] = useState(error)

  const handleError = () => {
    const type = INPUT_TYPES.NUMBER
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

  const handleChange = inputValue => onChange(name, Number(inputValue))
  const incrementValue = () => handleChange(Number(value) + 1)
  const decreaseValue = () => handleChange(Number(value) - 1)

  return (
    <StyledInputWrapper>
      <InputLabel
        text={label}
        color={handleTextColorState(fieldError, focused, color)}
        name={name}
        disabled={disabled}
        error={fieldError}
        required={required}
      />
      <InputContainer
        type='number'
        value={value}
        placeholder={placeholder}
        onChange={e => handleChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        disabled={disabled}
        error={fieldError}
        focused={focused}
        required={required}
        color={color}
        startAdornment={(
          <InputAdornment
            onClick={!disabled && decreaseValue}
            position='start'
            disabled={disabled}
            icon='expand_more'
            color={fieldError ? 'error' : 'system'}
          />
            )}
        endAdornment={(
          <InputAdornment
            onClick={!disabled && incrementValue}
            position='end'
            disabled={disabled}
            icon='expand_less'
            color={fieldError ? 'error' : 'system'}
          />
          )}
      />
      <InputHelperText
        text={fieldError || helperText}
        color={handleTextColorState(fieldError, focused, color)}
        disabled={disabled}
      />
    </StyledInputWrapper>
  )
}

NumberField.propTypes = {
  name: PropTypes.string,
  color: MyPropTyes.color,
  label: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.number,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool
}

export default NumberField
