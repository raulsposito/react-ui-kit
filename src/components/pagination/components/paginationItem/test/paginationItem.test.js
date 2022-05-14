import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { colors, spacing } from '@global/theme'
import { getComponent } from '@utils/test'

import { Text } from '@components/texts'
import Icon from '@components/icon'

import PaginationItem from '..'

const mockData = {
  number: 12,
  icon: 'first_page',
  onClick: jest.fn()
}

describe('<PaginationItem />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<PaginationItem number={mockData.number} onClick={mockData.onClick} />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Child Element', () => {
    it('has number', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} />)
      const number = screen.queryByText(mockData.number)
      const icon = getComponent(Icon)

      expect(number).toBeInTheDocument()
      expect(icon).toBeUndefined()
    })

    it('has icon', () => {
      render(<PaginationItem icon={mockData.icon} onClick={mockData.onClick} />)
      const number = getComponent(Text)
      const icon = screen.queryByText(mockData.icon)

      expect(number).toBeUndefined()
      expect(icon).toBeInTheDocument()
    })
  })

  describe('Sizes', () => {
    it('has default size', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ height: `${spacing.fourAndAHalf}` })
      expect(paginationItem).toHaveStyle({ width: `${spacing.fourAndAHalf}` })
    })

    it('has small size', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} size='small' />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ height: `${spacing.threeAndAHalf}` })
      expect(paginationItem).toHaveStyle({ width: `${spacing.threeAndAHalf}` })
    })

    it('has medium size', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} size='medium' />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ height: `${spacing.fourAndAHalf}` })
      expect(paginationItem).toHaveStyle({ width: `${spacing.fourAndAHalf}` })
    })

    it('has large size', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} size='large' />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ height: `${spacing.five}` })
      expect(paginationItem).toHaveStyle({ width: `${spacing.five}` })
    })
  })

  describe('Disabled', () => {
    it('is disabled', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} disabled />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveAttribute('disabled')
      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(paginationItem).toHaveStyle({ cursor: 'default' })
      expect(paginationItem).toHaveStyle({ pointerEvents: 'none' })
    })

    it('is not disabled', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(paginationItem).toHaveStyle({ cursor: 'pointer' })
    })
  })

  describe('Selected', () => {
    it('is selected', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} selected />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.primary.selected}` })
    })

    it('is selected & disabled', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} selected disabled />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveAttribute('disabled')
      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.primary.disabled}` })
      expect(paginationItem).toHaveStyle({ cursor: 'default' })
      expect(paginationItem).toHaveStyle({ pointerEvents: 'none' })
    })

    it('is not selected', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(paginationItem).toHaveStyle({ cursor: 'pointer' })
    })
  })

  describe('Colors', () => {
    it('has default color', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} selected />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.primary.selected}` })
    })

    it('is primary', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} color='primary' selected />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.primary.selected}` })
    })

    it('is variant', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} color='variant' selected />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.variant.selected}` })
    })

    it('is secondary', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} color='secondary' selected />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.secondary.selected}` })
    })

    it('is success', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} color='success' selected />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.success.selected}` })
    })

    it('is error', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} color='error' selected />)
      const paginationItem = screen.getByRole('button')

      expect(paginationItem).toHaveStyle({ backgroundColor: `${colors.error.selected}` })
    })
  })

  describe('Mouse Events', () => {
    it('calls function on click', () => {
      render(<PaginationItem number={mockData.number} onClick={mockData.onClick} />)
      const paginationItem = screen.getByRole('button')

      userEvent.click(paginationItem)
      expect(mockData.onClick).toHaveBeenCalledTimes(1)
    })
  })
})
