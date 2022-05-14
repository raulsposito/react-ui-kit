import connect from '@redux/utils/connect'
import key from './types'
import saga from './sagas'
import reducer from './reducer'

export default () => connect({ key, saga, reducer })
