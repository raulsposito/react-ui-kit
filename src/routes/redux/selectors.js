import { createSelector } from 'reselect'
import { get } from 'lodash'

const selectRouter = state => get(state, 'router', {})

const selectQuery = createSelector(
  selectRouter, state => get(state, 'location.query', {})
)

export default {
  QUERY: selectQuery
}
