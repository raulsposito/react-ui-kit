/* eslint-disable */
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { colors, spacing } from '@global/theme'

import Pagination from '..'

const mock = {
  pages: 13,
  amount: 7,
  goToPage: jest.fn(),
  selected: 3,
  showStartAndEnd: true,
  showBackAndNext: true
}

describe('<Pagination />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Pagination {...mock} />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('actions', () => {
    describe('arrows', () => {
      it('FIRST -> goes to first element', () => {
        render(<Pagination {...mock} />)
        const toStart = screen.getAllByRole('button')[0]
        userEvent.click(toStart)
        expect(mock.goToPage).toHaveBeenCalledWith(0)
      })

      it('PREVIOUS -> goes to previeous if not first', () => {
        render(<Pagination {...mock} />)
        const prev = screen.getAllByRole('button')[1]
        userEvent.click(prev)
        expect(mock.goToPage).toHaveBeenCalledWith(mock.selected - 1)
      })

      it('LAST -> goes to last element', () => {
        render(<Pagination {...mock} />)
        const [toEnd] = screen.getAllByRole('button').slice(-1)
        userEvent.click(toEnd)
        expect(mock.goToPage).toHaveBeenCalledWith(mock.pages - 1)
      })

      it('NEXT -> goes to next if not last', () => {
        render(<Pagination {...mock} />)
        const [next] = screen.getAllByRole('button').slice(-2)
        userEvent.click(next)
        expect(mock.goToPage).toHaveBeenCalledWith(mock.selected + 1)
      })
    })

    it('goes to page when clicked on the number', () => {
      render(<Pagination {...mock} selected={6} />)
      const num = screen.getAllByRole('button')[4]
      userEvent.click(num)
      expect(mock.goToPage).toHaveBeenCalledWith(5)
    })
  })

  describe('renders arrows', () => {
    it('has first and last arrows', () => {
      render(<Pagination {...mock} />)
      expect(screen.queryByText('first_page')).toBeInTheDocument()
      expect(screen.queryByText('last_page')).toBeInTheDocument()
    })

    it('does not has first and last arrows', () => {
      render(<Pagination {...mock} showStartAndEnd={false} />)
      expect(screen.queryByText('first_page')).not.toBeInTheDocument()
      expect(screen.queryByText('last_page')).not.toBeInTheDocument()
    })

    it('has back and next arrows', () => {
      render(<Pagination {...mock} />)
      expect(screen.queryByText('chevron_left')).toBeInTheDocument()
      expect(screen.queryByText('chevron_right')).toBeInTheDocument()
    })

    it('does not has back and next arrows', () => {
      render(<Pagination {...mock} showBackAndNext={false} />)
      expect(screen.queryByText('chevron_left')).not.toBeInTheDocument()
      expect(screen.queryByText('chevron_right')).not.toBeInTheDocument()
    })
  })

  describe('renders numbers and elipsis', () => {
    it('has less pages than amount', () => {
      render(<Pagination {...mock} pages={5} />)
      expect(screen.queryByTestId('more_horiz')).not.toBeInTheDocument()
    })

    describe('more pages than amount', () => {
      it('shows elipsis at the end', () => {
        render(<Pagination {...mock} />)
        const ellipsis = screen.queryAllByText('more_horiz')
        expect(ellipsis.length).toEqual(1)

        const [ellipse] = screen.queryAllByRole('button').slice(-4)
        expect(ellipse.textContent).toEqual('more_horiz')
      })

      it('shows elipsis at the start', () => {
        render(<Pagination {...mock} selected={12} />)
        const ellipsis = screen.queryAllByText('more_horiz')
        expect(ellipsis.length).toEqual(1)

        const ellipse = screen.queryAllByRole('button')[3]
        expect(ellipse.textContent).toEqual('more_horiz')
      })

      it('shows elipsis at both sides', () => {
        render(<Pagination {...mock} selected={7} />)
        const ellipsis = screen.queryAllByText('more_horiz')
        expect(ellipsis.length).toEqual(2)

        const buttons = screen.queryAllByRole('button')
        expect(buttons[3].textContent).toEqual('more_horiz')
        expect(buttons[7].textContent).toEqual('more_horiz')
      })
    })
  })

  describe('size', () => {
    it('has default size', () => {
      render(<Pagination {...mock} />)
      const buttons = screen.queryAllByRole('button')
      buttons.forEach(btn => {
        expect(btn).toHaveStyle({
          width: `${spacing.fourAndAHalf}`,
          height: `${spacing.fourAndAHalf}`
        })
      })
    })

    it('has default small', () => {
      render(<Pagination {...mock} size='small' />)
      const buttons = screen.queryAllByRole('button')
      buttons.forEach(btn => {
        expect(btn).toHaveStyle({
          width: `${spacing.threeAndAHalf}`,
          height: `${spacing.threeAndAHalf}`
        })
      })
    })

    it('has default medium', () => {
      render(<Pagination {...mock} size='medium' />)
      const buttons = screen.queryAllByRole('button')
      buttons.forEach(btn => {
        expect(btn).toHaveStyle({
          width: `${spacing.fourAndAHalf}`,
          height: `${spacing.fourAndAHalf}`
        })
      })
    })

    it('has default large', () => {
      render(<Pagination {...mock} size='large' />)
      const buttons = screen.queryAllByRole('button')
      buttons.forEach(btn => {
        expect(btn).toHaveStyle({
          width: `${spacing.five}`,
          height: `${spacing.five}`
        })
      })
    })
  })

  describe('color', () => {
    it('has default background color', () => {
      render(<Pagination {...mock} />)
      const btn = screen.queryByText(`${mock.selected + 1}`).parentNode
      expect(btn).toHaveStyle({ 'background-color': `${colors.primary.selected}` })
    })

    it('has background color', () => {
      render(<Pagination {...mock} color='variant' />)
      const btn = screen.queryByText(`${mock.selected + 1}`).parentNode
      expect(btn).toHaveStyle({ 'background-color': `${colors.variant.selected}` })
    })
  })

  describe('disabled', () => {
    it('does not call goToPage', () => {
      render(<Pagination {...mock} disabled />)
      const btn = screen.queryAllByRole('button')[0]
      userEvent.click(btn)
      expect(mock.goToPage).not.toHaveBeenCalled()
    })

    it('has disabled color', () => {
      render(<Pagination {...mock} disabled />)
      const arrow = screen.queryByText('first_page')
      expect(arrow).toHaveStyle({color: `${colors.system.disabled}`})

      const one = screen.queryByText('1')
      expect(one).toHaveStyle({color: `${colors.system.disabled}`})
    })
  })
})