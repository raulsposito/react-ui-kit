import React from 'react'
import { render, screen } from '@testing-library/react'

import { colors } from '@global/theme'

import InputCharacterCounter from '..'

const mockData = {
  currentCharacterCount: 45,
  maxLength: 50
}

const fullTextNormal = `Cantidad de caracteres: ${mockData.currentCharacterCount} / ${mockData.maxLength}`
const fullTextError = `Cantidad de caracteres: ${mockData.maxLength} / ${mockData.maxLength}`

describe('<InputCharacterCounter />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <InputCharacterCounter currentCharacterCount={mockData.currentCharacterCount} maxLength={mockData.maxLength} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  describe('<MaxLenght', () => {
    it('textarea has no reach character limit', () => {
      render(
        <InputCharacterCounter currentCharacterCount={mockData.currentCharacterCount} maxLength={mockData.maxLength} />
      )

      const textAreaCounter = screen.queryByText(fullTextNormal)
      expect(textAreaCounter).toBeInTheDocument()
      expect(textAreaCounter).toHaveStyle({ color: `${colors.system.regular}` })
    })

    it('textarea has reach character limit', () => {
      render(<InputCharacterCounter currentCharacterCount={mockData.maxLength} maxLength={mockData.maxLength} />)

      const textAreaCounter = screen.queryByText(fullTextError)
      expect(textAreaCounter).toBeInTheDocument()
      expect(textAreaCounter).toHaveStyle({ color: `${colors.error.regular}` })
    })
  })
})
