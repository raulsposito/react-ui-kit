import styled, { css } from 'styled-components'
import { colors, spacing } from '@global/theme'
import { row } from '@global/styles'

const Small = css`
  height: ${spacing.threeAndAHalf};
  width: ${spacing.threeAndAHalf};
`

const Medium = css`
  height: ${spacing.fourAndAHalf};
  width: ${spacing.fourAndAHalf};
`

const Large = css`
  height: ${spacing.five};
  width: ${spacing.five};
`

export const StyledPaginationItem = styled.button`
  ${row}

  border-radius: 5px;

  cursor: pointer;
  user-select: none;
  border: none;

  background-color: ${({ selected, color }) => (
    selected ? (colors[color]?.selected || colors.primary.selected) : colors.background.regular
  )};

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

  ${({ onClick }) => (!onClick ? 'pointer-events: none' : '')};

  &:active {
    background-color: ${({ color }) => (colors[color]?.focus ?? colors.primary.focus)};
  }

  &:hover:not(:active) {
    background-color: ${({ color }) => (colors[color]?.hover ?? colors.primary.hover)};
  }

  &:disabled:not(:active) {
    background-color: ${({ selected, color }) => (
    selected ? (colors[color]?.disabled || colors.primary.disabled) : colors.background.regular
  )};
   cursor: default;
   pointer-events: none;
  }

  p {
    color: ${({ selected }) => selected && colors.background.regular};
  }
`
