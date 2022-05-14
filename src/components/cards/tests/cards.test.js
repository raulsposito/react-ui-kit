import React from 'react'
import { render, screen } from '@testing-library/react'

import { getComponent } from '@utils/test'

import Card from '..'
import {
  MyCard,
  BadgeContainer,
  MultiButtonContainer,
  SingleButtonContainer
} from '../styles'

const mock = {
  overline: 'overline',
  title: 'title',
  content: 'content',
  actions: [],
  badges: [],
  type: 'horizontal'
}

describe('<Card />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Card {...mock} />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Badges', () => {
    it('renders 0 badges', () => {
      render(<Card {...mock} />)
      const bs = getComponent(BadgeContainer)
      expect(bs.children.length).toEqual(0)
    })
    it('renders 1 badge', () => {
      const badges = [{ text: 'b1' }]
      render(<Card {...mock} badges={badges} />)
      const bc = getComponent(BadgeContainer)
      const bg = bc.children
      expect(bg.length).toEqual(badges.length)

      for (let i = 0; i < bg.length; i++) {
        expect(bg[i].textContent).toEqual(badges[i].text)
      }
    })

    it('renders more than 1 badge', () => {
      const badges = [
        { text: 'b1' },
        { text: 'b2' },
        { text: 'b3' },
        { text: 'b4' }
      ]
      render(<Card {...mock} badges={badges} />)
      const bc = getComponent(BadgeContainer)
      const bg = bc.children
      expect(bg.length).toEqual(badges.length)

      for (let i = 0; i < bg.length; i++) {
        expect(bg[i].textContent).toEqual(badges[i].text)
      }
    })
  })

  describe('Image', () => {
    it('renders the image', () => {
      render(<Card {...mock} image='image.pmg' />)
      const img = screen.queryByRole('img')
      expect(img).toBeInTheDocument()
    })
    it('has no image', () => {
      render(<Card {...mock} />)
      const img = screen.queryByRole('img')
      expect(img).not.toBeInTheDocument()
    })
  })

  describe('Texts', () => {
    const texts = {
      overline: 'overline',
      title: 'title',
      content: 'content'
    }

    it('has all texts', () => {
      render(<Card {...texts} />)
      expect(screen.queryByText(texts.overline)).toBeInTheDocument()
      expect(screen.queryByText(texts.title)).toBeInTheDocument()
      expect(screen.queryByText(texts.content)).toBeInTheDocument()
    })

    it('does not has overline', () => {
      render(<Card {...texts} overline='' />)
      expect(screen.queryByText(texts.overline)).not.toBeInTheDocument()
      expect(screen.queryByText(texts.title)).toBeInTheDocument()
      expect(screen.queryByText(texts.content)).toBeInTheDocument()
    })

    it('does not has title', () => {
      render(<Card {...texts} title='' />)
      expect(screen.queryByText(texts.overline)).toBeInTheDocument()
      expect(screen.queryByText(texts.title)).not.toBeInTheDocument()
      expect(screen.queryByText(texts.content)).toBeInTheDocument()
    })

    it('does not has content', () => {
      render(<Card {...texts} content='' />)
      expect(screen.queryByText(texts.overline)).toBeInTheDocument()
      expect(screen.queryByText(texts.title)).toBeInTheDocument()
      expect(screen.queryByText(texts.content)).not.toBeInTheDocument()
    })
  })

  describe('Actions', () => {
    it('does not has actions', () => {
      render(<Card {...mock} />)
      const actions = screen.queryAllByRole('button')
      expect(actions.length).toEqual(0)
    })

    it('has only one button', () => {
      const actions = [{
        text: 'button one',
        onClick: jest.fn()
      }]

      render(<Card {...mock} actions={actions} />)
      const buttons = screen.queryAllByRole('button')
      expect(buttons.length).toEqual(1)
      expect(buttons[0].textContent).toEqual(actions[0].text)

      const container = getComponent(SingleButtonContainer)
      expect(buttons[0].parentNode).toEqual(container)
    })

    it('has multiple buttons', () => {
      const actions = [
        {
          text: 'button one',
          onClick: jest.fn()
        },
        {
          text: 'button two',
          onClick: jest.fn()
        }
      ]

      render(<Card {...mock} actions={actions} />)
      const buttons = screen.queryAllByRole('button')
      expect(buttons.length).toEqual(2)

      for (let i = 0; i < actions.length; i++) {
        expect(buttons[i].textContent).toEqual(actions[i].text)
      }

      const container = getComponent(MultiButtonContainer)
      expect(buttons[0].parentNode).toEqual(container)
    })
  })

  describe('Type', () => {
    it('is vertical by default', () => {
      render(<Card {...mock} type={undefined} />)
      const card = getComponent(MyCard)
      expect(card).toBeInTheDocument()
      expect(card).toHaveStyle({
        height: 'fit-content',
        width: '320px'
      })
    })

    it('is vertical', () => {
      render(<Card {...mock} type='vertical' />)
      const card = getComponent(MyCard)
      expect(card).toBeInTheDocument()
      expect(card).toHaveStyle({
        height: 'fit-content',
        width: '320px'
      })
    })
    it('is horizontal', () => {
      render(<Card {...mock} type='horizontal' />)
      const card = getComponent(MyCard)
      expect(card).toBeInTheDocument()
      expect(card).toHaveStyle({
        width: '730px',
        height: '174px'
      })
    })
  })
})
