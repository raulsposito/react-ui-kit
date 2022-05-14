import React from 'react'
import { render, screen } from '@testing-library/react'

import { getComponent } from '@utils/test'

import { SIZE, WEIGHT } from '@global/fonts'
import { colors, spacing } from '@global/theme'

import Heading from '..'
import { H1, H2, H3, H4, H5, H6 } from '../styles'

describe('<Heading />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Heading text='Goku' />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Children & text', () => {
    it('has children', () => {
      render(<Heading>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toBeInTheDocument()
    })
    it('has prop text', () => {
      render(<Heading text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toBeInTheDocument()
    })
  })

  describe('Disabled', () => {
    it('is not disabled', () => {
      render(<Heading text='Goku' />)
      const h = screen.getByText('Goku')

      expect(h).toHaveStyle({ color: `${colors.contrast.regular}` })
    })

    it('is not disabled and have color', () => {
      render(<Heading text='Goku' color='variant' />)
      const h = screen.getByText('Goku')

      expect(h).toHaveStyle({ color: `${colors.variant.regular}` })
    })

    it('is disabled', () => {
      render(<Heading text='Goku' disabled />)
      const h = screen.getByText('Goku')

      expect(h).toHaveAttribute('disabled')
      expect(h).toHaveStyle({ color: `${colors.contrast.disabled}` })
    })

    it('is disabled and have color', () => {
      render(<Heading text='Goku' color='variant' disabled />)
      const h = screen.getByText('Goku')

      expect(h).toHaveAttribute('disabled')
      expect(h).toHaveStyle({ color: `${colors.variant.disabled}` })
    })
  })

  describe('Types', () => {
    it('should be a h1', () => {
      render(<Heading text='Goku' />)
      const h = getComponent(H1)
      expect(h).toBeInTheDocument()
    })

    it('should be a h2', () => {
      render(<Heading text='Goku' type='h2' />)
      const h = getComponent(H2)
      expect(h).toBeInTheDocument()
    })

    it('should be a h1', () => {
      render(<Heading text='Goku' type='h3' />)
      const h = getComponent(H3)
      expect(h).toBeInTheDocument()
    })

    it('should be a h1', () => {
      render(<Heading text='Goku' type='h4' />)
      const h = getComponent(H4)
      expect(h).toBeInTheDocument()
    })

    it('should be a h1', () => {
      render(<Heading text='Goku' type='h5' />)
      const h = getComponent(H5)
      expect(h).toBeInTheDocument()
    })

    it('should be a h6', () => {
      render(<Heading text='Goku' type='h6' />)
      const h = getComponent(H6)
      expect(h).toBeInTheDocument()
    })
  })

  describe('Sizes', () => {
    it('xsmall', () => {
      render(<Heading text='Goku' size='xsmall' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-size': `${SIZE.XLARGE}` })
    })

    it('small', () => {
      render(<Heading text='Goku' size='small' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-size': `${SIZE.XXLARGE}` })
    })

    it('medium', () => {
      render(<Heading text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-size': `${SIZE.H_MEDIUM}` })
    })

    it('large', () => {
      render(<Heading text='Goku' size='large' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-size': `${SIZE.H_LARGE}` })
    })

    it('xlarge', () => {
      render(<Heading text='Goku' size='xlarge' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-size': `${SIZE.H_XLARGE}` })
    })
  })

  describe('Weight', () => {
    it('xlight', () => {
      render(<Heading weight='xlight'>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-weight': `${WEIGHT.XLIGHT}` })
    })

    it('light', () => {
      render(<Heading weight='light'>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-weight': `${WEIGHT.LIGHT}` })
    })

    it('regular', () => {
      render(<Heading>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-weight': `${WEIGHT.REGULAR}` })
    })

    it('semibold', () => {
      render(<Heading weight='semibold'>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-weight': `${WEIGHT.SEMIBOLD}` })
    })

    it('bold', () => {
      render(<Heading weight='bold'>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-weight': `${WEIGHT.BOLD}` })
    })

    it('xbold', () => {
      render(<Heading weight='xbold'>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'font-weight': `${WEIGHT.XBOLD}` })
    })
  })

  describe('Colors', () => {
    it('contrast', () => {
      render(<Heading text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ color: `${colors.contrast.regular}` })
    })

    it('primary', () => {
      render(<Heading color='primary' text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ color: `${colors.primary.regular}` })
    })

    it('secondary', () => {
      render(<Heading color='secondary' text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ color: `${colors.secondary.regular}` })
    })

    it('variant', () => {
      render(<Heading color='variant' text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ color: `${colors.variant.regular}` })
    })

    it('success', () => {
      render(<Heading color='success' text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ color: `${colors.success.regular}` })
    })

    it('warning', () => {
      render(<Heading color='warning' text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ color: `${colors.warning.regular}` })
    })

    it('error', () => {
      render(<Heading color='error' text='Goku' />)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ color: `${colors.error.regular}` })
    })
  })

  describe('Align', () => {
    it('aligns left by default', () => {
      render(<Heading>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'text-align': 'left' })
    })

    it('aligns left', () => {
      render(<Heading align='left'>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'text-align': 'left' })
    })

    it('aligns right', () => {
      render(<Heading align='right'>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'text-align': 'right' })
    })

    it('aligns center', () => {
      render(<Heading align='center'>Goku</Heading>)
      const h = screen.getByText('Goku')
      expect(h).toHaveStyle({ 'text-align': 'center' })
    })
  })

  describe('Margin Bottom', () => {
    it('has margin bottom 0 if no prop is passed', () => {
      render(<Heading>Spiderman</Heading>)
      const h = screen.getByText('Spiderman')
      expect(h).toHaveStyle({ 'margin-bottom': '0' })
    })

    it('has margin bottom 8px if one is passed', () => {
      render(<Heading marginBottom='one'>Spiderman</Heading>)
      const h = screen.getByText('Spiderman')
      expect(h).toHaveStyle({ 'margin-bottom': `${spacing.one}` })
    })

    it('adds a margin bottom to a value that is not valid', () => {
      render(<Heading marginBottom='fifty'>Spiderman</Heading>)
      const h = screen.getByText('Spiderman')
      expect(h).toHaveStyle({ 'margin-bottom': '0' })
    })
  })
})
