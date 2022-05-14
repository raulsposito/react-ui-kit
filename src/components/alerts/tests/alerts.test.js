import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { colors } from '@global/theme'

import Alert from '..'

describe('<Alert />', () => {
  it('Should match snapshot', () => {
    const { asFragment } = render(<Alert />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders with the correct title', () => {
    render(<Alert title='spiderman' type='success' />)
    expect(screen.queryByText('spiderman')).toBeInTheDocument()
  })

  it('Renders with the correct text', () => {
    render(<Alert text='spiderman' type='success' />)
    expect(screen.queryByText('spiderman')).toBeInTheDocument()
  })

  it('Can have buttons', () => {
    render(<Alert type='success' actions />)
    expect(screen.queryByRole('button')).toBeInTheDocument()
  })

  it('Default renders with no buttons', () => {
    render(<Alert type='success' />)
    expect(screen.queryByRole('button')).toBe(null)
  })

  it('Renders with the correct button text when buttonText is passed', () => {
    render(<Alert type='success' actions buttonText='clickMe' />)
    const button = screen.getByText('clickMe')
    expect(button).toBeInTheDocument()
  })

  it('Renders with the correct default button text if no prop is passed', () => {
    render(<Alert type='success' actions />)
    const defaultButton = screen.getByText('x')
    expect(defaultButton).toBeInTheDocument()
  })

  it('Can handle onClick', () => {
    const handleClick = jest.fn()
    render(<Alert type='success' actions buttonText='clickMe' buttonOnClick={handleClick} />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  describe('Style', () => {
    it('Can have success style', () => {
      const { container } = render(<Alert type='success' />)
      const childNodes = container.firstChild
      expect(childNodes).toBeInTheDocument()
      expect(childNodes).toHaveStyle({ backgroundColor: `${colors.success.regular}` })
    })

    it('Can have warning style', () => {
      const { container } = render(<Alert type='warning' />)
      const child = container.firstChild
      expect(child).toBeInTheDocument()
      expect(child).toHaveStyle({ backgroundColor: `${colors.warning.regular}` })
    })

    it('Can have error style', () => {
      const { container } = render(<Alert type='error' />)
      const child = container.firstChild
      expect(child).toBeInTheDocument()
      expect(child).toHaveStyle({ backgroundColor: `${colors.error.regular}` })
    })
  })
})
