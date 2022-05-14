import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { colors } from '@global/theme'

import { Password } from '@components/inputs'

let value = 'password1234'
const handleChage = e => { value = e }

const mockData = {
  name: 'passwordMock',
  placeholder: 'password placeholder',
  value: 'goblinShaman',
  error: 'Error Text',
  helperText: 'Helper Text',
  label: 'Password Label',
  requiredLabel: 'Password Label *',
  color: 'secondary',
  wrongPassword: 'gob',
  goodPassword: 'shaman1234',
  onChange: jest.fn()
}

describe('<Password />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Password
      name={mockData.name}
      placeholder={mockData.placeholder}
      label={mockData.label}
      helperText={mockData.helperText}
    />)
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Disabled', () => {
    it('is disabled', () => {
      render(
        <Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
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
        <Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
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
        <Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
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
        <Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
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
      render(<Password
        name={mockData.name}
        placeholder={mockData.placeholder}
        label={mockData.label}
        helperText={mockData.helperText}
        onChange={mockData.onChange}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 'new value' } })
      expect(mockData.onChange).toHaveBeenCalledTimes(1)
    })
  })

  describe('Input Type', () => {
    it('is password type', () => {
      render(
        <Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
          helperText={mockData.helperText}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toHaveAttribute('type', 'password')
    })
  })

  describe('Handle State Color', () => {
    describe('Handle one state at time', () => {
      it('has not state changes', () => {
        render(
          <Password
            name={mockData.name}
            placeholder={mockData.placeholder}
            label={mockData.label}
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
        render(
          <Password
            name={mockData.name}
            placeholder={mockData.placeholder}
            label={mockData.label}
            helperText={mockData.helperText}
            disabled
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('has error', () => {
        render(<Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
          helperText={mockData.helperText}
          error={mockData.error}
        />)

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.error)
        const adornment = screen.queryByText('visibility')

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toBeInTheDocument()
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
        expect(adornment).toHaveStyle({ color: `${colors.error.regular}` })
      })

      it('has custom color', () => {
        render(<Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
          helperText={mockData.helperText}
          color={mockData.color}
        />)

        const input = screen.queryByPlaceholderText(mockData.placeholder)
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.helperText)

        fireEvent.focus(input)

        expect(helper).toHaveStyle({ color: `${colors.secondary.regular}` })
        expect(label).toHaveStyle({ color: `${colors.secondary.regular}` })
      })
    })

    describe('Handle multiple states at time', () => {
      it('is disabled and has custom color', () => {
        render(<Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
          helperText={mockData.helperText}
          disabled
          color={mockData.color}
        />)

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('has error and custom color', () => {
        render(<Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
          helperText={mockData.helperText}
          error={mockData.error}
          color={mockData.color}
        />)

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.error)
        const adornment = screen.queryByText('visibility')

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
        expect(adornment).toHaveStyle({ color: `${colors.error.regular}` })
      })
    })
  })

  describe('Password Visibility', () => {
    it('has the adornment', () => {
      render(
        <Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
          helperText={mockData.helperText}
        />
      )

      const adornment = screen.queryByText('visibility')
      expect(adornment).toBeInTheDocument()
    })

    it('function triggers', () => {
      render(
        <Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
          helperText={mockData.helperText}
        />
      )

      const adornment = screen.queryByText('visibility').closest('div')
      userEvent.click(adornment)

      const newAdornment = screen.queryByText('visibility_off').closest('div')
      expect(newAdornment).toBeInTheDocument()
    })

    it('disable event on disaled state', () => {
      render(
        <Password
          name={mockData.name}
          placeholder={mockData.placeholder}
          label={mockData.label}
          helperText={mockData.helperText}
          disabled
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const adornment = screen.queryByText('visibility').closest('div')

      userEvent.click(adornment)
      expect(input).toHaveAttribute('type', 'password')
    })
  })

  describe('Validations', () => {
    it('validation wrong', () => {
      render(<Password
        name={mockData.name}
        placeholder={mockData.placeholder}
        label={mockData.label}
        helperText={mockData.helperText}
        value={mockData.wrongPassword}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      const label = screen.queryByText(mockData.label)
      const helper = screen.queryByText(mockData.helperText)
      const adornment = screen.queryByText('visibility')

      fireEvent.blur(input)
      expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(label).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).not.toBe(mockData.helperText)
      expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).toBeInTheDocument()
      expect(adornment).toHaveStyle({ color: `${colors.error.regular}` })
    })

    it('priorize password validation error from error property', () => {
      render(<Password
        name={mockData.name}
        placeholder={mockData.placeholder}
        label={mockData.label}
        helperText={mockData.helperText}
        error={mockData.error}
        value={mockData.wrongPassword}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      const label = screen.queryByText(mockData.label)
      const helper = screen.queryByText(mockData.error)
      const adornment = screen.queryByText('visibility')

      fireEvent.blur(input)
      expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(label).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).not.toBe(mockData.helperText)
      expect(helper).not.toBe(mockData.error)
      expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).toBeInTheDocument()
      expect(adornment).toHaveStyle({ color: `${colors.error.regular}` })
    })
  })

  describe('Controlled Component Behavior', () => {
    it('controlled value set', () => {
      render(<Password
        name={mockData.name}
        placeholder={mockData.placeholder}
        label={mockData.label}
        helperText={mockData.helperText}
        error={mockData.error}
        value={value}
        onChange={handleChage}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input.value).toBe(value)
    })

    it('controlled value change', () => {
      render(<Password
        name={mockData.name}
        placeholder={mockData.placeholder}
        label={mockData.label}
        helperText={mockData.helperText}
        error={mockData.error}
        value={value}
        onChange={handleChage}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 23 } })
      waitFor(() => expect(input.value).toBe(value))
    })
  })
})
