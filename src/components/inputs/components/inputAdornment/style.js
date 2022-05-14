import { spacing } from '@global/theme'
import styled from 'styled-components'

export const StyledInputAdornment = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  user-select: none;

  pointer-events: ${({ disablePointerEvents }) => (disablePointerEvents ? 'none' : 'auto')};
  cursor: ${({ disablePointerEvents }) => (disablePointerEvents ? 'default' : 'pointer')};
  opacity: ${({ disablePointerEvents }) => (disablePointerEvents ? '0.5' : '1.0')};

  margin-left: ${({ position }) => (position === 'start' ? spacing.two : 'none')};
  margin-right: ${({ position }) => (position === 'end' ? spacing.two : 'none')};
`
