import styled from 'styled-components'
import Select from 'react-select'

import { fontSize, fontWeight, openSans } from '@global/fonts'
import { spacing, colors } from '@global/theme'

export const StyledDropdown = styled(Select)`
  ${openSans};
  ${fontWeight.semibold};
  ${fontSize.medium};
  line-height: ${spacing.twoAndAHalf};
`

export const handleType = (type, color, isFocus, isDisabled) => {
  const defaultColor = color || 'primary'

  const disabledState = {
    backgroundColor: type === 'solid' ? `${colors[defaultColor].disabled}` : `${colors.background.disabled}`,
    color: `${colors[defaultColor].disabled}`,
    border: `2px solid ${colors[defaultColor].disabled}`
  }

  const focusState = {
    backgroundColor: type === 'solid' ? `${colors[defaultColor].focus}` : `${colors.background.regular}`,
    color: `${colors[defaultColor].focus}`,
    ':hover': {
      borderColor: `${colors[defaultColor].focus}`,
      color: type === 'solid' && `${colors[defaultColor].focus}`
    }
  }

  const regularState = {
    backgroundColor: type === 'solid' ? `${colors[defaultColor].regular}` : `${colors.background.regular}`,
    ':hover': {
      borderColor: `${colors[defaultColor].hover}`,
      color: type === 'solid' && `${colors[defaultColor].hover}`,
      backgroundColor: type === 'solid' ? `${colors[defaultColor].hover}` : `${colors.background.hover}`
    }
  }

  if (isDisabled) return disabledState
  if (isFocus) return focusState
  return regularState
}
