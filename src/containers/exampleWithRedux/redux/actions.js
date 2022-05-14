import { STATUS, VALUE } from './types'

export const startLoad = payload => ({
  type: STATUS.START_LOAD,
  payload
})

export const endLoad = () => ({
  type: STATUS.END_LOAD
})

export const STATUS_ACTIONS = {
  START_LOAD: startLoad,
  END_LOAD: endLoad
}

export const setValue = payload => ({
  type: VALUE.SET,
  payload
})

export const celarValue = () => ({
  type: VALUE.CLEAR
})

export const VALUE_ACTIONS = {
  SET: setValue,
  CLEAR: celarValue
}
