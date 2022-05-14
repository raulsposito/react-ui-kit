import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'
import { Text } from '@components/texts'
import Icon from '@components/icon'

import { StyledInputAdornment } from './style'

const InputAdornment = ({ text, icon, color, disabled, position, onClick }) => (
  <StyledInputAdornment
    position={position}
    onClick={onClick}
  >
    { text && <Text text={text} color={color} disabled={disabled} /> }
    { icon && <Icon name={icon} color={color} disabled={disabled} size='large' /> }
  </StyledInputAdornment>
)

InputAdornment.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  color: MyPropTyes.color,
  disabled: PropTypes.bool,
  position: PropTypes.oneOf(['start', 'end']),
  onClick: PropTypes.func
}

export default InputAdornment
