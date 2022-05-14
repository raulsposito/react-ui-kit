import { STATUS } from '../types'
import { STATUS_ACTIONS } from '../actions'

describe('<ReduxExample /> ACTIONS', () => {
  it('triggers startLoad', () => {
    expect(STATUS_ACTIONS.START_LOAD('message')).toEqual({
      type: STATUS.START_LOAD,
      payload: 'message'
    })
  })

  it('triggers endLoad', () => {
    expect(STATUS_ACTIONS.END_LOAD()).toEqual({
      type: STATUS.END_LOAD
    })
  })
})
