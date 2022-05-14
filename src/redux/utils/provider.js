import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { configureStore } from '@redux/store'

const Pr = ({ children, initialState, key }) => {
  const init = key ? { [key]: { ...initialState } } : initialState
  const store = configureStore(init)

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

Pr.propTypes = {
  key: PropTypes.string,
  children: PropTypes.node,
  initialState: PropTypes.object
}

export default Pr
