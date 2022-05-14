import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { colors } from '@global/theme'

import { TextArea } from '@components/inputs'

let value = 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.'
const handleChange = e => { value = e }

const mockData = {
  name: 'txtMock',
  label: 'TextArea Label',
  requiredLabel: 'TextArea Label *',
  placeholder: 'textArea placeholder',
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  error: 'Error Text',
  helperText: 'Helper Text',
  color: 'secondary',
  maxLength: 200,
  rows: 50,
  onChange: jest.fn()
}

describe('<TextArea />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <TextArea
        name={mockData.name}
        label={mockData.label}
        placeholder={mockData.placeholder}
        helperText={mockData.helperText}
        value={mockData.value}
        maxLength={mockData.maxLenght}
        rows={mockData.rows}
        onChange={mockData.onChange}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  describe('Disabled', () => {
    it('is disabled', () => {
      render(
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
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
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
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
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          required
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toBeInTheDocument()
    })
  })

  describe('Name', () => {
    it('input has name', () => {
      render(
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
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
      render(
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 'new value' } })
      expect(mockData.onChange).toHaveBeenCalledTimes(1)
    })
  })

  describe('Handle State Color', () => {
    describe('Handle one state at time', () => {
      it('has not state changes', () => {
        render(
          <TextArea
            name={mockData.name}
            label={mockData.label}
            placeholder={mockData.placeholder}
            helperText={mockData.helperText}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.helperText)

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.contrast.regular}` })
        expect(helper).toHaveStyle({ color: `${colors.contrast.regular}` })
      })

      it('is disabled', () => {
        render(
          <TextArea
            name={mockData.name}
            label={mockData.label}
            placeholder={mockData.placeholder}
            helperText={mockData.helperText}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            disabled
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('has error', () => {
        render(
          <TextArea
            name={mockData.name}
            label={mockData.label}
            placeholder={mockData.placeholder}
            helperText={mockData.helperText}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            error={mockData.error}
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.error)

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toBeInTheDocument()
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      })

      it('has custom color', () => {
        render(
          <TextArea
            name={mockData.name}
            label={mockData.label}
            placeholder={mockData.placeholder}
            helperText={mockData.helperText}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            color={mockData.color}
          />
        )

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
        render(
          <TextArea
            name={mockData.name}
            label={mockData.label}
            placeholder={mockData.placeholder}
            helperText={mockData.helperText}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            color={mockData.color}
            disabled
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('has error and custom color', () => {
        render(
          <TextArea
            name={mockData.name}
            label={mockData.label}
            placeholder={mockData.placeholder}
            helperText={mockData.helperText}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            color={mockData.color}
            error={mockData.error}
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)
        const label = screen.queryByText(mockData.label)
        const helper = screen.queryByText(mockData.error)

        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
        expect(label).toHaveStyle({ color: `${colors.error.regular}` })
        expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      })
    })
  })

  describe('Validation', () => {
    it('validation wrong', () => {
      render(
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          value='no'
          maxLength={2}
          rows={mockData.rows}
          onChange={mockData.onChange}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const label = screen.queryByText(mockData.label)
      const helper = screen.queryByText(mockData.helperText)

      fireEvent.blur(input)
      expect(input).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(input).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(label).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).not.toBe(mockData.helperText)
      expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).toBeInTheDocument()
    })

    it('priorize textarea validation error from error property', () => {
      render(
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          error={mockData.error}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const label = screen.queryByText(mockData.label)
      const helper = screen.queryByText(mockData.error)

      fireEvent.blur(input)
      expect(input).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(input).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      expect(label).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).not.toBe(mockData.helperText)
      expect(helper).not.toBe(mockData.error)
      expect(helper).toHaveStyle({ color: `${colors.error.regular}` })
      expect(helper).toBeInTheDocument()
    })
  })

  describe('Controlled Component Behavior', () => {
    it('controlled value set', () => {
      render(
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          value={value}
          onChange={handleChange}
          color={mockData.color}
          error={mockData.error}
          disabled
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input.value).toBe(value)
    })

    it('controlled value change', () => {
      render(
        <TextArea
          name={mockData.name}
          label={mockData.label}
          placeholder={mockData.placeholder}
          helperText={mockData.helperText}
          value={value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={handleChange}
          color={mockData.color}
          error={mockData.error}
          disabled
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 23 } })
      waitFor(() => expect(input.value).toBe(value))
    })
  })
})
