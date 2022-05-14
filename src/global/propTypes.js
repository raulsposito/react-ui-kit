import PropTypes from 'prop-types'

import { SIZE, WEIGHT } from '@global/fonts'
import { colors, spacing } from '@global/theme'

const weight = PropTypes.oneOf(Object.keys(WEIGHT).map(w => w.toLowerCase()))
const size = PropTypes.oneOf(Object.keys(SIZE).map(s => s.toLowerCase()))
const color = PropTypes.oneOf(Object.keys(colors))
const space = PropTypes.oneOf(Object.keys(spacing))
const allColors = PropTypes.oneOf([...Object.keys(colors), ...Object.keys(colors.events)])

export default {
  weight,
  size,
  color,
  space,
  allColors
}
