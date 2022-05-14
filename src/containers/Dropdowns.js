import Dropdown from '@components/dropdown'
import { Text } from '@components/texts'
import React, { useState } from 'react'

const options = [
  { value: 'tienda', label: 'Tienda', icon: 'storefront' },
  { value: 'gimnasio', label: 'Gimnasio' },
  { value: 'bar', label: 'Bar', icon: 'sports_bar' },
  { value: 'spa', label: 'Spa', icon: 'spa' },
  { value: 'casa', label: 'Casa' },
  { value: 'playa', label: 'Playa' },
  { value: 'apartamento', label: 'Apartamento', icon: 'apartment' },
  { value: 'hotel', label: 'Hotel' }
]

const Dropdowns = () => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'apartamento',
    label: 'Apartamento',
    icon: 'apartment'
  })

  const handleChage = e => {
    setSelectedOption(e)
  }

  return (
    <div>
      <h2>Dropdowns</h2>
      <div
        style={{
          display: 'flex', flexDirection: 'row', alignItems: 'baseline', columnGap: '0.5em', marginBottom: '1.0em'
        }}
      >
        <Dropdown options={options} value={selectedOption} onChange={handleChage} placeholder='Active' type='line' />
        <Dropdown options={options} value={selectedOption} onChange={handleChage} placeholder='Active' type='solid' />
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={handleChage}
          placeholder='Disabled'
          type='line'
          disabled
        />
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={handleChage}
          placeholder='Disabled'
          type='solid'
          disabled
        />
      </div>
      <div
        style={{
          display: 'flex', flexDirection: 'row', alignItems: 'baseline', columnGap: '0.5em', marginBottom: '1.0em'
        }}
      >
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={handleChage}
          color='secondary'
          placeholder='Active'
          type='line'
        />
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={handleChage}
          color='secondary'
          placeholder='Active'
          type='solid'
        />
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={handleChage}
          color='secondary'
          placeholder='Disabled'
          type='line'
          disabled
        />
        <Dropdown
          options={options}
          value={selectedOption}
          onChange={handleChage}
          color='secondary'
          placeholder='Disabled'
          type='solid'
          disabled
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', columnGap: '0.5em' }}>
        <Text text='Label:' weight='xbold' size='xlarge' />
        <Text text={selectedOption.label} size='xlarge' />
        <Text text='Value:' weight='xbold' size='xlarge' />
        <Text text={selectedOption.value} size='xlarge' />
        <Text text='Icon:' weight='xbold' size='xlarge' />
        <Text text={selectedOption.icon} size='xlarge' />
      </div>
    </div>
  )
}

export default Dropdowns
