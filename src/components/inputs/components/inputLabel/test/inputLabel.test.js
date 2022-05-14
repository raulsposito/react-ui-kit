import React from 'react'
import { render, screen } from '@testing-library/react'

import { colors } from '@global/theme'

import InputLabel from '..'

const mockData = {
  text: 'Input Label',
  customColor: 'secondary',
  name: 'labelTest',
  requiredText: 'Input Label *'
}

describe('<InputLabel />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<InputLabel text={mockData.text} color={mockData.customColor} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Text', () => {
  it('has text', () => {
    render(<InputLabel text={mockData.text} />)

    const text = screen.queryByText(mockData.text)
    expect(text).toBeInTheDocument()
  })
})

describe('Required', () => {
  it('is required', () => {
    render(<InputLabel text={mockData.text} required />)

    const requiredLabel = screen.queryByText(mockData.requiredText)
    expect(requiredLabel).toBeInTheDocument()
  })
})

describe('Name', () => {
  it('has name', () => {
    render(<InputLabel text={mockData.text} name={mockData.name} />)

    const label = screen.queryByText(mockData.text).closest('label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveAttribute('for', mockData.name)
  })
})

describe('Color', () => {
  it('has color', () => {
    render(<InputLabel text={mockData.text} color={mockData.customColor} />)

    const label = screen.queryByText(mockData.text)
    expect(label).toHaveStyle({ color: `${colors[mockData.customColor].regular}` })
  })

  it('has not color', () => {
    render(<InputLabel text={mockData.text} />)

    const label = screen.queryByText(mockData.text)
    expect(label).toHaveStyle({ color: `${colors.contrast.regular}` })
  })
})
