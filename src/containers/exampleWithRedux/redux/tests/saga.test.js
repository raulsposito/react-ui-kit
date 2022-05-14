import React from 'react'
import { render } from '@testing-library/react'
import { put, delay } from 'redux-saga/effects'

import Provider from '@redux/utils/provider'

// import { Provider } from 'react-redux'
// import store from '@redux/store'

import { startLoad } from '../sagas'
import { STATUS_ACTIONS } from '../actions'

import { ReduxExample } from '../..'

describe('<ReduxExample /> SAGAS', () => {
  render(
    <Provider>
      <ReduxExample />
    </Provider>
  )

  describe('startLoad Saga', () => {
    it('runs', async () => {
      const gen = startLoad()
      expect(gen.next().value).toEqual(delay(1500))
      expect(gen.next().value).toEqual(put(STATUS_ACTIONS.END_LOAD()))
      expect(gen.next().done).toBeTruthy()
    })
  })
})
