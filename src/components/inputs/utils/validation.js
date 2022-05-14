import { INPUT_TYPES } from '@components/inputs/utils/constants'

export const validatePassword = password => {
  const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/g
  const valid = (password) ? !!password.trim().match(regex) : true
  const returnObj = {
    isValid: valid,
    message: (!valid) ? 'Is not a valid password' : null
  }

  return returnObj
}

export const validateNumber = number => {
  const valid = number ? !Number.isNaN(number) : true
  const returnObj = {
    isValid: valid,
    message: (!valid) ? 'Is not a valid number' : null
  }

  return returnObj
}

export const validateName = name => {
  const regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
  const valid = (name) ? !!name.trim().match(regex) : true
  const returnObj = {
    isValid: valid,
    message: (!valid) ? 'Is not a valid name' : null
  }

  return returnObj
}

export const validateEmail = email => {
  // eslint-disable-next-line max-len
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const valid = (email) ? !!email.match(regex) : true
  const returnObj = {
    isValid: valid,
    message: (!valid) ? 'Is not a valid email' : null
  }

  return returnObj
}

export const validateTextArea = ({ value, maxLength, required }) => {
  if (!value && required) return { isValid: false, message: 'Required Field' }

  const valid = !(value.length === maxLength)

  const returnObj = {
    isValid: valid,
    message: (!valid) ? 'Is not a valid textarea' : null
  }

  return returnObj
}

export const validateField = ({ type, value, required }) => {
  if (!value && required) return { isValid: false, message: 'Required Field' }

  switch (type) {
    case INPUT_TYPES.TEXT:
      return { isValid: true, message: null }
    case INPUT_TYPES.EMAIL:
      return validateEmail(value)
    case INPUT_TYPES.TEL:
    case INPUT_TYPES.DATE:
    case INPUT_TYPES.PASSWORD:
      return validatePassword(value)
    case INPUT_TYPES.NUMBER:
      return validateNumber(value)
    case INPUT_TYPES.NAME:
      return validateName(value)
    default:
      return { isValid: true, message: null }
  }
}
