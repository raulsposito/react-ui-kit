import produce from 'immer'

import { STATUS, VALUE } from './types'

export const initialState = {
  loading: false,
  text: '',
  value: ''
}

const reducer = (state = initialState, { type, payload }) => produce(state, draft => {
  switch (type) {
    case STATUS.START_LOAD:
      draft.loading = true
      draft.text = payload
      break

    case STATUS.END_LOAD:
      draft.loading = false
      draft.text = ''
      break

    case VALUE.SET:
      draft.value = payload
      break

    case VALUE.CLEAR:
      draft.value = ''
      break
  }
})

export default reducer
