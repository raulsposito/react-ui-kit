import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { colors } from '@global/theme'
import { INPUT_TYPES } from '@components/inputs/utils/constants'

import InputAdornment from '@components/inputs/components/inputAdornment'

import { TextField } from '@components/inputs'

const startAdornment = <InputAdornment icon='visibility' color='system' />
const endAdornment = <InputAdornment icon='help' color='system' />

let value = 'textInsertValue'
const handleChange = e => { value = e }

const mockData = {
  name: 'txtMock',
  label: 'TextField Label',
  requiredLabel: 'TextField Label *',
  placeholder: 'textfField placeholder',
  value: 'goblinShaman',
  error: 'Error Text',
  helperText: 'Helper Text',
  color: 'secondary',
  onChange: jest.fn(),
  startAdornment,
  endAdornment
}

const mockValidationsData = {
  email: {
    correct: 'jumpierrez@shaman.uy',
    wrong: 'jumpierrez'
  },
  name: {
    correct: 'Joaquin',
    wrong: 'Joaquin1'
  }
}

describe('<TextField />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<TextField
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
        <TextField
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
        <TextField
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

  describe('Error', () => {
    it('has error (icon)', () => {
      render(<TextField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        error={mockData.error}
      />)

      const errorAdornment = screen.queryByText('error')
      expect(errorAdornment).toBeInTheDocument()
    })
  })

  describe('Placeholder', () => {
    it('input has placeholder', () => {
      render(
        <TextField
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
        <TextField
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
      render(<TextField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        onChange={mockData.onChange}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 'new value' } })
      expect(mockData.onChange).toHaveBeenCalledTimes(1)
    })
  })

  describe('Input Type', () => {
    it('no type', () => {
      render(
        <TextField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toHaveAttribute('type', 'text')
    })

    it('is name type', () => {
      render(
        <TextField
          type={INPUT_TYPES.NAME}
          name={mockData.name}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toHaveAttribute('type', 'text')
    })

    it('is email type', () => {
      render(
        <TextField
          type={INPUT_TYPES.EMAIL}
          name={mockData.name}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toHaveAttribute('type', 'email')
    })
  })

  describe('Handle State Color', () => {
    describe('Handle one state at time', () => {
      it('has not state changes', () => {
        render(
          <TextField
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
        render(
          <TextField
            name={mockData.name}
            label={mockData.label}
            placeholder={mockData.placeholder}
            helperText={mockData.helperText}
            disabled
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('has error', () => {
        render(<TextField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          error={mockData.error}
        />)

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.error)

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toBeInTheDocument()
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      })

      it('has custom color', () => {
        render(<TextField
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

        expect(helper).toHaveStyle({ color: `${colors.secondary.regular}` })
        expect(label).toHaveStyle({ color: `${colors.secondary.regular}` })
      })
    })

    describe('Handle multiple states at time', () => {
      it('is disabled and has custom color', () => {
        render(<TextField
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
        render(<TextField
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

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      })
    })
  })

  describe('Adornment', () => {
    it('has no adornment', () => {
      render(
        <TextField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
        />
      )

      const startAdornmentDiv = screen.queryByText('visibility')?.closest('div')
      const endAdornmentDiv = screen.queryByText('help')?.closest('div')

      expect(startAdornmentDiv).toBeUndefined()
      expect(endAdornmentDiv).toBeUndefined()
    })

    it('has start adornment only', () => {
      render(<TextField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        startAdornment={startAdornment}
      />)

      const startAdornmentDiv = screen.queryByText('visibility')?.closest('div')
      const endAdornmentDiv = screen.queryByText('help')?.closest('div')

      expect(startAdornmentDiv).toBeInTheDocument()
      expect(endAdornmentDiv).toBeUndefined()
    })

    it('has end adornment only', () => {
      render(
        <TextField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          endAdornment={mockData.endAdornment}
        />
      )

      const startAdornmentDiv = screen.queryByText('visibility')?.closest('div')
      const endAdornmentDiv = screen.queryByText('help')?.closest('div')

      expect(startAdornmentDiv).toBeUndefined()
      expect(endAdornmentDiv).toBeInTheDocument()
    })

    it('has start and end adornments at the same time', () => {
      render(<TextField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        startAdornment={mockData.startAdornment}
        endAdornment={mockData.endAdornment}
      />)

      const startAdornmentDiv = screen.queryByText('visibility')?.closest('div')
      const endAdornmentDiv = screen.queryByText('help')?.closest('div')

      expect(startAdornmentDiv).toBeInTheDocument()
      expect(endAdornmentDiv).toBeInTheDocument()
    })
  })

  describe('Validations', () => {
    describe('Name', () => {
      it('validation wrong', () => {
        render(<TextField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          type={INPUT_TYPES.NAME}
          value={mockValidationsData.name.wrong}
        />)

        const input = screen.queryByPlaceholderText(mockData.placeholder)
        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.helperText)

        fireEvent.blur(input)
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).not.toBe(mockData.helperText)
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toBeInTheDocument()
      })
    })

    describe('Email', () => {
      it('validation wrong', () => {
        render(<TextField
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          type={INPUT_TYPES.EMAIL}
          value={mockValidationsData.email.wrong}
        />)

        const input = screen.queryByPlaceholderText(mockData.placeholder)
        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.helperText)

        fireEvent.blur(input)
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).not.toBe(mockData.helperText)
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toBeInTheDocument()
      })
    })

    it('priorize textField validation error from error property', () => {
      render(<TextField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        type={INPUT_TYPES.EMAIL}
        value={mockValidationsData.email.wrong}
        error={mockData.error}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      const label = screen.queryByText(mockData.label)
      const helper = screen.queryByText(mockData.error)

      fireEvent.blur(input)
      expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(label).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).not.toBe(mockData.helperText)
      expect(helper).not.toBe(mockData.error)
      expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).toBeInTheDocument()
    })
  })

  describe('Controlled Component Behavior', () => {
    it('controlled value set', () => {
      render(<TextField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        type={INPUT_TYPES.EMAIL}
        error={mockData.error}
        value={value}
        onChange={handleChange}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input.value).toBe(value)
    })

    it('controlled value change', () => {
      render(<TextField
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        type={INPUT_TYPES.EMAIL}
        error={mockData.error}
        value={value}
        onChange={handleChange}
      />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 23 } })
      waitFor(() => expect(input.value).toBe(value))
    })
  })
})
