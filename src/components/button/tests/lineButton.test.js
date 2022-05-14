import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { colors, spacing } from '@global/theme'
import { getComponent } from '@utils/test'

import { Text } from '@components/texts'
import Icon from '@components/icon'
import { LineButton } from '..'

const mockData = {
  text: 'help',
  icon: 'face',
  onClick: jest.fn()
}

describe('<LineButton />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<LineButton onClick={mockData.onClick} text={mockData.text} />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Text and Icon', () => {
    it('has only text', () => {
      render(<LineButton onClick={mockData.onClick} text={mockData.text} />)
      const t = screen.queryByText(mockData.text)
      const i = getComponent(Icon)

      expect(t).toBeInTheDocument()
      expect(i).toBeUndefined()
    })

    it('has only icon', () => {
      render(<LineButton onClick={mockData.onClick} icon={mockData.icon} />)
      const t = getComponent(Text)
      const i = screen.queryByText(mockData.icon)

      expect(t).toBeUndefined()
      expect(i).toBeInTheDocument()
    })

    it('has both', () => {
      const { container } = render(
        <LineButton onClick={mockData.onClick} text={mockData.text} icon={mockData.icon} />
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
      render(<LineButton onClick={mockData.onClick} text={mockData.text} icon={mockData.icon} reverse />)
      const b = screen.getByRole('button')
      expect(b).toHaveStyle({ 'flex-direction': 'row-reverse' })
    })
  })

  describe('Sizes', () => {
    it('has small size', () => {
      render(<LineButton onClick={mockData.onClick} size='small' text={mockData.text} />)

      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ height: `${spacing.threeAndAHalf}` })
      expect(button).toHaveStyle({ padding: `${spacing.threeQuarters} ${spacing.oneAndAHalf}` })
    })

    it('has medium size', () => {
      render(<LineButton onClick={mockData.onClick} size='medium' text={mockData.text} />)

      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ height: `${spacing.five}` })
      expect(button).toHaveStyle({ padding: `${spacing.one} ${spacing.two}` })
    })

    it('has large size', () => {
      render(<LineButton onClick={mockData.onClick} size='large' text={mockData.text} />)

      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ height: `${spacing.fiveAndAHalf}` })
      expect(button).toHaveStyle({ padding: `${spacing.oneAndAHalf} ${spacing.twoAndAHalf}` })
    })
  })

  describe('Block', () => {
    it('has width 100%', () => {
      render(<LineButton onClick={mockData.onClick} block text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ width: '100%' })
    })

    it('is not a block', () => {
      render(<LineButton onClick={mockData.onClick} text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ width: 'max-content' })
    })
  })

  describe('Disabled', () => {
    it('is disabled', () => {
      render(<LineButton onClick={mockData.onClick} disabled text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('disabled')
      expect(button).toHaveStyle({
        cursor: 'inherit',
        'background-color': `${colors.background.disabled}`,
        'border-color': `${colors.primary.disabled}`
      })
    })

    it('is not disabled', () => {
      render(<LineButton onClick={mockData.onClick} text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).not.toHaveAttribute('disabled')
    })
  })

  describe('Fixed width', () => {
    describe('small', () => {
      it('does not has a fix width', () => {
        render(<LineButton onClick={mockData.onClick} size='small' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': '' })
      })

      it('has fixed width', () => {
        render(<LineButton onClick={mockData.onClick} fixWidth size='small' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': `${spacing.eight}` })
      })
    })

    describe('medium', () => {
      it('does not has a fix width', () => {
        render(<LineButton onClick={mockData.onClick} />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': '' })
      })

      it('has fixed width', () => {
        render(<LineButton onClick={mockData.onClick} fixWidth size='medium' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': `${spacing.eleven}` })
      })
    })

    describe('large', () => {
      it('does not has a fix width', () => {
        render(<LineButton onClick={mockData.onClick} size='large' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': '' })
      })

      it('has fixed width', () => {
        render(<LineButton onClick={mockData.onClick} fixWidth size='large' />)
        const button = screen.getByRole('button')
        expect(button).toHaveStyle({ 'min-width': `${spacing.fifteen}` })
      })
    })
  })

  describe('Colors', () => {
    it('has default color', () => {
      render(<LineButton onClick={mockData.onClick} text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ border: `2px solid ${colors.primary.regular}` })

      const t = screen.getByText(mockData.text)
      expect(t).toHaveStyle({ color: `${colors.primary.regular}` })
    })
    it('is primary', () => {
      render(<LineButton onClick={mockData.onClick} color='primary' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ border: `2px solid ${colors.primary.regular}` })

      const t = screen.getByText(mockData.text)
      expect(t).toHaveStyle({ color: `${colors.primary.regular}` })
    })

    it('is variant', () => {
      render(<LineButton onClick={mockData.onClick} color='variant' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ border: `2px solid ${colors.variant.regular}` })

      const t = screen.getByText(mockData.text)
      expect(t).toHaveStyle({ color: `${colors.variant.regular}` })
    })

    it('is secondary', () => {
      render(<LineButton onClick={mockData.onClick} color='secondary' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ border: `2px solid ${colors.secondary.regular}` })

      const t = screen.getByText(mockData.text)
      expect(t).toHaveStyle({ color: `${colors.secondary.regular}` })
    })

    it('is success', () => {
      render(<LineButton onClick={mockData.onClick} color='success' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ border: `2px solid ${colors.success.regular}` })

      const t = screen.getByText(mockData.text)
      expect(t).toHaveStyle({ color: `${colors.success.regular}` })
    })

    it('is error', () => {
      render(<LineButton onClick={mockData.onClick} color='error' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ border: `2px solid ${colors.error.regular}` })

      const t = screen.getByText(mockData.text)
      expect(t).toHaveStyle({ color: `${colors.error.regular}` })
    })

    it('is system', () => {
      render(<LineButton onClick={mockData.onClick} color='system' text={mockData.text} />)
      const button = screen.getByRole('button')
      expect(button).toHaveStyle({ border: `2px solid ${colors.system.regular}` })

      const t = screen.getByText(mockData.text)
      expect(t).toHaveStyle({ color: `${colors.system.regular}` })
    })
  })

  describe('Mouse events', () => {
    it('calls function on click', () => {
      render(<LineButton onClick={mockData.onClick} />)
      const button = screen.getByRole('button')

      userEvent.click(button)
      expect(mockData.onClick).toHaveBeenCalledTimes(1)
    })
  })
})
