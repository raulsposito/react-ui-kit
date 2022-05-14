import { css } from 'styled-components'

export const WEIGHT = {
  XLIGHT: 200,
  LIGHT: 300,
  REGULAR: 400,
  SEMIBOLD: 600,
  BOLD: 700,
  XBOLD: 800
}

export const SIZE = {
  XSMALL: '10px',
  SMALL: '12px',
  MEDIUM: '14px',
  LARGE: '16px',
  XLARGE: '20px',
  XXLARGE: '24px',
  H_MEDIUM: '32px',
  H_LARGE: '40px',
  H_XLARGE: '48px'
}

export const xlight = css`font-weight: ${WEIGHT.XLIGHT};`
export const light = css`font-weight: ${WEIGHT.LIGHT};`
export const regular = css`font-weight: ${WEIGHT.REGULAR};`
export const semibold = css`font-weight: ${WEIGHT.SEMIBOLD};`
export const bold = css`font-weight: ${WEIGHT.BOLD};`
export const xbold = css`font-weight: ${WEIGHT.XBOLD};`

export const fontWeight = {
  xlight,
  light,
  regular,
  semibold,
  bold,
  xbold
}

export const FONT_WEIGHT = {
  XLIGHT: xlight,
  LIGHT: light,
  REGULAR: regular,
  SEMIBOLD: semibold,
  BOLD: bold,
  XBOLD: xbold
}

export const xsmall = css`font-size: ${SIZE.XSMALL};`
export const small = css`font-size: ${SIZE.SMALL};`
export const medium = css`font-size: ${SIZE.MEDIUM};`
export const large = css`font-size: ${SIZE.LARGE};`
export const xlarge = css`font-size: ${SIZE.XLARGE};`
export const xxlarge = css`font-size: ${SIZE.XXLARGE};`

export const hmedium = css`font-size: ${SIZE.H_MEDIUM};`
export const hlarge = css`font-size: ${SIZE.H_LARGE};`
export const hxlarge = css`font-size: ${SIZE.H_XLARGE};`

export const fontSize = {
  xsmall,
  small,
  medium,
  large,
  xlarge,
  xxlarge,

  hmedium,
  hlarge,
  hxlarge
}

export const FONT_SIZE = {
  XSMALL: xsmall,
  SMALL: small,
  MEDIUM: medium,
  LARGE: large,
  XLARGE: xlarge,
  XXLARGE: xxlarge,
  HMEDIUM: hmedium,
  HLARGE: hlarge,
  HXLARGE: hxlarge
}

export const openSans = css`font-family: 'Open Sans', sans-serif;`
export const roboto = css`font-family: 'Roboto', sans-serif;`
