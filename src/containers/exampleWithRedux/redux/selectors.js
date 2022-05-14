import { createSelector } from 'reselect'
import { get } from 'lodash'

import key from './types'
import { initialState } from './reducer'

const reducer = state => get(state, key, initialState)

const getLoading = createSelector(
  reducer, state => get(state, 'loading', false)
)

const getText = createSelector(
  reducer, state => get(state, 'text', false)
)

const getValue = createSelector(
  reducer, state => get(state, 'value', '')
)

export default {
  LOADING: getLoading,
  TEXT: getText,
  VALUE: getValue
}
