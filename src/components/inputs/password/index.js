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

const Password = ({ name, color, label, helperText, onChange, placeholder, value, disabled, error, required }) => {
  const [focused, setFocused] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [fieldError, setFieldError] = useState(error)

  const handleError = () => {
    const type = INPUT_TYPES.PASSWORD
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

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility)
  }

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
        type={passwordVisibility ? 'text' : 'password'}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        disabled={disabled}
        error={fieldError}
        focused={focused}
        required={required}
        color={color}
        endAdornment={(
          <InputAdornment
            onClick={!disabled ? handlePasswordVisibility : null}
            position='end'
            disabled={disabled}
            icon={!passwordVisibility ? 'visibility' : 'visibility_off'}
            color={fieldError ? 'error' : 'system'}
          />
        )}
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

Password.propTypes = {
  name: PropTypes.string,
  color: MyPropTyes.color,
  label: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool
}

export default Password
