import styled, { css } from 'styled-components'
import { colors, spacing } from '@global/theme'
// import { column, row } from '@global/styles'

const success = css`
    background-color: ${colors.success.regular};
    color: ${colors.contrast.disabled};
`

const warning = css`
    background-color: ${colors.warning.regular};
    color: ${colors.contrast.disabled};
`

const error = css`
    background-color: ${colors.error.regular};
    color: ${colors.contrast.disabled};
`

export const StyledAlert = styled.div`
    opacity: 90%;
    padding: ${spacing.one};
    color: ${colors.contrast.disabled};
    border-radius: 5px 0px 0px 5px;

    min-height: ${spacing.seven};
    min-width: 192px;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: ${spacing.twoAndAHalf};
    &:hover {
    opacity: 100%;
    }
    ${({ type }) => {
    switch (type) {
      case 'warning': return warning
      case 'error': return error
      default: return success
    }
  }}
`

export const Container = styled.div`
  padding: ${spacing.two};
  min-width: fit-content;

  display: flex;
  position: sticky;
  left: 20px;
`

export const ButtonContainer = styled.div`
  position: fixed;
  right: 50px;
`
