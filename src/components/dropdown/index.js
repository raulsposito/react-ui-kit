import React from 'react'
import PropTypes from 'prop-types'
import { components } from 'react-select'

import MyPropTyes from '@global/propTypes'
import Icon from '@components/icon'

import { StyledDropdown } from './style'
import { dropdownSelectStyles } from './react-select_styles'

const DropdownIndicator = props => {
  const { selectProps } = props
  const { type } = selectProps

  return (
    <components.DropdownIndicator {...props}>
      <Icon name='arrow_drop_down' size='xxlarge' color={type === 'solid' ? 'background' : 'system'} />
    </components.DropdownIndicator>
  )
}

DropdownIndicator.propTypes = {
  type: PropTypes.oneOf(['solid', 'line']),
  selectProps: PropTypes.object
}

const Option = props => {
  const { isFocused, isSelected, data, selectProps } = props
  const { label, icon } = data
  const defaultColor = selectProps.color || 'primary'

  return (
    <components.Option {...props}>
      <span>{label}</span>
      <Icon name={icon} size='xlarge' color={isFocused || isSelected ? defaultColor : 'system'} />
    </components.Option>
  )
}

Option.propTypes = {
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
  data: PropTypes.object,
  selectProps: PropTypes.object
}

const NoOptionsMessage = props => (
  <components.NoOptionsMessage {...props}>
    ...
  </components.NoOptionsMessage>
)

const Dropdown = ({ value, options, onChange, placeholder, type, color, disabled }) => (
  <StyledDropdown
    value={value}
    options={options}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    color={color}
    isDisabled={disabled}
    styles={dropdownSelectStyles}
    components={{
      DropdownIndicator,
      Option,
      NoOptionsMessage
    }}
    isSearchable={false}
  />
)

Dropdown.propTypes = {
  value: PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.string,
    icon: PropTypes.string
  }),
  options: PropTypes.array,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['solid', 'line']),
  color: MyPropTyes.color,
  disabled: PropTypes.bool
}

export default Dropdown
