import React from 'react'
import { render, screen } from '@testing-library/react'

import { colors, spacing } from '@global/theme'

import Icon from '../index'

describe('<Icon />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Icon name='face' />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Disabled', () => {
    it('is not disabled', () => {
      render(<Icon name='face' />)
      const i = screen.getByText('face')

      expect(i).toHaveStyle({ color: `${colors.contrast.regular}` })
    })

    it('is not disabled and have color', () => {
      render(<Icon name='face' color='variant' />)
      const i = screen.getByText('face')

      expect(i).toHaveStyle({ color: `${colors.variant.regular}` })
    })

    it('is disabled', () => {
      render(<Icon name='face' disabled />)
      const i = screen.getByText('face')

      expect(i).toHaveAttribute('disabled')
      expect(i).toHaveStyle({ color: `${colors.contrast.disabled}` })
    })

    it('is disabled and have color', () => {
      render(<Icon name='face' color='variant' disabled />)
      const i = screen.getByText('face')

      expect(i).toHaveAttribute('disabled')
      expect(i).toHaveStyle({ color: `${colors.variant.disabled}` })
    })
  })

  describe('Sizes', () => {
    it('is xsmall', () => {
      render(<Icon size='xsmall' name='face' />)
      const i = screen.getByText('face')
      expect(i).toHaveStyle({ 'font-size': `${spacing.oneAndAHalf}` })
      expect(i).toHaveStyle({ width: `${spacing.oneAndAHalf}` })
      expect(i).toHaveStyle({ height: `${spacing.oneAndAHalf}` })
    })

    it('is small', () => {
      render(<Icon size='small' name='face' />)
      const i = screen.getByText('face')
      expect(i).toHaveStyle({ 'font-size': `${spacing.two}` })
      expect(i).toHaveStyle({ width: `${spacing.two}` })
      expect(i).toHaveStyle({ height: `${spacing.two}` })
    })

    it('is medium', () => {
      render(<Icon name='face' />)
      const i = screen.getByText('face')
      expect(i).toHaveStyle({ 'font-size': `${spacing.twoAndAHalf}` })
      expect(i).toHaveStyle({ width: `${spacing.twoAndAHalf}` })
      expect(i).toHaveStyle({ height: `${spacing.twoAndAHalf}` })
    })

    it('is large', () => {
      render(<Icon size='large' name='face' />)
      const i = screen.getByText('face')
      expect(i).toHaveStyle({ 'font-size': `${spacing.three}` })
      expect(i).toHaveStyle({ width: `${spacing.three}` })
      expect(i).toHaveStyle({ height: `${spacing.three}` })
    })

    it('is xlarge', () => {
      render(<Icon size='xlarge' name='face' />)
      const i = screen.getByText('face')
      expect(i).toHaveStyle({ 'font-size': `${spacing.threeAndAHalf}` })
      expect(i).toHaveStyle({ width: `${spacing.threeAndAHalf}` })
      expect(i).toHaveStyle({ height: `${spacing.threeAndAHalf}` })
    })

    it('is xxlarge', () => {
      render(<Icon size='xxlarge' name='face' />)
      const i = screen.getByText('face')
      expect(i).toHaveStyle({ 'font-size': `${spacing.four}` })
      expect(i).toHaveStyle({ width: `${spacing.four}` })
      expect(i).toHaveStyle({ height: `${spacing.four}` })
    })
  })

  describe('Colors', () => {
    it('is contrast', () => {
      render(<Icon name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ color: `${colors.contrast.regular}` })
    })

    it('is primary', () => {
      render(<Icon color='primary' name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ color: `${colors.primary.regular}` })
    })

    it('is variant', () => {
      render(<Icon color='variant' name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ color: `${colors.variant.regular}` })
    })

    it('is secondary', () => {
      render(<Icon color='secondary' name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ color: `${colors.secondary.regular}` })
    })

    it('is success', () => {
      render(<Icon color='success' name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ color: `${colors.success.regular}` })
    })

    it('is errror', () => {
      render(<Icon color='error' name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ color: `${colors.error.regular}` })
    })

    it('is warning', () => {
      render(<Icon color='warning' name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ color: `${colors.warning.regular}` })
    })

    it('is system', () => {
      render(<Icon color='system' name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ color: `${colors.system.regular}` })
    })
  })

  describe('Shape', () => {
    it('does NOT has a circle', () => {
      render(<Icon name='face' />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ 'border-radius': '' })
      expect(icon).toHaveStyle({ 'box-shadow': '' })
    })

    it('has a circle', () => {
      render(<Icon name='face' circle />)
      const icon = screen.getByText('face')
      expect(icon).toHaveStyle({ 'border-radius': '50%' })
      expect(icon).toHaveStyle({ 'box-shadow': '0 0 0 3px #3C3C3C' })
    })
  })
})
