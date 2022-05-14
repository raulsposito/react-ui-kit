import styled, { css } from 'styled-components'

import { colors, spacing } from '@global/theme'
import { column, row } from '@global/styles'

const Vertical = css`
  ${column};
  height: fit-content;
  width: 320px;
`

const Horizontal = css`
  ${row};
  width: 730px;
  height: 174px;
`

export const MyCard = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: ${colors.background.regular};

  ${({ type }) => (type === 'horizontal' ? Horizontal : Vertical)};
`

export const Container = styled.div`
  ${({ type }) => (type === 'horizontal' ? row : column)};
  padding: ${({ type }) => (
    type === 'horizontal' ? `${spacing.oneAndAHalf}` : `${spacing.two} ${spacing.twoAndAHalf}`
  )};
  width: 100%;
  height: 100%;
`

export const Info = styled.div`
  ${column};
  position: relative;
  flex: 1;
  height: 100%;
`

export const MultiButtonContainer = styled.div`
  ${row};
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: auto;

  > :not(:last-child) {
    margin-right: ${spacing.three};
  }
`

export const SingleButtonContainer = styled.div`
  height: 100%;
  width: 128px;

  display: flex;
  justify-content: center;
  align-items: center;
`

const VerticalImg = css`
  width: 100%;
  height: 180px;
  border-radius: 5px 5px 0 0;
`

const HorizontalImg = css`
  width: auto;
  height: 100%;
  border-radius: 5px 0 0 5px;
`

export const Img = styled.img`
  object-fit: cover;
  ${({ type }) => (type === 'horizontal' ? HorizontalImg : VerticalImg)};
`

export const BadgeContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  margin-left: -${spacing.two};
  padding-top: ${spacing.twoAndAQuarter};

  > :not(:first-child) {
    margin-top: ${spacing.oneAndAQuarter};
  }
`

export const TextContainer = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  /* stylelint-disable-next-line value-no-vendor-prefix */
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  /* stylelint-disable-next-line property-no-vendor-prefix */
  -webkit-box-orient: vertical;
  white-space: normal;
`
