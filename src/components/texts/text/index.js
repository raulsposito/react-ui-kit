import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { StyledText } from './styles'

const Text = ({ text, align, weight, color, size, children, marginBottom, disabled }) => (
  <StyledText weight={weight} size={size} color={color} align={align} marginBottom={marginBottom} disabled={disabled}>
    {text || children}
  </StyledText>
)

Text.propTypes = {
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  weight: MyPropTyes.weight,
  color: MyPropTyes.color,
  size: MyPropTyes.size,
  children: PropTypes.node,
  marginBottom: MyPropTyes.space,
  disabled: PropTypes.bool
}

export default Text
