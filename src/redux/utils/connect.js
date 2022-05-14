import { useInjectReducer, useInjectSaga } from 'redux-injectors'

export default ({ key, saga, reducer }) => {
  useInjectSaga({ key, saga })
  useInjectReducer({ key, reducer })
}
