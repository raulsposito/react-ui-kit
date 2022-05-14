import React from 'react'
import { render, screen } from '@testing-library/react'

import { colors } from '@global/theme'

import InputHelperText from '..'

const mockData = {
  text: 'Input Helper Text',
  color: 'secondary',
  error: 'Error Text'
}

describe('<InputHelperText />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<InputHelperText text={mockData.text} color={mockData.color} />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Text', () => {
    it('has text', () => {
      render(<InputHelperText text={mockData.text} />)

      const text = screen.queryByText(mockData.text)
      expect(text).toBeInTheDocument()
    })
  })

  describe('Color', () => {
    it('has color', () => {
      render(<InputHelperText text={mockData.text} color={mockData.color} />)

      const helper = screen.queryByText(mockData.text)
      expect(helper).toHaveStyle({ color: `${colors[mockData.color].regular}` })
    })

    it('has not color', () => {
      render(<InputHelperText text={mockData.text} />)

      const helper = screen.queryByText(mockData.text)
      expect(helper).toHaveStyle({ color: `${colors.contrast.regular}` })
    })
  })
})
