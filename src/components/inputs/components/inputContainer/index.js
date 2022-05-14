import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { BASIC_INPUT_TYPES } from '@components/inputs/utils/constants'
import MyPropTyes from '@global/propTypes'
import { handleTypes } from '@components/inputs/utils/handlers'

import { StyledInputBox, StyledInputContainer } from './style'

const InputContainer = props => {
  const {
    disabled,
    error,
    color,
    name,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    required,
    type,
    value,
    endAdornment,
    startAdornment
  } = props

  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus()
  }

  return (
    <StyledInputContainer
      onClick={focusInput}
      disabled={disabled}
      error={error}
      color={color}
    >
      {startAdornment}
      <StyledInputBox
        value={value}
        onChange={onChange}
        ref={inputRef}
        disabled={disabled}
        error={error}
        name={name}
        type={handleTypes(type)}
        placeholder={placeholder}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {endAdornment}
    </StyledInputContainer>
  )
}

InputContainer.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.string,
  color: MyPropTyes.color,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(BASIC_INPUT_TYPES)),
  value: PropTypes.any,
  endAdornment: PropTypes.node,
  startAdornment: PropTypes.node
}

export default InputContainer
