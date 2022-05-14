import React from 'react'
import { render, screen } from '@testing-library/react'

import { SIZE, WEIGHT } from '@global/fonts'
import { colors, spacing } from '@global/theme'

import Text from '../index'

describe('<Text />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Text text='Goku' />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Children & text', () => {
    it('has children', () => {
      render(<Text>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toBeInTheDocument()
    })
    it('has prop text', () => {
      render(<Text text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toBeInTheDocument()
    })
  })

  describe('Disabled', () => {
    it('is not disabled', () => {
      render(<Text text='Goku' />)
      const t = screen.getByText('Goku')

      expect(t).toHaveStyle({ color: `${colors.contrast.regular}` })
    })

    it('is not disabled and have color', () => {
      render(<Text text='Goku' color='variant' />)
      const t = screen.getByText('Goku')

      expect(t).toHaveStyle({ color: `${colors.variant.regular}` })
    })

    it('is disabled', () => {
      render(<Text text='Goku' disabled />)
      const t = screen.getByText('Goku')

      expect(t).toHaveAttribute('disabled')
      expect(t).toHaveStyle({ color: `${colors.contrast.disabled}` })
    })

    it('is disabled and have color', () => {
      render(<Text text='Goku' color='variant' disabled />)
      const t = screen.getByText('Goku')

      expect(t).toHaveAttribute('disabled')
      expect(t).toHaveStyle({ color: `${colors.variant.disabled}` })
    })
  })

  describe('Sizes', () => {
    it('xsmall', () => {
      render(<Text text='Goku' size='xsmall' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-size': `${SIZE.XSMALL}` })
    })

    it('small', () => {
      render(<Text text='Goku' size='small' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-size': `${SIZE.SMALL}` })
    })

    it('medium', () => {
      render(<Text text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-size': `${SIZE.MEDIUM}` })
    })

    it('large', () => {
      render(<Text text='Goku' size='large' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-size': `${SIZE.LARGE}` })
    })

    it('xlarge', () => {
      render(<Text text='Goku' size='xlarge' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-size': `${SIZE.XLARGE}` })
    })

    it('xxlarge', () => {
      render(<Text text='Goku' size='xxlarge' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-size': `${SIZE.XXLARGE}` })
    })
  })

  describe('Weight', () => {
    it('xlight', () => {
      render(<Text weight='xlight'>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-weight': `${WEIGHT.XLIGHT}` })
    })

    it('light', () => {
      render(<Text weight='light'>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-weight': `${WEIGHT.LIGHT}` })
    })

    it('regular', () => {
      render(<Text>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-weight': `${WEIGHT.REGULAR}` })
    })

    it('semibold', () => {
      render(<Text weight='semibold'>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-weight': `${WEIGHT.SEMIBOLD}` })
    })

    it('bold', () => {
      render(<Text weight='bold'>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-weight': `${WEIGHT.BOLD}` })
    })

    it('xbold', () => {
      render(<Text weight='xbold'>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'font-weight': `${WEIGHT.XBOLD}` })
    })
  })

  describe('Colors', () => {
    it('contrast', () => {
      render(<Text text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ color: `${colors.contrast.regular}` })
    })

    it('primary', () => {
      render(<Text color='primary' text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ color: `${colors.primary.regular}` })
    })

    it('secondary', () => {
      render(<Text color='secondary' text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ color: `${colors.secondary.regular}` })
    })

    it('variant', () => {
      render(<Text color='variant' text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ color: `${colors.variant.regular}` })
    })

    it('success', () => {
      render(<Text color='success' text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ color: `${colors.success.regular}` })
    })

    it('warning', () => {
      render(<Text color='warning' text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ color: `${colors.warning.regular}` })
    })

    it('error', () => {
      render(<Text color='error' text='Goku' />)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ color: `${colors.error.regular}` })
    })
  })

  describe('Align', () => {
    it('aligns left by default', () => {
      render(<Text>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'text-align': 'left' })
    })

    it('aligns left', () => {
      render(<Text align='left'>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'text-align': 'left' })
    })

    it('aligns right', () => {
      render(<Text align='right'>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'text-align': 'right' })
    })

    it('aligns center', () => {
      render(<Text align='center'>Goku</Text>)
      const t = screen.getByText('Goku')
      expect(t).toHaveStyle({ 'text-align': 'center' })
    })
  })

  describe('Margin Bottom', () => {
    it('has margin bottom 0 if no prop is passed', () => {
      render(<Text>Spiderman</Text>)
      const h = screen.getByText('Spiderman')
      expect(h).toHaveStyle({ 'margin-bottom': '0' })
    })

    it('has margin bottom 8px if one is passed', () => {
      render(<Text marginBottom='one'>Spiderman</Text>)
      const h = screen.getByText('Spiderman')
      expect(h).toHaveStyle({ 'margin-bottom': `${spacing.one}` })
    })

    it('adds a margin bottom to a value that is not valid', () => {
      render(<Text marginBottom='fifty'>Spiderman</Text>)
      const h = screen.getByText('Spiderman')
      expect(h).toHaveStyle({ 'margin-bottom': '0' })
    })
  })
})
