// import {
//   faInfoCircle,
//   faCheckCircle,
//   faTimesCircle,
//   faExclamationCircle
// } from '@fortawesome/free-solid-svg-icons'

// import { MESSAGE_TYPE } from 'Global/constants'
// import { MESSAGE_ACTIONS } from './Redux/actions'
// import { store } from '../index'

// export const createMessage = message => store.dispatch(MESSAGE_ACTIONS.CREATE(message))

// const createSuccess = success => createMessage({
//   message: success.message || success,
//   title: success.title || 'Éxito',
//   type: MESSAGE_TYPE.SUCCESS,
//   icon: faCheckCircle,
//   time: success.time
// })

// const createError = err => createMessage({
//   message: err.message || err,
//   title: err.title || 'Error',
//   type: MESSAGE_TYPE.ERROR,
//   icon: faTimesCircle,
//   time: err.time
// })

// const createInfo = info => createMessage({
//   message: info.message || info,
//   title: info.title || 'Info',
//   type: MESSAGE_TYPE.INFO,
//   icon: faInfoCircle,
//   time: info.time
// })

// const createWarning = warning => createMessage({
//   message: warning.message || warning,
//   title: warning.title || 'Aviso',
//   type: MESSAGE_TYPE.WARNING,
//   icon: faExclamationCircle,
//   time: warning.time
// })

// export const message = {
//   success: createSuccess,
//   error: createError,
//   info: createInfo,
//   warning: createWarning
// }

// export default {
//   success: createSuccess,
//   error: createError,
//   info: createInfo,
//   warning: createWarning
// }
