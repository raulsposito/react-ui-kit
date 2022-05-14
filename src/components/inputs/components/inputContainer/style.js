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

export const StyledInputBox = styled.input`
  ${openSans};
  ${fontSize.medium};
  line-height: ${spacing.twoAndAHalf};

  border: 0;
  outline: none;
  width: inherit;
  margin: 0 ${spacing.two} 0 ${spacing.two};

  color: ${({ error }) => (error ? colors.error.regular : colors.contrast.regular)};

  &:placeholder {
    color: ${({ error }) => (error ? colors.error.regular : colors.system.regular)};
    visibility: ${({ disabled }) => (disabled ? 'hidden' : 'visible')};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none; /* stylelint-disable-line property-no-vendor-prefix */
    margin: 0;
  }

  /* Firefox */
  -moz-appearance: textfield; /* stylelint-disable-line property-no-vendor-prefix */

  &:disabled {
    background-color: ${colors.background.disabled};
    color: ${colors.system.disabled};
  }
`

export const StyledInputContainer = styled.div`
  width: 100%;
  height: ${spacing.seven};

  position: relative;
  display: inline-flex;
  align-items: center;

  border-radius: 5px;
  border: 1px solid;

  ${({ error, disabled }) => handleBorderColor(error, disabled)}
  cursor: ${({ disabled }) => (disabled ? 'initial' : 'text')};
  background-color: ${({ disabled }) => (disabled ? colors.background.disabled : colors.background.regular)};
`
