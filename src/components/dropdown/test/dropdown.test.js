import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { colors, spacing } from '@global/theme'

import Dropdown from '..'

const mockData = {
  placeholder: 'Dropdown Placeholder',
  onChange: jest.fn()
}

let selectedOption = {
  value: 'apartamento',
  label: 'Apartamento',
  icon: 'apartment'
}

const handleChage = e => { selectedOption = e }

const mockOptions = [
  { value: 'tienda', label: 'Tienda', icon: 'storefront' },
  { value: 'gimnasio', label: 'Gimnasio' },
  { value: 'bar', label: 'Bar', icon: 'sports_bar' },
  { value: 'spa', label: 'Spa', icon: 'spa' },
  { value: 'casa', label: 'Casa' },
  { value: 'playa', label: 'Playa' },
  { value: 'apartamento', label: 'Apartamento', icon: 'apartment' },
  { value: 'hotel', label: 'Hotel' }
]

describe('<Dropdown />', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Dropdown options={mockOptions} placeholder={mockData.placeholder} onChange={mockData.onChange} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  describe('Placeholder', () => {
    it('input has placeholder', () => {
      render(<Dropdown options={mockOptions} placeholder={mockData.placeholder} onChange={mockData.onChange} />)

      const placeholder = screen.queryByText(mockData.placeholder)
      expect(placeholder).toBeInTheDocument()
    })
  })

  describe('Input event', () => {
    it('calls function on change', () => {
      render(<Dropdown options={mockOptions} placeholder={mockData.placeholder} onChange={mockData.onChange} />)

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')

      userEvent.click(dropdownControl)
      const firstOption = screen.queryByText(mockOptions[1].label).closest('div')

      userEvent.click(firstOption)
      expect(mockData.onChange).toHaveBeenCalledTimes(1)
    })
  })

  describe('Variant Line', () => {
    it('is regular', () => {
      render(<Dropdown options={mockOptions} placeholder={mockData.placeholder} onChange={mockData.onChange} />)

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      const dropdownValueContainer = screen.queryByText(mockData.placeholder).parentElement
      const dropdownPlaceholder = screen.queryByText(mockData.placeholder).closest('div')
      const dropdownIndicatorContainer = screen.queryByText('arrow_drop_down').closest('div')
      const dropdownIndicator = screen.queryByText('arrow_drop_down')

      expect(dropdownControl).toHaveStyle({ border: '2px solid' })
      expect(dropdownControl).toHaveStyle({ borderRadius: '5px' })
      expect(dropdownControl).toHaveStyle({ boxSizing: 'border-box' })
      expect(dropdownControl).toHaveStyle({ boxShadow: 'none' })
      expect(dropdownControl).toHaveStyle({ cursor: 'pointer' })
      expect(dropdownControl).toHaveStyle({ color: `${colors.primary.regular}` })
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.background.regular}` })

      expect(dropdownValueContainer).toHaveStyle({ paddingLeft: `${spacing.two}` })

      expect(dropdownPlaceholder).toHaveStyle({ color: 'inherit' })

      expect(dropdownIndicatorContainer).toHaveStyle({ paddingRight: `${spacing.two}` })

      expect(dropdownIndicator).toHaveStyle({ color: `${colors.system.regular}` })
      expect(dropdownIndicator).toBeInTheDocument()
    })

    it('is primary', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='primary'
        />
      )
      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.primary.regular}` })
    })

    it('is secondary', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='secondary'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.secondary.regular}` })
    })

    it('is variant', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='variant'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.variant.regular}` })
    })

    it('is success', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='success'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.success.regular}` })
    })

    it('is error', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='error'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.error.regular}` })
    })

    it('is system', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='system'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.system.regular}` })
    })
  })

  describe('Variant Solid', () => {
    it('is regular', () => {
      render(
        <Dropdown options={mockOptions} placeholder={mockData.placeholder} onChange={mockData.onChange} type='solid' />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      const dropdownValueContainer = screen.queryByText(mockData.placeholder).parentElement
      const dropdownPlaceholder = screen.queryByText(mockData.placeholder).closest('div')
      const dropdownIndicatorContainer = screen.queryByText('arrow_drop_down').closest('div')
      const dropdownIndicator = screen.queryByText('arrow_drop_down')

      expect(dropdownControl).toHaveStyle({ border: '2px solid' })
      expect(dropdownControl).toHaveStyle({ borderRadius: '5px' })
      expect(dropdownControl).toHaveStyle({ boxSizing: 'border-box' })
      expect(dropdownControl).toHaveStyle({ boxShadow: 'none' })
      expect(dropdownControl).toHaveStyle({ cursor: 'pointer' })
      expect(dropdownControl).toHaveStyle({ color: `${colors.primary.regular}` })
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.primary.regular}` })

      expect(dropdownValueContainer).toHaveStyle({ paddingLeft: `${spacing.two}` })

      expect(dropdownPlaceholder).toHaveStyle({ color: `${colors.events.white}` })

      expect(dropdownIndicatorContainer).toHaveStyle({ paddingRight: `${spacing.two}` })

      expect(dropdownIndicator).toHaveStyle({ color: `${colors.background.regular}` })
      expect(dropdownIndicator).toBeInTheDocument()
    })

    it('is primary', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='primary'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.primary.regular}` })
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.primary.regular}` })
    })

    it('is secondary', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='secondary'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.secondary.regular}` })
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.secondary.regular}` })
    })

    it('is variant', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='variant'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.variant.regular}` })
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.variant.regular}` })
    })

    it('is success', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='success'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.success.regular}` })
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.success.regular}` })
    })

    it('is error', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='error'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.error.regular}` })
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.error.regular}` })
    })

    it('is system', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          onChange={mockData.onChange}
          type='solid'
          color='system'
        />
      )

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      expect(dropdownControl).toHaveStyle({ color: `${colors.system.regular}` })
      expect(dropdownControl).toHaveStyle({ backgroundColor: `${colors.system.regular}` })
    })
  })

  describe('Dropdown Options', () => {
    it('regular', () => {
      render(<Dropdown options={mockOptions} placeholder={mockData.placeholder} onChange={mockData.onChange} />)

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      userEvent.click(dropdownControl)

      const firstOption = screen.queryByText(mockOptions[1].label).closest('div')

      expect(firstOption).toHaveStyle({ display: 'flex' })
      expect(firstOption).toHaveStyle({ alignItems: 'center' })
      expect(firstOption).toHaveStyle({ justifyContent: 'space-between' })
      expect(firstOption).toHaveStyle({ padding: `${spacing.one} ${spacing.two} ${spacing.one} ${spacing.two}` })
      expect(firstOption).toHaveStyle({ backgroundColor: `${colors.background.primary}` })
      expect(firstOption).toHaveStyle({ color: `${colors.contrast.regular}` })
    })

    it('hover', () => {
      render(<Dropdown options={mockOptions} placeholder={mockData.placeholder} onChange={mockData.onChange} />)

      const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
      userEvent.click(dropdownControl)

      const firstOption = screen.queryByText(mockOptions[1].label).closest('div')
      userEvent.hover(firstOption)

      expect(firstOption).toHaveStyle({ backgroundColor: `${colors.background.hover}` })
      expect(firstOption).toHaveStyle({ color: `${colors.primary.regular}` })
    })

    describe('Icons Option', () => {
      it('has icon', () => {
        render(<Dropdown options={mockOptions} placeholder={mockData.placeholder} onChange={mockData.onChange} />)

        const dropdownControl = screen.queryByText(mockData.placeholder).parentElement.parentElement.closest('div')
        userEvent.click(dropdownControl)

        const firstOption = screen.queryByText(mockOptions[1].label).closest('div')
        expect(firstOption).toBeInTheDocument()
      })
    })
  })

  describe('Controlled Component Behavior', () => {
    it('controlled value set', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          value={selectedOption}
          onChange={handleChage}
        />
      )

      const dropdownControlled = screen.queryByText(selectedOption.label).closest('div')
      expect(dropdownControlled).toBeInTheDocument()
    })

    it('controlled value change', () => {
      render(
        <Dropdown
          options={mockOptions}
          placeholder={mockData.placeholder}
          value={selectedOption}
          onChange={handleChage}
        />
      )

      const dropdownControlled = screen.queryByText(selectedOption.label).closest('div')
      userEvent.click(dropdownControlled)

      const firstOption = screen.queryByText(mockOptions[1].label).closest('div')
      expect(firstOption).toBeInTheDocument()
      userEvent.click(firstOption)

      const changedDropdownValue = screen.queryByText(selectedOption.label)
      waitFor(() => expect(changedDropdownValue).toBeInTheDocument())
    })
  })
})
