import { put, takeLatest, delay } from 'redux-saga/effects'

import { STATUS } from './types'
import { STATUS_ACTIONS } from './actions'

export function* startLoad () {
  yield delay(1500)
  yield put(STATUS_ACTIONS.END_LOAD())
}

export default function* saga () {
  yield takeLatest(STATUS.START_LOAD, startLoad)
}
