/* eslint-disable no-console */
import React, { useState } from 'react'

import { INPUT_TYPES } from '@components/inputs/utils/constants'

import InputAdornment from '@components/inputs/components/inputAdornment'
import { TextField, Password, NumberField, TextArea } from '@components/inputs'

const Inputs = () => {
  const [value, setValue] = useState('Some Text In')
  const handleChangeText = val => setValue(val)

  const [number, setNumber] = useState(1234)
  const handleChangeNumber = val => setNumber(val)

  const [password, setPassword] = useState('password')
  const handleChangePassword = val => setPassword(val)

  const [textArea, setTextArea] = useState('Maecenas ultrices nibh quis nulla mollis')
  const handleChangeTextArea = val => setTextArea(val)

  const textFieldNormal = (
    <TextField
      type={INPUT_TYPES.NAME}
      value={value}
      onChange={handleChangeText}
      name='txtNormal'
      label='Normal TextField'
      helperText='Normal'
      placeholder='Placeholder Normal'
      color='secondary'
      startAdornment={(
        <InputAdornment
          onClick={() => (console.log('position start'))}
          position='start'
          text='US$'
        />
      )}
      endAdornment={(
        <InputAdornment
          onClick={() => (console.log('position end'))}
          position='end'
          icon='paid'
          color='system'
        />
      )}
    />
  )

  const textFieldDisabled = (
    <TextField
      disabled
      value={value}
      onChange={handleChangeText}
      name='txtDisabled'
      label='Disabled TextField'
      helperText='Disabled'
      placeholder='Placeholder Disabled'
      startAdornment={(
        <InputAdornment
          onClick={() => (console.log('position start'))}
          position='start'
          text='KG'
          color='system'
          disabled
        />
      )}
      endAdornment={(
        <InputAdornment
          onClick={() => (console.log('position end'))}
          position='end'
          icon='fitness_center'
          color='system'
          disabled
        />
      )}
    />
  )

  const textFieldError = (
    <TextField
      value={value}
      onChange={handleChangeText}
      error='Error Message - Error Message Found'
      name='txtError'
      label='Error TextField'
      placeholder='Placeholder Error'
      helperText='Error'
      startAdornment={(
        <InputAdornment
          onClick={() => (console.log('position start'))}
          position='start'
          icon='code'
          color='error'
        />
      )}
    />
  )

  const textFieldRequired = (
    <TextField
      required
      value={value}
      onChange={handleChangeText}
      name='txtRequired'
      label='Required TextField'
      placeholder='Placeholder Required'
      helperText='Required'
      endAdornment={(
        <InputAdornment
          onClick={() => (console.log('position end'))}
          position='end'
          icon='check_circle'
          color='success'
        />
      )}
    />
  )

  const passwordNormal = (
    <Password
      name='pawNormal'
      label='Normal Password'
      placeholder='Placeholder Normal'
      helperText='Normal'
      value={password}
      onChange={handleChangePassword}
    />
  )

  const passwordDisabled = (
    <Password
      disabled
      name='pawDisabled'
      label='Disabled Password'
      placeholder='Placeholder Disabled'
      helperText='Disabled'
      value={password}
      onChange={handleChangePassword}
    />
  )

  const passwordError = (
    <Password
      error='Error Message - Error Message Found'
      name='pawError'
      label='Error Password'
      placeholder='Placeholder Error'
      helperText='Error'
      value={password}
      onChange={handleChangePassword}
    />
  )

  const passwordRequired = (
    <Password
      required
      name='pawRequired'
      label='Required Password'
      placeholder='Placeholder Required'
      helperText='Required'
      value={password}
      onChange={handleChangePassword}
    />
  )

  const numberNormal = (
    <NumberField
      name='numNormal'
      label='Normal Number'
      placeholder='Placeholder Normal'
      helperText='Normal'
      value={number}
      onChange={handleChangeNumber}
      color='secondary'
    />
  )

  const numberDisabled = (
    <NumberField
      disabled
      name='numDisabled'
      label='Disabled Number'
      placeholder='Placeholder Disabled'
      helperText='Disabled'
      value={number}
      onChange={handleChangeNumber}
    />
  )

  const numberError = (
    <NumberField
      error='Error Message - Error Message Found'
      name='numError'
      label='Error Number'
      placeholder='Placeholder Error'
      helperText='Error'
      value={number}
      onChange={handleChangeNumber}
    />
  )

  const numberRequired = (
    <NumberField
      required
      name='numRequired'
      label='Required Number'
      placeholder='Placeholder Required'
      helperText='Required'
      value={number}
      onChange={handleChangeNumber}
    />
  )

  const textAreaNormal = (
    <TextArea
      name='textArea'
      label='Text Area'
      value={textArea}
      onChange={handleChangeTextArea}
      maxLength={400}
      resize
    />
  )

  const baseStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    columnGap: '0.5em'
  }

  return (
    <>
      <h1>Inputs Full Components</h1>

      <div>
        <h2>TextFields</h2>
        <div style={{ ...baseStyle, marginBottom: '1.0em' }}>
          {textFieldNormal}
          {textFieldDisabled}
        </div>
        <div style={baseStyle}>
          {textFieldError}
          {textFieldRequired}
        </div>
      </div>

      <div>
        <h2>Password</h2>
        <div style={{ ...baseStyle, marginBottom: '1.0em' }}>
          {passwordNormal}
          {passwordDisabled}
        </div>
        <div style={baseStyle}>
          {passwordError}
          {passwordRequired}
        </div>
      </div>

      <div>
        <h2>Number</h2>
        <div style={{ ...baseStyle, marginBottom: '1.0em' }}>
          {numberNormal}
          {numberDisabled}
          {numberError}
          {numberRequired}
        </div>
      </div>

      <div>
        <h2>TextArea</h2>
        <div style={{ ...baseStyle, marginBottom: '1.0em' }}>
          {textAreaNormal}
        </div>
      </div>
    </>
  )
}

export default Inputs
