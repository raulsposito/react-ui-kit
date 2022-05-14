import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'
import { Text } from '@components/texts'
import Icon from '@components/icon'

import { StyledPaginationItem } from './style'

const PaginationItem = ({ number, icon, color, size, onClick, selected, disabled }) => (
  <StyledPaginationItem
    color={color}
    size={size}
    onClick={onClick}
    selected={selected}
    disabled={disabled}
    justifyContent='center'
    alignItems='center'
  >
    {number && (
      <Text
        text={number}
        size={size}
        weight='semibold'
        disabled={disabled}
        color={disabled ? 'system' : 'contrast'}
      />
    )}
    {icon && (
      <Icon
        size={size}
        name={icon}
        disabled={disabled}
        color={disabled ? 'system' : 'contrast'}
      />
    )}
  </StyledPaginationItem>
)

PaginationItem.propTypes = {
  number: PropTypes.number,
  icon: PropTypes.string,
  color: MyPropTyes.color,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  disabled: PropTypes.bool
}

export default PaginationItem
