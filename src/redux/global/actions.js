import { MODAL } from './types'

/**
 *
 * MODAL
 */
export const openModal = () => ({
  type: MODAL.OPEN
})

export const closeModal = () => ({
  type: MODAL.CLOSE
})

export const toggleModal = () => ({
  type: MODAL.TOGGLE
})

export const MODAL_ACTIONS = {
  OPEN: openModal,
  CLOSE: closeModal,
  TOGLE: toggleModal
}
