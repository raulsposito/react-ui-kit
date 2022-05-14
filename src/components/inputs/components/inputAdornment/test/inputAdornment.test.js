import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { colors, spacing } from '@global/theme'

import InputAdornment from '..'

const mockData = {
  icon: 'visibility',
  text: 'US$',
  color: 'system',
  onClick: jest.fn()
}

describe('<InputAdornment />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <InputAdornment onClick={mockData.onClick} icon={mockData.icon} color={mockData.color} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Icon & Text', () => {
  it('has an icon children node', () => {
    render(<InputAdornment onClick={mockData.onClick} icon={mockData.icon} color={mockData.color} />)

    const icon = screen.queryByText(mockData.icon)
    expect(icon).toBeInTheDocument()
  })

  it('has a text children node', () => {
    render(<InputAdornment onClick={mockData.onClick} text={mockData.text} color={mockData.color} />)

    const text = screen.queryByText(mockData.text)
    expect(text).toBeInTheDocument()
  })
})

describe('Color', () => {
  it('icon has correct color', () => {
    render(<InputAdornment onClick={mockData.onClick} icon={mockData.icon} color={mockData.color} />)

    const icon = screen.queryByText(mockData.icon)
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveStyle({ color: `${colors[mockData.color].regular}` })
  })

  it('text has correct color', () => {
    render(<InputAdornment onClick={mockData.onClick} text={mockData.text} color={mockData.color} />)

    const text = screen.queryByText(mockData.text)
    expect(text).toBeInTheDocument()
    expect(text).toHaveStyle({ color: `${colors[mockData.color].regular}` })
  })
})

describe('Position', () => {
  it('has aligned on left (start)', () => {
    render(<InputAdornment onClick={mockData.onClick} position='start' icon={mockData.icon} color={mockData.color} />)

    const adornment = screen.queryByText(mockData.icon).closest('div')
    expect(adornment).toHaveStyle({ marginLeft: `${spacing.two}` })
  })

  it('has aligned on right (end)', () => {
    render(<InputAdornment onClick={mockData.onClick} position='end' icon={mockData.icon} color={mockData.color} />)

    const adornment = screen.queryByText(mockData.icon).closest('div')
    expect(adornment).toHaveStyle({ marginRight: `${spacing.two}` })
  })
})

describe('Mouse events', () => {
  it('calls function on click', () => {
    render(<InputAdornment onClick={mockData.onClick} icon={mockData.icon} color={mockData.color} />)

    const adornment = screen.queryByText('visibility').closest('div')
    userEvent.click(adornment)
    expect(mockData.onClick).toHaveBeenCalledTimes(1)
  })
})
