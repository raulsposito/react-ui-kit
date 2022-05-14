import { INPUT_TYPES } from './constants'

export const handleTextColorState = (error, focused, color) => {
  if (error) return 'error'
  if (focused) return color || 'primary'
  return 'contrast'
}

export const handleTypes = type => {
  switch (type) {
    case INPUT_TYPES.TEXT: return 'text'
    case INPUT_TYPES.NAME: return 'text'
    case INPUT_TYPES.TEL: return 'tel'
    case INPUT_TYPES.EMAIL: return 'email'
    case INPUT_TYPES.NUMBER: return 'number'
    case INPUT_TYPES.PASSWORD: return 'password'
    default: return 'text'
  }
}
