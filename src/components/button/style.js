/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import { colors, spacing } from '@global/theme'

const Small = css`
  height: ${spacing.threeAndAHalf};
  padding: ${spacing.threeQuarters} ${spacing.oneAndAHalf};

  min-width: ${({ fixWidth }) => (fixWidth ? spacing.eight : '')};
`

const Medium = css`
  height: ${spacing.five};
  padding: ${spacing.one} ${spacing.two};

  min-width: ${({ fixWidth }) => (fixWidth ? spacing.eleven : '')};
`

const Large = css`
  height: ${spacing.fiveAndAHalf};
  padding: ${spacing.oneAndAHalf} ${spacing.twoAndAHalf};

  min-width: ${({ fixWidth }) => (fixWidth ? spacing.fifteen : '')};
`

const Solid = css`
  background-color: ${({ color }) => (colors[color]?.regular ?? colors.primary.regular)};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);

  > * {
    color: ${colors.background.regular};
  }

  &:disabled {
    cursor: inherit;
    box-shadow: none;
    background-color: ${({ color }) => (colors[color]?.disabled ?? colors.primary.disabled)};
    > * {
      color: ${colors.background.regular};
    }
  }

  &:hover:enabled {
    background-color: ${({ color }) => (colors[color]?.hover ?? colors.primary.hover)};
  }

  &:focus {
    background-color: ${({ color }) => (colors[color]?.focus ?? colors.primary.focus)};
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.12);
    outline: 2px solid ${({ color }) => (colors[color]?.regular ?? colors.primary.regular)}
  }

  &:active:enabled {
    background-color: ${({ color }) => (colors[color]?.selected ?? colors.primary.selected)};
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.12);
  }
`

const Line = css`
  background-color: ${colors.background.regular};
  border: 2px solid ${({ color }) => (colors[color]?.regular ?? colors.primary.regular)};
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.15);

  > * {
    color: ${({ color }) => (colors[color]?.regular ?? colors.primary.regular)};
  }

  &:disabled {
    cursor: inherit;
    box-shadow: none;
    background-color: ${colors.background.disabled};
    border-color: ${({ color }) => (colors[color]?.disabled ?? colors.primary.disabled)};
    > * {
      color: ${({ color }) => (colors[color]?.selected ?? colors.primary.selected)};
    }
  }

  &:hover:enabled {
    background-color: ${colors.background.hover};
    border-color: ${({ color }) => (colors[color]?.hover ?? colors.primary.hover)};
    box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.15);
    > * {
      color: ${({ color }) => (colors[color]?.hover ?? colors.primary.regular)};
    }
  }

  &:focus {
    background-color: ${({ color }) => (colors[color]?.disabled ?? colors.primary.disabled)};
    border-color: ${({ color }) => (colors[color]?.focus ?? colors.primary.focus)};
    > * {
      color: ${colors.background.regular};
    }
  }

  &:active:enabled {
    background-color: transparent;
    border-color: ${({ color }) => (colors[color]?.selected ?? colors.primary.hover)};
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.12);
    > * {
      color: ${({ color }) => (colors[color]?.selected ?? colors.primary.regular)};
    }
  }
`

const Ghost = css`
  background-color: transparent;

  > * {
    color: ${({ color }) => (colors[color]?.regular ?? colors.primary.regular)};
  }
`

export const StyledButton = styled.button`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: none;

  cursor: pointer;
  width: ${({ block }) => (block ? '100%' : 'max-content')};

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

  ${({ type }) => {
    switch (type) {
      case 'line': return Line
      case 'ghost': return Ghost
      default: return Solid
    }
  }};

  > :not(:last-child) {
    ${({ reverse }) => (reverse ? `margin-left: ${spacing.one}` : `margin-right: ${spacing.one}`)};
  }

  transition: background-color 250ms;
`
