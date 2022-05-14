import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'
import { Text } from '@components/texts'

import { StyledInputHelperText } from './style'

const InputHelperText = ({ text, color, disabled }) => (
  <StyledInputHelperText>
    <Text
      text={text}
      weight='semibold'
      size='small'
      color={color}
      disabled={disabled}
    />
  </StyledInputHelperText>
)

InputHelperText.propTypes = {
  text: PropTypes.string,
  color: MyPropTyes.color,
  disabled: PropTypes.bool
}

export default InputHelperText
