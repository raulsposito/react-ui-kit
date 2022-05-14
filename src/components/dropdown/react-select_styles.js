import { colors, spacing } from '@global/theme'
import { handleType } from './style'

// Recommended way to style react-select. https://react-select.com/styles
export const dropdownSelectStyles = {
  container: provided => ({
    ...provided,
    width: '100%'
  }),
  control: (provided, state) => {
    const { type, color } = state.selectProps
    const { isFocused, isDisabled } = state

    return {
      ...provided,
      border: '2px solid',
      borderRadius: '5px',
      boxSizing: 'border-box',
      boxShadow: 'none',
      cursor: 'pointer',
      color: color ? `${colors[color].regular}` : `${colors.primary.regular}`,
      ...(handleType(type, color, isFocused, isDisabled))
    }
  },
  menu: provided => ({
    ...provided,
    minWidth: 'fit-content'
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none'
  }),
  dropdownIndicator: provided => ({
    ...provided,
    paddingRight: `${spacing.two}`
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.selectProps.type === 'solid' ? `${colors.events.white}` : 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: `${spacing.two}`
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: state.selectProps.type === 'solid' ? `${colors.events.white}` : 'inherit'
  }),
  valueContainer: provided => ({
    ...provided,
    paddingLeft: `${spacing.two}`,
    overflow: 'visible'
  }),
  option: (provided, { isFocused, isSelected, selectProps }) => {
    const defaultColor = selectProps.color || 'primary'

    return {
      ...provided,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      justifyContent: 'space-between',
      padding: `${spacing.one} ${spacing.two} ${spacing.one} ${spacing.two}`,
      backgroundColor: isFocused ? `${colors.background.hover}` : `${colors.background.primary}`,
      color: isFocused || isSelected ? `${colors[defaultColor].regular}` : `${colors.contrast.regular}`
    }
  }
}
