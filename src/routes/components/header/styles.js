import styled from 'styled-components'

import { colors } from '@global/theme'

export const Head = styled.header`
  grid-area: header;
  background-color: ${colors.primary.regular};
  box-shadow: 0px 4px 4px 0px #00000040;
  z-index: 3;
`
