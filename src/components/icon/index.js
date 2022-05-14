import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { StyledIcon } from './styles'

const Icon = ({ name, circle, size, color, disabled }) => (
  <StyledIcon
    className='material-icons'
    circle={circle}
    size={size}
    color={color}
    disabled={disabled}
  >
    {name}
  </StyledIcon>
)

Icon.propTypes = {
  name: PropTypes.string,
  circle: PropTypes.bool,
  size: MyPropTyes.size,
  color: MyPropTyes.color,
  disabled: PropTypes.bool
}

export default Icon
