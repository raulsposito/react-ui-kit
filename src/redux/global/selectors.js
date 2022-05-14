import { createSelector } from 'reselect'
import { get } from 'lodash'

import key from './types'
import { initialState } from './reducer'

const selectGlobal = state => get(state, key, initialState)

const selectModalShowing = createSelector(
  selectGlobal, state => get(state, 'modal.isShowing', false)
)

export default {
  MODAL_SHOWING: selectModalShowing
}
