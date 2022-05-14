import styled, { css } from 'styled-components'

import { FONT_WEIGHT, FONT_SIZE, openSans } from '@global/fonts'
import { colors, spacing } from '@global/theme'

const StyledH = css`
  ${openSans};
  margin: 0;

  color: ${({ disabled, color }) => {
    if (disabled) return colors[color]?.disabled ?? colors.contrast.disabled
    return colors[color]?.regular ?? colors.contrast.regular
  }};

  margin-bottom: ${({ marginBottom }) => spacing[marginBottom] ?? 0};

  text-align: ${({ align }) => {
    switch (align) {
      case 'center': return 'center'
      case 'right': return 'right'
      default: return 'left'
    }
  }};

  ${({ weight }) => {
    switch (weight) {
      case 'xlight': return FONT_WEIGHT.XLIGHT
      case 'light': return FONT_WEIGHT.LIGHT
      case 'semibold': return FONT_WEIGHT.SEMIBOLD
      case 'bold': return FONT_WEIGHT.BOLD
      case 'xbold': return FONT_WEIGHT.XBOLD
      default: return FONT_WEIGHT.REGULAR
    }
  }};

  ${({ size }) => {
    switch (size) {
      case 'xsmall': return FONT_SIZE.XLARGE
      case 'small': return FONT_SIZE.XXLARGE
      case 'large': return FONT_SIZE.HLARGE
      case 'xlarge': return FONT_SIZE.HXLARGE
      default: return FONT_SIZE.HMEDIUM
    }
  }}
`

export const H1 = styled.h1`
${StyledH};
`

export const H2 = styled.h2`
${StyledH};
`

export const H3 = styled.h3`
${StyledH};
`

export const H4 = styled.h4`
${StyledH};
`

export const H5 = styled.h5`
${StyledH};
`

export const H6 = styled.h6`
${StyledH};
`
