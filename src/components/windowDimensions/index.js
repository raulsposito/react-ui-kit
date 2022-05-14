import React, { createContext, useContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { BREAKPOINTS } from '@global/constants'

export const WindowDimensionCtx = createContext(null)

const getDevice = () => {
  const width = window.innerWidth
  if (width <= BREAKPOINTS.MOBILE) return BREAKPOINTS.MOBILE
  if (width <= BREAKPOINTS.TABLET) return BREAKPOINTS.TABLET
  return BREAKPOINTS.DESKTOP
}

const WindowDimensionsProvider = ({ children }) => {
  const [device, setDevice] = useState(getDevice())

  useEffect(() => {
    const handleResize = () => {
      setDevice(getDevice())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <WindowDimensionCtx.Provider value={device}>
      {children}
    </WindowDimensionCtx.Provider>
  )
}

WindowDimensionsProvider.propTypes = {
  children: PropTypes.any
}

export default WindowDimensionsProvider

export const useWindowDimensions = () => useContext(WindowDimensionCtx)
