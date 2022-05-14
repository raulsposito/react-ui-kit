import React from 'react'
import PropTypes from 'prop-types'

import { Text } from '@components/texts'

import { StyledInputCharacterCounter } from './style'

const InputCharacterCounter = ({ currentCharacterCount, maxLength, disabled }) => (
  <StyledInputCharacterCounter>
    <Text
      text={`Cantidad de caracteres: ${currentCharacterCount} / ${maxLength}`}
      weight='semibold'
      size='small'
      disabled={disabled}
      color={currentCharacterCount === maxLength ? 'error' : 'system'}
    />
  </StyledInputCharacterCounter>
)

InputCharacterCounter.propTypes = {
  currentCharacterCount: PropTypes.number,
  maxLength: PropTypes.number,
  disabled: PropTypes.bool
}

export default InputCharacterCounter
