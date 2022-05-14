// import { put, takeEvery, delay } from 'redux-saga/effects'
// import { v4 as uuid } from 'uuid'

// import { STATUS, SHOWING_TIME } from '../variables'
// import { getRealMessage } from '../mapping'

// import { MESSAGES } from './types'
// import { MESSAGE_ACTIONS } from './actions'

// function* createMessage({ payload }) {
//   try {
//     const id = uuid()

//     const realMessage = getRealMessage(payload)
//     const { time } = payload

//     const pack = {
//       ...payload,
//       message: realMessage,
//       status: STATUS.CREATED,
//       id
//     }

//     yield put(MESSAGE_ACTIONS.ADD(pack))
//     yield delay(200)

//     yield put(MESSAGE_ACTIONS.SHOW(id))

//     yield delay(time || SHOWING_TIME)
//     yield put(MESSAGE_ACTIONS.HIDE(id))

//     yield delay(600)
//     yield put(MESSAGE_ACTIONS.REMOVE(id))
//   } catch (err) {
//     yield put(MESSAGE_ACTIONS.ERROR(err))
//   }
// }

// function* removeByUser({ payload }) {
//   yield put(MESSAGE_ACTIONS.HIDE(payload))

//   yield delay(600)
//   yield put(MESSAGE_ACTIONS.REMOVE(payload))
// }

// export default function* saga() {
//   yield takeEvery(MESSAGES.CREATE, createMessage)
//   yield takeEvery(MESSAGES.REMOVE_BY_USER, removeByUser)
// }
