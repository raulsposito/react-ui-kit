import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { StyledInputWrapper, StyledInputWrapperHelper } from '../style'

import { handleTextColorState } from '../utils/handlers'

import InputLabel from '../components/inputLabel'
import InputHelperText from '../components/inputHelperText'
import InputCharacterCounter from '../components/inputCharacterCounter'
import InputAreaContainer from '../components/inputAreaContainer'
import { validateTextArea } from '../utils/validation'

const TextArea = props => {
  const {
    name,
    rows,
    color,
    label,
    value,
    error,
    resize,
    onChange,
    disabled,
    required,
    maxLength,
    helperText,
    placeholder
  } = props

  const [focused, setFocused] = useState(false)
  const [fieldError, setFieldError] = useState(error)
  const [characterCount, setCharacterCount] = useState(value.length)

  useEffect(() => {
    setCharacterCount(value.length)
  }, [value])

  const handleError = () => {
    const inputError = validateTextArea({ value, maxLength, required })

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
        required={required}
      />

      <InputAreaContainer
        value={value}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        error={fieldError}
        maxLength={maxLength}
        rows={rows}
        resize={resize}
      />
      <StyledInputWrapperHelper>
        <InputCharacterCounter
          currentCharacterCount={characterCount}
          maxLength={maxLength}
          disabled={disabled}
        />
        <InputHelperText
          text={fieldError || helperText}
          color={handleTextColorState(fieldError, focused, color)}
          disabled={disabled}
        />
      </StyledInputWrapperHelper>
    </StyledInputWrapper>
  )
}

TextArea.propTypes = {
  name: PropTypes.string,
  color: MyPropTyes.color,
  label: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
  rows: PropTypes.number,
  resize: PropTypes.bool
}

export default TextArea
