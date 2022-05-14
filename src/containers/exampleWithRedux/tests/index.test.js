import React from 'react'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'

import Provider from '@redux/utils/provider'
import { getComponent, getComponents } from '@utils/test'
import { colors } from '@global/theme'

import { ReduxExample } from '..'
import { Button, Input, Modal } from '../styles'

const mock = 'minga'

describe('<ReduxExample />', () => {
  beforeEach(() => {
    render(
      <Provider>
        <ReduxExample />
      </Provider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('should match snapshot', () => {
    expect(screen.firstChild).toMatchSnapshot()
  })

  it('is as it should on startup', () => {
    const button = getComponent(Button, 1)
    expect(button).toHaveAttribute('disabled')
    const input = getComponent(Input)
    expect(input).toHaveValue('')
    const modal = getComponent(Modal)
    expect(modal).toBeFalsy()
  })

  describe('with input value', () => {
    let input

    beforeEach(() => {
      input = getComponent(Input)
      fireEvent.change(input, { target: { value: mock } })
    })

    it('handles onChange in the input', () => {
      expect(input).toHaveValue(mock)

      const valText = screen.getByText(mock)
      expect(valText).toBeInTheDocument()
    })

    it('clear text with button', () => {
      const button = screen.getByText('Clear')
      fireEvent.click(button)

      expect(input).toHaveValue('')
    })

    it('has text on modal', () => {
      const openButton = screen.getByText('Show modal')
      fireEvent.click(openButton)

      const modal = getComponent(Modal)
      expect(modal).toBeInTheDocument()

      const text = screen.getAllByText(mock).pop()
      expect(modal).toContainElement(text)
    })

    it('has a closing modal', () => {
      const openButton = screen.getByText('Show modal')
      fireEvent.click(openButton)

      const closeButton = screen.getByText('Close modal')
      fireEvent.click(closeButton)

      const modal = getComponent(Modal)
      expect(modal).toBeFalsy()
    })
  })

  describe('styles', () => {
    it('has correct colors', () => {
      setTimeout(() => {
        const buttons = getComponents(Button)

        const open = buttons[0]
        const clear = buttons[1]

        expect(open).toHaveStyle({ 'background-color': `${colors.primary.regular}` })
        expect(clear).toHaveStyle({ 'background-color': `${colors.danger.regular}` })
      }, 0)
    })
  })
})
