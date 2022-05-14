import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'
import { Text } from '@components/texts'

import { StyledInputLabel } from './style'

const InputLabel = ({ text, color, disabled, name, required }) => (
  <StyledInputLabel htmlFor={name}>
    <Text
      text={`${text} ${required ? '*' : ''}`}
      weight='semibold'
      size='small'
      color={color}
      disabled={disabled}
    />
  </StyledInputLabel>
)

InputLabel.propTypes = {
  text: PropTypes.string.isRequired,
  color: MyPropTyes.color,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool
}

export default InputLabel
