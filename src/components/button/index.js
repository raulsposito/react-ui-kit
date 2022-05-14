import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import { Text } from '@components/texts'
import Icon from '@components/icon'

import { StyledButton } from './style'

const Button = ({ text, icon, size, color, type, block, reverse, fixWidth, disabled, onClick }) => (
  <StyledButton
    size={size}
    color={color}
    type={type}
    block={block}
    reverse={reverse}
    fixWidth={fixWidth}
    disabled={disabled}
    onClick={onClick}
  >
    {text && <Text weight='semibold' size={size}>{text}</Text>}
    {icon && <Icon size={size} name={icon} />}
  </StyledButton>
)

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  color: MyPropTyes.color,
  type: PropTypes.oneOf(['solid', 'line', 'ghost']),
  block: PropTypes.bool,
  reverse: PropTypes.bool,
  fixWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default Button

export const SolidButton = props => <Button {...props} type='solid' />
export const LineButton = props => <Button {...props} type='line' />
export const GhostButton = props => <Button {...props} type='ghost' />
