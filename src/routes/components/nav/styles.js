import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '@global/theme'
import { column } from '@global/styles'

export const MyNav = styled.nav`
  ${column};
  grid-area: nav;
  background-color: ${colors.primary.regular};
  z-index: 2;
  box-shadow: 4px 0px 4px 0px #00000040;
`

export const MyLink = styled(Link)`
  width: 100%;
  height: 100px;

  border: 1px solid red;
`
