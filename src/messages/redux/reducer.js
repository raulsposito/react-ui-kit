// import produce from 'immer'

// import { STATUS } from '../variables'
// import { MESSAGES } from './types'

// export const initialState = {
//   messages: [],
//   error: ''
// }

// const reducer = (state = initialState, { type, payload }) =>
//   produce(state, draft => {
//     switch (type) {
//       case MESSAGES.ADD:
//         draft.messages.push(payload)
//         break

//       case MESSAGES.SHOW: {
//         const message = draft.messages.find(({ id }) => id === payload)
//         if (message) message.status = STATUS.SHOWING
//         break
//       }

//       case MESSAGES.HIDE: {
//         const message = draft.messages.find(({ id }) => id === payload)
//         if (message) message.status = STATUS.HIDING
//         break
//       }

//       case MESSAGES.REMOVE: {
//         const index = draft.messages.findIndex(({ id }) => id === payload)
//         if (index !== -1) draft.messages.splice(index, 1)
//         break
//       }

//       case MESSAGES.CLEAR:
//         draft.messages = []
//         break

//       case MESSAGES.ERROR:
//         draft.error = payload
//         break
//     }
//   })

// export default reducer
