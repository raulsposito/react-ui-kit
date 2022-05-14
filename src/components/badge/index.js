import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { Text } from '@components/texts'
import Icon from '@components/icon'

import { MyBadge } from './style'

const Badge = ({ text, icon, color, size, type, reverse }) => {
  const getContent = () => {
    const t = text ? (
      <Text
        key='text'
        size='small'
        weight='semibold'
        text={text}
        color='background'
      />
    ) : null
    const i = icon ? (
      <Icon
        key='icon'
        size='medium'
        name={icon}
        color='background'
      />
    ) : null

    return reverse ? [i, t] : [t, i]
  }

  return (
    <MyBadge
      size={size}
      type={type}
      color={color}
      reverse={reverse}
    >
      {getContent()}
    </MyBadge>
  )
}

Badge.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  color: MyPropTyes.allColors,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  type: PropTypes.oneOf(['solid', 'line']),
  reverse: PropTypes.bool
}

export default Badge
