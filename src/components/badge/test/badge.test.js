import React from 'react'
import { render, screen } from '@testing-library/react'

import { colors, spacing } from '@global/theme'

import { getComponent } from '@utils/test'

import { Text } from '@components/texts'
import Icon from '@components/icon'

import Badge from '..'

describe('<Badge />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Badge text='Luke Skywalker' />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Text and Icon', () => {
    it('has only text', () => {
      render(<Badge text='Luke Skywalker' />)
      const t = screen.queryByText('Luke Skywalker')
      const i = getComponent(Icon)

      expect(t).toBeInTheDocument()
      expect(i).toBeUndefined()
    })

    it('has only icon', () => {
      render(<Badge icon='view_in_ar' />)
      const t = getComponent(Text)
      const i = screen.queryByText('view_in_ar')

      expect(t).toBeUndefined()
      expect(i).toBeInTheDocument()
    })

    it('has both', () => {
      const { container } = render(<Badge text='Luke Skywalker' icon='view_in_ar' />)
      const t = screen.getByText('Luke Skywalker')
      const i = screen.getByText('view_in_ar')

      expect(t).toBeInTheDocument()
      expect(i).toBeInTheDocument()

      const { childNodes } = container.firstChild
      expect(childNodes[0].textContent).toEqual('Luke Skywalker')
      expect(childNodes[1].textContent).toEqual('view_in_ar')
    })

    it('has both in reverse order', () => {
      const { container } = render(<Badge text='Luke Skywalker' icon='view_in_ar' reverse />)
      const t = screen.getByText('Luke Skywalker')
      const i = screen.getByText('view_in_ar')

      expect(t).toBeInTheDocument()
      expect(i).toBeInTheDocument()

      const { childNodes } = container.firstChild
      expect(childNodes[0].textContent).toEqual('view_in_ar')
      expect(childNodes[1].textContent).toEqual('Luke Skywalker')
    })
  })

  describe('Size', () => {
    it('is medium by default', () => {
      render(<Badge text='Skywalker' />)
      const b = screen.getByText('Skywalker').parentElement
      expect(b).toHaveStyle({ padding: `${spacing.one} ${spacing.oneAndAHalf}` })
    })

    it('is small', () => {
      render(<Badge text='Skywalker' size='small' />)
      const b = screen.getByText('Skywalker').parentElement
      expect(b).toHaveStyle({ padding: `${spacing.half}` })
    })

    it('is medium', () => {
      render(<Badge text='Skywalker' size='medium' />)
      const b = screen.getByText('Skywalker').parentElement
      expect(b).toHaveStyle({ padding: `${spacing.one} ${spacing.oneAndAHalf}` })
    })

    it('is large', () => {
      render(<Badge text='Skywalker' size='large' />)
      const b = screen.getByText('Skywalker').parentElement
      expect(b).toHaveStyle({ padding: `${spacing.oneAndAQuarter} ${spacing.two}` })
    })
  })

  describe('Colors & Types', () => {
    describe('Solid', () => {
      describe('Regular colors', () => {
        it('is primary by default', () => {
          render(<Badge text='Skywalker' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.primary.regular}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is primary', () => {
          render(<Badge text='Skywalker' color='primary' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.primary.regular}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is secondary', () => {
          render(<Badge text='Skywalker' color='secondary' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.secondary.regular}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is variant', () => {
          render(<Badge text='Skywalker' color='variant' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.variant.regular}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is success', () => {
          render(<Badge text='Skywalker' color='success' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.success.regular}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is warning', () => {
          render(<Badge text='Skywalker' color='warning' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.warning.regular}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is error', () => {
          render(<Badge text='Skywalker' color='error' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.error.regular}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is system', () => {
          render(<Badge text='Skywalker' color='system' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.system.regular}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })
      })

      describe('Event colors', () => {
        it('is inprogress', () => {
          render(<Badge text='Skywalker' color='inprogress' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.events.inprogress}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is next', () => {
          render(<Badge text='Skywalker' color='next' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.events.next}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is finished', () => {
          render(<Badge text='Skywalker' color='finished' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.events.finished}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is suspended', () => {
          render(<Badge text='Skywalker' color='suspended' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.events.suspended}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is cancelled', () => {
          render(<Badge text='Skywalker' color='cancelled' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.events.cancelled}` })
          expect(t).toHaveStyle({ color: `${colors.background.regular}` })
        })

        it('is white', () => {
          render(<Badge text='Skywalker' color='white' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ 'background-color': `${colors.events.white}` })
          expect(t).toHaveStyle({ color: `${colors.contrast.regular}` })
        })
      })
    })

    describe('Line', () => {
      describe('Regular colors', () => {
        it('is primary by default', () => {
          render(<Badge text='Skywalker' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.primary.regular}` })
          expect(t).toHaveStyle({ color: `${colors.primary.regular}` })
        })

        it('is primary', () => {
          render(<Badge text='Skywalker' color='primary' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.primary.regular}` })
          expect(t).toHaveStyle({ color: `${colors.primary.regular}` })
        })

        it('is secondary', () => {
          render(<Badge text='Skywalker' color='secondary' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.secondary.regular}` })
          expect(t).toHaveStyle({ color: `${colors.secondary.regular}` })
        })

        it('is variant', () => {
          render(<Badge text='Skywalker' color='variant' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.variant.regular}` })
          expect(t).toHaveStyle({ color: `${colors.variant.regular}` })
        })

        it('is success', () => {
          render(<Badge text='Skywalker' color='success' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.success.regular}` })
          expect(t).toHaveStyle({ color: `${colors.success.regular}` })
        })

        it('is warning', () => {
          render(<Badge text='Skywalker' color='warning' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.warning.regular}` })
          expect(t).toHaveStyle({ color: `${colors.warning.regular}` })
        })

        it('is error', () => {
          render(<Badge text='Skywalker' color='error' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.error.regular}` })
          expect(t).toHaveStyle({ color: `${colors.error.regular}` })
        })

        it('is system', () => {
          render(<Badge text='Skywalker' color='system' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.system.regular}` })
          expect(t).toHaveStyle({ color: `${colors.system.regular}` })
        })
      })

      describe('Event colors', () => {
        it('is inprogress', () => {
          render(<Badge text='Skywalker' color='inprogress' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.events.inprogress}` })
          expect(t).toHaveStyle({ color: `${colors.events.inprogress}` })
        })

        it('is next', () => {
          render(<Badge text='Skywalker' color='next' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.events.next}` })
          expect(t).toHaveStyle({ color: `${colors.events.next}` })
        })

        it('is finished', () => {
          render(<Badge text='Skywalker' color='finished' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.events.finished}` })
          expect(t).toHaveStyle({ color: `${colors.events.finished}` })
        })

        it('is suspended', () => {
          render(<Badge text='Skywalker' color='suspended' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.events.suspended}` })
          expect(t).toHaveStyle({ color: `${colors.events.suspended}` })
        })

        it('is cancelled', () => {
          render(<Badge text='Skywalker' color='cancelled' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.events.cancelled}` })
          expect(t).toHaveStyle({ color: `${colors.events.cancelled}` })
        })

        it('is white', () => {
          render(<Badge text='Skywalker' color='white' type='line' />)
          const t = screen.getByText('Skywalker')
          const b = t.parentElement
          expect(b).toHaveStyle({ border: `2px solid ${colors.events.white}` })
          expect(t).toHaveStyle({ color: `${colors.events.white}` })
        })
      })
    })
  })
})
