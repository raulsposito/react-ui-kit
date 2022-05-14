import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { colors, spacing } from '@global/theme'
import { getComponent } from '@utils/test'

import { Text } from '@components/texts'
import Icon from '@components/icon'
import { SolidButton } from '..'

const mockData = {
  text: 'help',
  icon: 'face',
  onClick: jest.fn()
}

describe('<SolidButton />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<SolidButton onClick={mockData.onClick} text={mockData.text} />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Text and Icon', () => {
    it('has only text', () => {
      render(<SolidButton onClick={mockData.onClick} text={mockData.text} />)
      const t = screen.queryByText(mockData.text)
      const i = getComponent(Icon)

      expect(t).toBeInTheDocument()
      expect(i).toBeUndefined()
    })

    it('has only icon', () => {
      render(<SolidButton onClick={mockData.onClick} icon={mockData.icon} />)
      const t = getComponent(Text)
      const i = screen.queryByText(mockData.icon)

      expect(t).toBeUndefined()
      expect(i).toBeInTheDocument()
    })

    it('has both', () => {
      const { container } = render(
        <SolidButton onClick={mockData.onClick} text={mockData.text} icon={mockData.icon} />
      )
      const t = screen.queryByText(mockData.text)
      const i = screen.queryByText(mockData.icon)

      expect(t).toBeInTheDocument()
      expect(i).toBeInTheDocument()

      const { childNodes } = container.firstChild
      expect(childNodes[0].textContent).toEqual(mockData.text)
      expect(childNodes[1].textContent).toEqual(mockData.icon)
    })

    it('has both in reverse order', () => {
      render(<SolidButton onClick={mockData.onClick} text={mockData.text} icon={mockData.icon} reverse />)
      const b = screen.getByRole('button')
      expect(b).toHaveStyle({ 'flex-direction': 'row-reverse' })
    })
  })

  describe('Sizes', () => {
    it('has small size', () => {
      render(<SolidButton onClick={mockData.onClick} size='small' text={mockData.text} />)

      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ height: `${spacing.threeAndAHalf}` })
      expect(button).toHaveStyle({ padding: `${spacing.threeQuarters} ${spacing.oneAndAHalf}` })
    })

    it('has medium size', () => {
      render(<SolidButton onClick={mockData.onClick} size='medium' text={mockData.text} />)

      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ height: `${spacing.five}` })
      expect(button).toHaveStyle({ padding: `${spacing.one} ${spacing.two}` })
    })

    it('has large size', () => {
      render(<SolidButton onClick={mockData.onClick} size='large' text={mockData.text} />)

      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ height: `${spacing.fiveAndAHalf}` })
      expect(button).toHaveStyle({ padding: `${spacing.oneAndAHalf} ${spacing.twoAndAHalf}` })
    })
  })

  describe('Block', () => {
    it('has width 100%', () => {
      render(<SolidButton onClick={mockData.onClick} block text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ width: '100%' })
    })

    it('is not a block', () => {
      render(<SolidButton onClick={mockData.onClick} text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ width: 'max-content' })
    })
  })

  describe('Disabled', () => {
    it('is disabled', () => {
      render(<SolidButton onClick={mockData.onClick} disabled text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('disabled')
      expect(button).toHaveStyle({
        cursor: 'inherit',
        'background-color': `${colors.primary.disabled}`
      })
    })

    it('is not disabled', () => {
      render(<SolidButton onClick={mockData.onClick} text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).not.toHaveAttribute('disabled')
    })
  })

  describe('Fixed width', () => {
    describe('small', () => {
      it('does not has a fix width', () => {
        render(<SolidButton onClick={mockData.onClick} size='small' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': '' })
      })

      it('has fixed width', () => {
        render(<SolidButton onClick={mockData.onClick} fixWidth size='small' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': `${spacing.eight}` })
      })
    })

    describe('medium', () => {
      it('does not has a fix width', () => {
        render(<SolidButton onClick={mockData.onClick} />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': '' })
      })

      it('has fixed width', () => {
        render(<SolidButton onClick={mockData.onClick} fixWidth size='medium' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': `${spacing.eleven}` })
      })
    })

    describe('large', () => {
      it('does not has a fix width', () => {
        render(<SolidButton onClick={mockData.onClick} size='large' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': '' })
      })

      it('has fixed width', () => {
        render(<SolidButton onClick={mockData.onClick} fixWidth size='large' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': `${spacing.fifteen}` })
      })
    })
  })

  describe('Colors', () => {
    it('has no color', () => {
      render(<SolidButton onClick={mockData.onClick} text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ 'background-color': `${colors.primary.regular}` })
    })
    it('is primary', () => {
      render(<SolidButton onClick={mockData.onClick} color='primary' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ 'background-color': `${colors.primary.regular}` })
    })

    it('is variant', () => {
      render(<SolidButton onClick={mockData.onClick} color='variant' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ 'background-color': `${colors.variant.regular}` })
    })

    it('is secondary', () => {
      render(<SolidButton onClick={mockData.onClick} color='secondary' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ 'background-color': `${colors.secondary.regular}` })
    })

    it('is success', () => {
      render(<SolidButton onClick={mockData.onClick} color='success' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ 'background-color': `${colors.success.regular}` })
    })

    it('is error', () => {
      render(<SolidButton onClick={mockData.onClick} color='error' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ 'background-color': `${colors.error.regular}` })
    })

    it('is system', () => {
      render(<SolidButton onClick={mockData.onClick} color='system' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ 'background-color': `${colors.system.regular}` })
    })
  })

  describe('Mouse events', () => {
    it('calls function on click', () => {
      render(<SolidButton onClick={mockData.onClick} />)

      const button = screen.getByRole('button')
      userEvent.click(button)
      expect(mockData.onClick).toHaveBeenCalledTimes(1)
    })
  })
})
