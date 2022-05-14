import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { H1, H2, H3, H4, H5, H6 } from './styles'

const Heading = ({ weight, size, text, type, align, color, children, marginBottom, disabled }) => {
  const Tag = (() => {
    switch (type) {
      case 'h2': return H2
      case 'h3': return H3
      case 'h4': return H4
      case 'h5': return H5
      case 'h6': return H6
      default: return H1
    }
  })()

  return (
    <Tag
      weight={weight}
      color={color}
      align={align}
      size={size}
      disabled={disabled}
      marginBottom={marginBottom}
    >
      {text || children}
    </Tag>
  )
}

Heading.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  color: MyPropTyes.color,
  weight: MyPropTyes.weight,
  size: MyPropTyes.size,
  children: PropTypes.node,
  marginBottom: MyPropTyes.space,
  disabled: PropTypes.bool
}

export default Heading
