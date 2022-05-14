import styled from 'styled-components'

import { spacing, colors } from '@global/theme'
import { NAV_WIDTH, HEADER_HEIGHT } from './constants'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: ${NAV_WIDTH} 1fr;
  grid-template-rows: ${HEADER_HEIGHT} 1fr;

  grid-template-areas:
    'header header'
    'nav page'
`

export const Page = styled.div`
  grid-area: page;
  padding: ${spacing.three};
  background-color: ${colors.background.regular};
`
