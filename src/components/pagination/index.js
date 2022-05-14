import React from 'react'
import PropTypes from 'prop-types'

import MyPropTyes from '@global/propTypes'

import PaginationItem from './components/paginationItem'

import { StyledPagination } from './style'

const Pagination = props => {
  const {
    size,
    color,
    pages,
    amount,
    disabled,
    selected,
    goToPage,
    showStartAndEnd,
    showBackAndNext
  } = props

  if (pages === 0) return null

  const next = () => goToPage(Math.min(selected + 1, pages - 1))
  const prev = () => goToPage(Math.max(selected - 1, 0))

  const disableBack = disabled || selected === 0
  const disableNext = disabled || selected === pages - 1

  const firstButton = (
    <PaginationItem
      onClick={() => goToPage(0)}
      color={color}
      size={size}
      disabled={disableBack}
      icon='first_page'
    />
  )
  const lastButton = (
    <PaginationItem
      onClick={() => goToPage(pages - 1)}
      color={color}
      size={size}
      disabled={disableNext}
      icon='last_page'
    />
  )

  const prevButton = (
    <PaginationItem
      size={size}
      color={color}
      onClick={prev}
      disabled={disableBack}
      icon='chevron_left'
    />
  )
  const nextButton = (
    <PaginationItem
      size={size}
      color={color}
      onClick={next}
      disabled={disableNext}
      icon='chevron_right'
    />
  )

  const renderEllipsis = n => (
    <PaginationItem
      size={size}
      color={disabled ? 'system' : 'contrast'}
      disabled={disabled}
      key={`ellipsis_${n}`}
      icon='more_horiz'
    />
  )

  const renderNumber = n => (
    <PaginationItem
      size={size}
      color={color}
      disabled={disabled}
      key={`number_${n}`}
      number={n + 1}
      selected={selected === n}
      onClick={() => goToPage(n)}
    />
  )

  const renderCenter = () => {
    if (pages <= amount) return [...new Array(pages - 2)].map((_, i) => renderNumber(i + 1))

    if (selected < amount - 3) {
      return [
        ...[...new Array(amount - 3)].map((_, i) => renderNumber(i + 1)),
        renderEllipsis(2)
      ]
    }

    if (selected >= amount - 3 && selected < pages - amount + 3) {
      return [
        renderEllipsis(1),
        ...[...new Array(amount - 4)].map((_, i) => renderNumber(selected + i - 1)),
        renderEllipsis(2)
      ]
    }

    if (selected >= pages - amount + 3) {
      return [
        renderEllipsis(1),
        ...[...new Array(amount - 3)].map((_, i) => renderNumber(pages - 5 + i))
      ]
    }

    return null
  }

  return (
    <StyledPagination
      justifyContent='center'
      alignItems='center'
    >
      {showStartAndEnd && firstButton}
      {showBackAndNext && prevButton}

      {renderNumber(0)}
      {renderCenter()}
      {renderNumber(pages - 1)}

      {showBackAndNext && nextButton}
      {showStartAndEnd && lastButton}
    </StyledPagination>
  )
}

Pagination.propTypes = {
  color: MyPropTyes.color,
  pages: PropTypes.number,
  amount: PropTypes.number,
  goToPage: PropTypes.func,
  disabled: PropTypes.bool,
  selected: PropTypes.number,
  showStartAndEnd: PropTypes.bool,
  showBackAndNext: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Pagination.defaultProps = {
  amount: 7,
  showStartAndEnd: true,
  showBackAndNext: true
}

export default Pagination
