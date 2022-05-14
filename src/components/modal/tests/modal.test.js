import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Modal from '@components/modal/index'

const close = jest.fn()
const isShowing = true

const mock = {
  close,
  isShowing
}

describe('<Modal />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Modal {...mock} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders nothing if not showing', () => {
    render(<Modal close={close} isShowing={false} />)
    expect(screen.queryByRole('dialog')).toBeFalsy()
  })

  it('renders nothing if its showing', () => {
    render(<Modal {...mock} />)
    expect(screen.queryByRole('dialog')).toBeInTheDocument()
  })

  describe('Exit', () => {
    it('closes when clicked outside', () => {
      render(<Modal {...mock} />)
      const overlay = screen.queryByRole('dialog')
      userEvent.click(overlay)
      expect(close).toHaveBeenCalled()
    })

    it('closes when the X is clicked', () => {
      render(<Modal {...mock} />)
      const cbtn = screen.queryByText('close')
      expect(cbtn).toBeInTheDocument()
      userEvent.click(cbtn)
      expect(close).toHaveBeenCalled()
    })
  })

  describe('Content', () => {
    const child = (
      <div>
        <h1>Something</h1>
        <p>other thing</p>
      </div>
    )
    const content = {
      title: 'title',
      text: 'text',
      icon: { name: 'settings', color: 'system', size: 'xxlarge' },
      actions: [
        { text: 'OK', onClick: jest.fn() },
        { text: 'NO', onClick: jest.fn() }
      ]
    }

    it('renders children if it has any', () => {
      render(
        <Modal {...mock} {...content}>
          {child}
        </Modal>
      )

      const title = screen.queryByText(content.title)
      expect(title).not.toBeInTheDocument()
      const rc = screen.queryByText('Something').parentElement
      expect(rc).toBeInTheDocument()
    })

    it('renders base content when there  are no children', () => {
      render(<Modal {...mock} {...content} />)
      expect(screen.queryByText(content.title)).toBeInTheDocument()
      expect(screen.queryByText(content.text)).toBeInTheDocument()
      expect(screen.queryByText(content.icon.name)).toBeInTheDocument()

      const buttons = screen.queryAllByRole('button')
      expect(buttons.length).toEqual(content.actions.length + 1)
    })

    it('has buttons that call the correct function', () => {
      render(<Modal {...mock} {...content} />)
      const actions = screen.queryAllByRole('button').slice(1)
      expect(actions.length).toEqual(content.actions.length)

      actions.forEach((action, i) => {
        expect(action.textContent).toEqual(content.actions[i].text)
        userEvent.click(action)
        expect(content.actions[i].onClick).toHaveBeenCalled()
      })
    })
  })
})
