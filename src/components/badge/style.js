import styled, { css } from 'styled-components'

import { colors, spacing } from '@global/theme'

const getColor = color => {
  if (colors[color]?.regular) return colors[color].regular
  if (colors.events[color]) return colors.events[color]
  return colors.primary.regular
}

const Small = css`
  padding: ${spacing.half};
`

const Medium = css`
  padding: ${spacing.one} ${spacing.oneAndAHalf}
`

const Large = css`
  padding: ${spacing.oneAndAQuarter} ${spacing.two}
`

const Solid = css`
  background-color: ${({ color }) => getColor(color)};
  > * {
    color: ${({ color }) => (color !== 'white' ? colors.background.regular : colors.contrast.regular)}
  }
`

const Line = css`
  border: 2px solid ${({ color }) => getColor(color)};
  > * {
    color: ${({ color }) => getColor(color)};
  }
`

export const MyBadge = styled.div`
  height: max-content;
  width: max-content;
  min-width: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  ${({ type }) => (type === 'line' ? Line : Solid)}

  ${({ size }) => {
    switch (size) {
      case 'small':
        return Small
      case 'large':
        return Large
      default:
        return Medium
    }
  }};

  > :not(:first-child) {
    margin-left: ${spacing.one};
  }
`
