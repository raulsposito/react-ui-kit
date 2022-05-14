import styled, { css } from 'styled-components'

import { colors, spacing } from '@global/theme'

const getSize = size => {
  const s = (() => {
    switch (size) {
      case 'xsmall': return spacing.oneAndAHalf
      case 'small': return spacing.two
      case 'large': return spacing.three
      case 'xlarge': return spacing.threeAndAHalf
      case 'xxlarge': return spacing.four
      default: return spacing.twoAndAHalf
    }
  })()

  return css`
    width: ${s};
    height: ${s};
    font-size: ${s};
  `
}

const getBorderSize = size => {
  switch (size) {
    case 'xsmall': return '2px'
    case 'small': return '2px'
    case 'large': return '3px'
    case 'xlarge': return '4px'
    case 'xxlarge': return '4px'
    default: return '3px'
  }
}

const Circle = css`
  border-radius: 50%;
  box-shadow: ${({ size, color }) => {
    const borderSize = getBorderSize(size)
    const sColor = colors[color]?.regular ?? colors.contrast.regular
    return `0 0 0 ${borderSize} ${sColor}`
  }};
`

export const StyledIcon = styled.span`
  ${({ size }) => getSize(size)}
  color: ${({ disabled, color }) => {
    if (disabled) return colors[color]?.disabled ?? colors.contrast.disabled
    return colors[color]?.regular ?? colors.contrast.regular
  }};
  ${({ circle }) => circle && Circle};
`
