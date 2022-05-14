import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'

import { colors } from '@global/theme'
import { INPUT_TYPES } from '@components/inputs/utils/constants'

import InputAdornment from '../../inputAdornment'

import InputContainer from '..'

const adornmentData = {
  startIcon: 'visibility',
  endIcon: 'help',
  color: 'system',
  onClick: jest.fn()
}

const startAdornment = (
  <InputAdornment onClick={adornmentData.onClick} icon={adornmentData.startIcon} color={adornmentData.color} />
)
const endAdornment = (
  <InputAdornment onClick={adornmentData.onClick} icon={adornmentData.endIcon} color={adornmentData.color} />
)

const mockData = {
  name: 'inputContainer',
  placeholder: 'input placeholder',
  value: 'controlled value',
  error: 'Error Text',
  startAdornment,
  endAdornment,
  onChange: jest.fn(),
  onFocus: jest.fn(),
  onBlur: jest.fn()
}

describe('<InputContainer />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Disabled', () => {
  it('is disabled', () => {
    render(<InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} disabled />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toBeDisabled()
  })
})

describe('Required', () => {
  it('is required', () => {
    render(<InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} required />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toBeRequired()
  })
})

describe('Placeholder', () => {
  it('input has placeholder', () => {
    render(<InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toBeInTheDocument()
  })
})

describe('Name', () => {
  it('input has name', () => {
    render(<InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder, { name: mockData.name })
    expect(input).toBeInTheDocument()
  })
})

describe('Input event', () => {
  it('calls function on change', () => {
    render(
      <InputContainer
        type={INPUT_TYPES.TEXT}
        name={mockData.name}
        placeholder={mockData.placeholder}
        onChange={mockData.onChange}
      />
    )

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    fireEvent.change(input, { target: { value: 'new value' } })
    expect(mockData.onChange).toHaveBeenCalledTimes(1)
  })

  it('calls function on focus', () => {
    render(
      <InputContainer
        type={INPUT_TYPES.TEXT}
        name={mockData.name}
        placeholder={mockData.placeholder}
        onFocus={mockData.onFocus}
      />
    )

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    fireEvent.focus(input)
    expect(mockData.onFocus).toHaveBeenCalledTimes(1)
  })

  it('calls function on blur', () => {
    render(
      <InputContainer
        type={INPUT_TYPES.TEXT}
        name={mockData.name}
        placeholder={mockData.placeholder}
        onBlur={mockData.onBlur}
      />
    )

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    fireEvent.blur(input)
    expect(mockData.onBlur).toHaveBeenCalledTimes(1)
  })
})

describe('Input types', () => {
  it('has not selected type', () => {
    render(<InputContainer name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder, { type: INPUT_TYPES.TEXT })
    expect(input).toBeInTheDocument()
  })

  it('text', () => {
    render(<InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toHaveAttribute('type', 'text')
  })

  it('email', () => {
    render(<InputContainer type={INPUT_TYPES.EMAIL} name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toHaveAttribute('type', 'email')
  })

  it('telephone', () => {
    render(<InputContainer type={INPUT_TYPES.TEL} name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toHaveAttribute('type', 'tel')
  })

  it('number', () => {
    render(<InputContainer type={INPUT_TYPES.NUMBER} name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toHaveAttribute('type', 'number')
  })

  it('password', () => {
    render(<InputContainer type={INPUT_TYPES.PASSWORD} name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toHaveAttribute('type', 'password')
  })

  it('name', () => {
    render(<InputContainer type={INPUT_TYPES.NAME} name={mockData.name} placeholder={mockData.placeholder} />)

    const input = screen.queryByPlaceholderText(mockData.placeholder)
    expect(input).toHaveAttribute('type', 'text')
  })
})

describe('Handle State Color', () => {
  describe('Handle one state at time', () => {
    it('has not state changes', () => {
      render(<InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} />)

      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
    })

    it('is disabled', () => {
      render(
        <InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} disabled />
      )

      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
    })

    it('has error', () => {
      render(
        <InputContainer
          type={INPUT_TYPES.TEXT}
          name={mockData.name}
          placeholder={mockData.placeholder}
          error={mockData.error}
        />
      )

      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
    })

    it('is focused', () => {
      render(<InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} />)

      const input = screen.queryByPlaceholderText(mockData.placeholder)
      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      act(() => input.focus())

      expect(input).toHaveFocus()
      // :focus:within pseudoclass used to color the border of external div of input can't be tested
      // expect(inputContainer).toHaveStyle({ borderColor: `${colors.primary.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.regular}` })
    })
  })

  describe('Handle multiple states at time', () => {
    it('is disabled and has error', () => {
      render(
        <InputContainer
          type={INPUT_TYPES.TEXT}
          name={mockData.name}
          placeholder={mockData.placeholder}
          disabled
          error={mockData.error}
        />
      )

      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
    })

    it('is disabled and focused', () => {
      render(
        <InputContainer
          type={INPUT_TYPES.TEXT}
          name={mockData.name}
          placeholder={mockData.placeholder}
          disabled
        />
      )

      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      const input = screen.queryByPlaceholderText(mockData.placeholder)
      act(() => input.focus())

      expect(inputContainer).toHaveStyle({ borderColor: `${colors.system.disabled}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
    })

    it('is disabled, focused and has error', () => {
      render(<InputContainer name={mockData.name} placeholder={mockData.placeholder} disabled error={mockData.error} />)

      const inputContainer = screen.queryByPlaceholderText(mockData.placeholder).closest('div')
      const input = screen.queryByPlaceholderText(mockData.placeholder)
      act(() => input.focus())

      expect(inputContainer).toHaveStyle({ borderColor: `${colors.error.regular}` })
      expect(inputContainer).toHaveStyle({ backgroundColor: `${colors.background.disabled}` })
    })
  })
})

describe('Adornments', () => {
  it('has no adornments', () => {
    render(<InputContainer type={INPUT_TYPES.TEXT} name={mockData.name} placeholder={mockData.placeholder} />)

    const startAdornmentDiv = screen.queryByText('visibility')?.closest('div')
    const endAdornmentDiv = screen.queryByText('help')?.closest('div')

    expect(startAdornmentDiv).toBeUndefined()
    expect(endAdornmentDiv).toBeUndefined()
  })

  it('has start adornment only', () => {
    render(
      <InputContainer
        name={mockData.name}
        placeholder={mockData.placeholder}
        startAdornment={mockData.startAdornment}
      />
    )

    const startAdornmentDiv = screen.queryByText('visibility')?.closest('div')
    const endAdornmentDiv = screen.queryByText('help')?.closest('div')

    expect(startAdornmentDiv).toBeInTheDocument()
    expect(endAdornmentDiv).toBeUndefined()
  })

  it('has end adornment only', () => {
    render(
      <InputContainer
        name={mockData.name}
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
    render(
      <InputContainer
        name={mockData.name}
        startAdornment={mockData.startAdornment}
        endAdornment={mockData.endAdornment}
      />
    )

    const startAdornmentDiv = screen.queryByText('visibility')?.closest('div')
    const endAdornmentDiv = screen.queryByText('help')?.closest('div')

    expect(startAdornmentDiv).toBeInTheDocument()
    expect(endAdornmentDiv).toBeInTheDocument()
  })
})
