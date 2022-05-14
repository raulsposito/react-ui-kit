import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'

import { colors } from '@global/theme'

import InputAreaContainer from '..'

const mockData = {
  name: 'inputAreaContainer',
  placeholder: 'textarea placeholder',
  value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  error: 'Error Text',
  maxLength: 200,
  rows: 50,
  onChange: jest.fn(),
  onFocus: jest.fn(),
  onBlur: jest.fn()
}

describe('<InputAreaContainer />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <InputAreaContainer
        name={mockData.name}
        placeholder={mockData.placeholder}
        value={mockData.value}
        maxLength={mockData.maxLenght}
        rows={mockData.rows}
        onChange={mockData.onChange}
        onFocus={mockData.onFocus}
        onBlur={mockData.onBlur}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Disabled', () => {
    it('is disabled', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
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
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
          required
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toBeRequired()
    })
  })

  describe('Placeholder', () => {
    it('input has placeholder', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toBeInTheDocument()
    })
  })

  describe('Name', () => {
    it('input has name', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder, { name: mockData.name })
      expect(input).toBeInTheDocument()
    })
  })

  describe('Input event', () => {
    it('calls function on change', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.change(input, { target: { value: 'new value' } })
      expect(mockData.onChange).toHaveBeenCalledTimes(1)
    })

    it('calls function on focus', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.focus(input)
      expect(mockData.onFocus).toHaveBeenCalledTimes(1)
    })

    it('calls function on blur', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      fireEvent.blur(input)
      expect(mockData.onBlur).toHaveBeenCalledTimes(1)
    })
  })

  describe('Handle State Color', () => {
    describe('Handle one state at time', () => {
      it('has not state changes', () => {
        render(
          <InputAreaContainer
            name={mockData.name}
            placeholder={mockData.placeholder}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            onFocus={mockData.onFocus}
            onBlur={mockData.onBlur}
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      })

      it('is disabled', () => {
        render(
          <InputAreaContainer
            name={mockData.name}
            placeholder={mockData.placeholder}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            onFocus={mockData.onFocus}
            onBlur={mockData.onBlur}
            disabled
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('has error', () => {
        render(
          <InputAreaContainer
            name={mockData.name}
            placeholder={mockData.placeholder}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            onFocus={mockData.onFocus}
            onBlur={mockData.onBlur}
            error={mockData.error}
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      })

      it('is focused', () => {
        render(
          <InputAreaContainer
            name={mockData.name}
            placeholder={mockData.placeholder}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            onFocus={mockData.onFocus}
            onBlur={mockData.onBlur}
          />
        )

        const input = screen.queryByPlaceholderText(mockData.placeholder)
        act(() => input.focus())

        expect(input).toHaveFocus()
        // :focus:within pseudoclass used to color the border of external div of input can't be tested
        // expect(inputContainer).toHaveStyle({ borderColor: `${colors.primary.regular}` })
        expect(input).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
      })
    })

    describe('Handle multiple states at time', () => {
      it('is disabled and has error', () => {
        render(
          <InputAreaContainer
            name={mockData.name}
            placeholder={mockData.placeholder}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            onFocus={mockData.onFocus}
            onBlur={mockData.onBlur}
            error={mockData.error}
            disabled
          />
        )

        const inputContainer = screen.queryByPlaceholderText(mockData.placeholder)
        expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('is disabled and focused', () => {
        render(
          <InputAreaContainer
            name={mockData.name}
            placeholder={mockData.placeholder}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            onFocus={mockData.onFocus}
            onBlur={mockData.onBlur}
            disabled
          />
        )

        const input = screen.queryByPlaceholderText(mockData.placeholder)
        act(() => input.focus())

        expect(input).toHaveStyle({ borderColor: `${colors.system.disabled}` })
        expect(input).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })

      it('is disabled, focused and has error', () => {
        render(
          <InputAreaContainer
            name={mockData.name}
            placeholder={mockData.placeholder}
            value={mockData.value}
            maxLength={mockData.maxLenght}
            rows={mockData.rows}
            onChange={mockData.onChange}
            onFocus={mockData.onFocus}
            onBlur={mockData.onBlur}
            error={mockData.error}
            disabled
          />
        )

        const input = screen.queryByPlaceholderText(mockData.placeholder)
        act(() => input.focus())

        expect(input).toHaveStyle({ borderColor: `${colors.error.regular}` })
        expect(input).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
      })
    })
  })

  describe('TextArea Properties', () => {
    it('max length', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLength}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toHaveAttribute('maxLength', (mockData.maxLength).toString())
    })

    it('rows', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLength}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toHaveAttribute('rows', (mockData.rows).toString())
    })

    it('resize', () => {
      render(
        <InputAreaContainer
          name={mockData.name}
          placeholder={mockData.placeholder}
          value={mockData.value}
          maxLength={mockData.maxLenght}
          rows={mockData.rows}
          onChange={mockData.onChange}
          onFocus={mockData.onFocus}
          onBlur={mockData.onBlur}
          resize
        />
      )

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      expect(input).toHaveStyle({ resize: 'vertical' })
    })
  })
})
