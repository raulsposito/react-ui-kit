import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from './utils/history'
import globalReducer from './global/reducer'
// import messages from '@messages/redux/reducer'

// TODO: UNCOMMENT MESSAGES

/**
* Merges the main reducer with the router state and dynamically injected reducers
*/
export default function createReducer (injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    // messages,
    ...injectedReducers
  })

  return rootReducer
}
