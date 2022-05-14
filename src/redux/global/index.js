import { useInjectSaga } from '@redux/utils/injectSaga'
import { useInjectReducer } from '@redux/utils/injectReducer'

import key from './types'
import saga from './saga'
import reducer from './reducer'

export const useSaga = () => {
  useInjectSaga({ key, saga })
}

export const useReducer = () => {
  useInjectReducer({ key, reducer })
}

export default () => {
  useSaga()
  useReducer()
}
