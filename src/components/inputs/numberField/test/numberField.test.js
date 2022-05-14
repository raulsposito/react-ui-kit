import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { colors } from '@global/theme'

import { NumberField } from '@components/inputs'

let value = 234
const handleChage = e => { value = e }

const mockData = {
  name: 'numberMock',
  label: 'Number Label',
  requiredLabel: 'Number Label *',
  placeholder: 'number placeholder',
  value: 'goblinShaman',
  error: 'Error Text',
  helperText: 'Helper Text',
  color: 'secondary',
  wrongNumber: 'gob',
  goodNumber: 1234,
  onChange: jest.fn()
}

describe('<NumberField />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<NumberField
      name={mockData.name}
      label={mockData.label}
      placeholder={mockData.placeholder}
      helperText={mockData.helperText}
    />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Disabled', () => {
    it('is disabled', () => {
      render(
        <NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          disabled
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toBeDisabled()
    })
  })

  describe('Required', () => {
    it('is required', () => {
      render(
        <NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          required
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const label = screen.queryByText(mockData.requiredLabel)

      expect(input).toBeRequired()
      expect(label).toBeInTheDocument()
    })
  })

  describe('Placeholder', () => {
    it('input has placeholder', () => {
      render(
        <NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toBeInTheDocument()
    })
  })

  describe('Name', () => {
    it('input has name', () => {
      render(
        <NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder, { name: mockData.name })
      const label = screen.queryByText(mockData.label).closest('label')

      expect(input).toBeInTheDocument()
      expect(label).toHaveAttribute('for', mockData.name)
    })
  })

  describe('Input event', () => {
    it('calls function on change', () => {
      render(<NumberField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        onChange={mockData.onChange}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 222 } })
      expect(mockData.onChange).toHaveBeenCalledTimes(1)
    })
  })

  describe('Input Type', () => {
    it('is number type', () => {
      render(
        <NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toHaveAttribute('type', 'number')
    })
  })

  describe('Handle State Color', () => {
    describe('Handle one state at time', () => {
      it('has not state changes', () => {
        render(
          <NumberField
            name={mockData.name}
            label={mockData.label}
            placeholder={mockData.placeholder}
            helperText={mockData.helperText}
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.helperText)

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.contrast.regular}` })
        expect(helper).toHaveStyle({ color: `${colors.contrast.regular}` })
      })

      it('is disabled', () => {
        render(<NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          disabled
        />)

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('has error', () => {
        render(<NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          error={mockData.error}
        />)

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.error)
        const leftArrow = screen.queryByText('expand_more')
        const rightArrow = screen.queryByText('expand_less')

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toBeInTheDocument()
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
        expect(leftArrow).toHaveStyle({ color: `${colors.error.regular}` })
        expect(rightArrow).toHaveStyle({ color: `${colors.error.regular}` })
      })

      it('has custom color', () => {
        render(<NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          color={mockData.color}
        />)

        const input = screen.queryByPlaceholderText(mockData.placeholder)
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.helperText)

        fireEvent.focus(input)

        expect(helper).toHaveStyle({ color: `${colors[mockData.color].regular}` })
        expect(label).toHaveStyle({ color: `${colors[mockData.color].regular}` })
      })
    })

    describe('Handle multiple states at time', () => {
      it('is disabled and has custom color', () => {
        render(<NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          disabled
          color={mockData.color}
        />)

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('has error and custom color', () => {
        render(<NumberField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          error={mockData.error}
          color={mockData.color}
        />)

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.error)
        const leftArrow = screen.queryByText('expand_more')
        const rightArrow = screen.queryByText('expand_less')

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
        expect(leftArrow).toHaveStyle({ color: `${colors.error.regular}` })
        expect(rightArrow).toHaveStyle({ color: `${colors.error.regular}` })
      })
    })
  })

  describe('Validations', () => {
    it('validation wrong', () => {
      render(<NumberField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        value={mockData.wrongNumber}
      />)

    // is not possible to enter a string value
    })

    it('priorize number validation error from error property', () => {
      render(<NumberField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        error={mockData.error}
        value={mockData.wrongNumber}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      const label = screen.queryByText(mockData.label)
      const helper = screen.queryByText(mockData.error)
      const leftArrow = screen.queryByText('expand_more')
      const rightArrow = screen.queryByText('expand_less')

      fireEvent.blur(input)
      expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(label).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).not.toBe(mockData.helperText)
      expect(helper).not.toBe(mockData.error)
      expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).toBeInTheDocument()
      expect(leftArrow).toHaveStyle({ color: `${colors.error.regular}` })
      expect(rightArrow).toHaveStyle({ color: `${colors.error.regular}` })
    })
  })

  describe('Controlled Component Behavior', () => {
    it('controlled value set', () => {
      render(<NumberField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        error={mockData.error}
        value={value}
        onChange={handleChage}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(Number(input.value)).toBe(value)
    })

    it('controlled value change', () => {
      render(<NumberField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        error={mockData.error}
        value={value}
        onChange={handleChage}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 23 } })
      waitFor(() => expect(Number(input.value)).toBe(value))
    })
  })
})
