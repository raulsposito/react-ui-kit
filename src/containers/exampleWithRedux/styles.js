import styled from 'styled-components'

import { spacing, colors } from '@global/theme'
import { roboto, fontSize } from '@global/fonts'
import { column, row } from '@global/styles'

export const Column = styled.div`
  ${column};
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: ${spacing.two};
  }
`

export const ButtonRow = styled.div`
  ${row};
  > :first-child {
    margin-right: ${spacing.two};
  }
`

export const Input = styled.input`
  height: ${spacing.five};
  padding-left: ${spacing.one};
  width: 500px;
  ${roboto};
  ${fontSize.small};
`

export const Button = styled.button`
  background-color: ${({ color }) => (color === 'red' ? colors.error.regular : colors.primary.regular)};
  padding: ${spacing.one} ${spacing.two};
  border: none;
  outline: none;
  border-radius: 6px;
  max-width: 300px;

  cursor: pointer;

  > p {
    color: white;
  }

  :disabled {
    opacity: 0.5;
    cursor: initial;
  }
`

export const Modal = styled(Column)`
  padding: ${spacing.threeAndAHalf};
  position: fixed;
  width: 600px;
  min-height: 400px;
  background-color: white;
  align-items: center;
  justify-content: space-around;

  border-radius: 8px;

  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

  > p {
    margin: auto 0;
  }

  > button {
    width: 100%;
  }
`
