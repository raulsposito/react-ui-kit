import produce from 'immer'

import { MODAL } from './types'

export const initialState = {
  modal: {
    isShowing: false
  }
}

const reducer = (state = initialState, { type }) => produce(state, draft => {
  const { modal } = draft
  switch (type) {
    // MODAL
    case MODAL.OPEN:
      modal.isShowing = true
      break

    case MODAL.CLOSE:
      modal.isShowing = false
      break

    case MODAL.TOGGLE:
      modal.isShowing = !modal.isShowing
      break
  }
})

export default reducer
