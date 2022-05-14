import { STATUS } from '../types'
import reducer, { initialState } from '../reducer'

describe('<ReduxExample /> REDUCER', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('has type === STATUS.START_LOAD', () => {
    const state = reducer(undefined, {
      type: STATUS.START_LOAD,
      payload: 'payload'
    })
    const expected = {
      ...initialState,
      loading: true,
      text: 'payload'
    }
    expect(state).toEqual(expected)
  })

  it('has type === STATUS.END_LOAD', () => {
    const state = reducer(undefined, {
      type: STATUS.END_LOAD
    })
    const expected = {
      ...initialState,
      loading: false
    }
    expect(state).toEqual(expected)
  })
})
