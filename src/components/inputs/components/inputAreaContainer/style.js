import styled, { css } from 'styled-components'
import { spacing, colors } from '@global/theme'
import { fontSize, openSans } from '@global/fonts'

const RegularContainer = css`
  border-color: ${colors.system.regular};
  &:hover {
    border-color: ${colors.system.hover};
  }
  &:focus-within {
    border-color: ${({ color }) => (color ? colors[color].regular : colors.primary.regular)};
  }
`

const handleBorderColor = (error, disabled) => {
  if (error) return css`border-color: ${colors.error.regular};`
  if (disabled) return css`border-color: ${colors.system.disabled};`

  return RegularContainer
}

export const StyledTextAreaContainer = styled.textarea`
  ${openSans};
  ${fontSize.medium};
  line-height: ${spacing.twoAndAHalf};

  width: 100%;

  border: 1px solid;
  outline: none;
  border-radius: 5px;

  padding: ${spacing.oneAndAQuarter} ${spacing.two};
  resize: ${({ resize }) => (resize ? 'vertical' : 'none')};

  ${({ error, disabled }) => handleBorderColor(error, disabled)}

  background-color: ${({ disabled }) => (disabled ? colors.background.disabled : colors.background.regular)};

  &:placeholder {
    color: ${({ error }) => (error ? colors.error.regular : colors.system.regular)};
    visibility: ${({ disabled }) => (disabled ? 'hidden' : 'visible')};
  }

`
