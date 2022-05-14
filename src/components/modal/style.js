import styled from 'styled-components'

import { colors, spacing } from '@global/theme'
import { Column, Row } from '@global/styles'

export const Overlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.25);
  overflow: hidden;
`

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  overflow: auto;
  outline: 0;
`

export const Area = styled(Column)`
  width: 500px;
  max-width: 90%;
  height: auto;
  min-height: 120px;

  top: 15%;
  margin: auto;
  padding: ${spacing.four};

  z-index: 12;
  border-radius: 8px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);

  position: relative;
  align-items: center;

  background-color: ${colors.background.primary};

  transform: height 1s;
`

export const Close = styled.div`
  > button {
    position: absolute;
    top: ${spacing.two};
    right: ${spacing.two};
    align-self: flex-end;
    cursor: pointer;

    padding: 0;
    height: auto;
    color: ${colors.contrast.regular};
  }
`

export const IconContainer = styled.div`
  margin-bottom: ${spacing.one};
`

export const ButtonContainer = styled(Row)`
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-top: ${spacing.threeAndAHalf};

  > :not(:first-child) {
    margin-left: ${spacing.two};
  }
`
